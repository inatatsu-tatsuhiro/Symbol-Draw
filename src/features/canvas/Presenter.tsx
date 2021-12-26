import React from "react";
import { useParams } from "react-router-dom";

const Page: React.VFC = () => {
  const { hash } = useParams()
  return <div>Canvas: {hash}</div>;
};

export default Page;
