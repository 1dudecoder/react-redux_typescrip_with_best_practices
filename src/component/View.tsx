import React from "react";
import { datatype } from "../redux/reducer/models";

export interface typedata {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

interface Props {
  data: typedata;
}

export default function View({
  data: { userId, id, completed, title },
}: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        background: "lightpink",
        margin: "2px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>ID : {id}</p>
      <h2>TITLE : {title}</h2>
      <p>USERID : {userId}</p>
      <p>COMPLETED :{completed}</p>
    </div>
  );
}
