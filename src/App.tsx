import React, { useState } from "react";
import { Stage, Layer, Line, Image as KImage } from "react-konva";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import {
  Account,
  AggregateTransaction,
  Deadline,
  NetworkType,
  TransferTransaction,
  UInt64,
  RepositoryFactoryHttp,
  PlainMessage,
  TransactionGroup,
  Transaction,
} from "symbol-sdk";
import Konva from "konva";

const App = () => {
  const [image, setImage] = React.useState<HTMLImageElement | null>(null);

  const [hash, setHash] = useState(
    "6F353427DA7F0DA7F32BB9D2029C632E01CC5E4E917DBB3F5D7C4790393FC9C3"
  );
  const EPOCH = 1637848847;
  const G_HASH =
    "7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836";
  const NODE = "https://sym-test-01.opening-line.jp:3001";
  const prikey =
    "B060A0B8F871B14062FECE3D7582ECC89D701C397C42B4F4CE25AEE908E1D489";
  const signer = Account.createFromPrivateKey(prikey, NetworkType.TEST_NET);

  const pri =
    "2923092B527C596847029201AEA7E5E5BA6A86D3FA007A2736D5FE4B396531E3";
  const acc = Account.createFromPrivateKey(pri, NetworkType.TEST_NET);

  const [tool, setTool] = React.useState("pen");
  const [size, setSize] = React.useState(5);
  const [color, setColor] = React.useState("#000000");
  const [lines, setLines] = React.useState<any[]>([]);
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef<Konva.Stage | null>(null);

  const handleMouseDown = (e:any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([
      ...lines,
      {
        tool,
        points: [pos.x, pos.y],
        color,
        size,
      },
    ]);
  };

  const saveFile = () => {
    if (stageRef.current === null) return
    const img = stageRef.current.toDataURL();


    // console.log(img)
    const array: string[] = [];
    const MSG_SIZE = 1023;
    for (let i = 0; i <= Math.floor(img.length / MSG_SIZE); i++) {
      const arr = img.slice(i * MSG_SIZE, (i + 1) * MSG_SIZE);
      array.push(arr)
    }
    console.log("arr", array);

    //===================================================

    const txs = []
    const agtxs = []
    const hashes = []
    //===================================================

    for (let i = 0;i < array.length; i++) {
      // console.log("row", array[i]);
      const inTx = TransferTransaction.create(
        Deadline.create(EPOCH),
        acc.address,
        [],
        PlainMessage.create(array[i]),
        NetworkType.TEST_NET
      ).toAggregate(signer.publicAccount)

      txs.push(inTx)

      if (i % 100 !== 99 && i !== array.length-1) {
        continue
      }

      const agtx = AggregateTransaction.createComplete(
        Deadline.create(EPOCH),
        txs,
        NetworkType.TEST_NET,
        [],
        UInt64.fromUint(2000000)
      )

      const signedTx = signer.sign(agtx, G_HASH)
      agtxs.push(signedTx)
      hashes.push(signedTx.hash)

      const repositoryFactory = new RepositoryFactoryHttp(NODE);
      const transactionHttp = repositoryFactory.createTransactionRepository();

      console.log('a', signedTx)

      transactionHttp.announce(signedTx).subscribe(
        (x) => console.log(x),
        (err) => console.error(err),
      );

      // const data = JSON.stringify({
      //   version: 1,
      //   mime: 'png',
      //   name: 'test',
      //   size: img.length,
      //   data: hashes.join(',')
      // })

      // const PMSG_SIZE = 1023
      // const a = []
      // for (let i = 0; i <= Math.floor(data.length / PMSG_SIZE); i++) {
      //   a.push(data.substr(i * PMSG_SIZE, PMSG_SIZE))
      // }

      // console.log(data)
      // console.log(a)

      // const tx = TransferTransaction.create(
      //   Deadline.create(EPOCH),
      //   acc.address,
      //   [],
      //   PlainMessage.create(data),
      //   NetworkType.TEST_NET,
      //   UInt64.fromUint(2000000)
      // );
      
      // const st = signer.sign(tx, G_HASH)

      // console.log('tx', tx)
      // console.log('st', st)

      // transactionHttp.announce(st).subscribe(
      //   (x) => console.log(x),
      //   (err) => console.error(err)
      // );
    }

    setHash(hashes.join(','))
    
  };

  const getFile = async () => {
    console.log('hash', hash)
    const repositoryFactory = new RepositoryFactoryHttp(NODE);
    const transactionHttp = repositoryFactory.createTransactionRepository();
      const dataInfo = innerTxJoin(
          await transactionHttp
            .getTransaction(hash, TransactionGroup.Confirmed)
            .toPromise()
        )
      console.log('data', dataInfo)
      const img = new Image()
      img.src = dataInfo
      setImage(img)

  }

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleImage = (e: any) => {
    const img_url = URL.createObjectURL(e.target.files[0]);
    const img = new Image();
    img.src = img_url;
    setImage(img);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  return (
    <>
      <FlexDiv>
        <select
          value={tool}
          onChange={(e) => {
            setTool(e.target.value);
          }}
        >
          <option value="pen">ペン</option>
          <option value="eraser">消しゴム</option>
        </select>
        <select
          value={size}
          onChange={(e: any) => {
            setSize(e.target.value);
          }}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {/* <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={(e) => handleImage(e)}
        ></input> */}
        <button id="save" onClick={saveFile}>
          PUSH
        </button>
        <input type="text" onChange={e => setHash(e.target.value)} />
        <button id="import" onClick={getFile}>
          PULL
        </button>
      </FlexDiv>
      <FlexDiv>
        <StageDiv>
          <Stage
            width={500}
            height={500}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            style={{
              border: "solid",
              marginTop: "10px",
            }}
            ref={stageRef}
          >
            <Layer>
              {image !== null && <KImage image={image} />}
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.size}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                />
              ))}
            </Layer>
          </Stage>
        </StageDiv>
        <CustomSketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
      </FlexDiv>
    </>
  );
};
export default App;

// function downloadURI(uri: any, name: any) {
//   var link = document.createElement("a");
//   link.download = name;
//   link.href = uri;
//   link.click();
// }

// function formatDate(date, format) {
//   format = format.replace(/yyyy/g, date.getFullYear());
//   format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
//   format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
//   format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
//   format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
//   format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
//   format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
//   return format;
// }

function toArrayBuffer(buffer: any) {
  const view = new Uint8Array(buffer.length);
  for (let i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return view;
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StageDiv = styled.div`
  background-color: #ffffff;
`;

const CustomSketchPicker = styled(SketchPicker)({
  marginTop: "10px",
  marginLeft: "20px",
});

function innerTxJoin(aggTx: Transaction) {
  let data = "";
  const innerTxs = (aggTx as AggregateTransaction).innerTransactions;
  for (const inTx of innerTxs) {
    data += (inTx as TransferTransaction).message.payload
  }
  return data;
}