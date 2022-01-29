import React from "react";
import "../styles/RedPacket.css";
import hongPao from "../images/HongPao.png";

export default function RedPacket() {
  return (
    <div>
      <img src={hongPao} className="hongPao" alt="Red packet" />
      <h1>You are born in the year of the tiger</h1>
    </div>

  );
}
