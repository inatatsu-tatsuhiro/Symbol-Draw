# 画像のアップロード

アップロードする画像を base64 エンコーディングし 1023 区切りで TransferTransaction の PlainMessage に格納し AggregateComplate する。(agtx)

アグリゲートトランザクションのハッシュ値等の情報を以下のようにまとめ、JSON 文字列化したものを TransferTransaction の PlainMessage に格納する。(tx)

```
{
  version: 1,
  name: 'symbol-draw',
  mode: 'gameMode',
  previousHash: 'previousHash',
  data: 'hashes.join(',')',
}
```

mode: ゲームを複数種類作る余裕があった場合に使う

previousHash: 前のチェーンのハッシュがあれば入れる

data: agtx のハッシュ、アグリゲートトランザクションが複数になる場合は「,」を区切り文字にしてつなげる

# 画像の閲覧

tx の Message を JSON 化し、data に格納されている agtx のインナートランザクションのメッセージを連結し、base64 形式の画像を復元し、画面に描画する

# モザイクとの紐付け

tx のハッシュを mosaic の Metadata(illust)に付与する

# モザイク画像の表示

モザイクの Metadata(illust)の値を取得する。
取得したハッシュに対して画像の一覧と同様に描画する

# まとめ

- 画像データを base64 にする
- 分割してアグリゲートトランザクションにする
- アグリゲートトランザクションのデータをまとめるトランザクションを作る
- トランザクションのハッシュをモザイクのメタデータに入れる
