import React from "react";
import "../styles/RedPacket.css";
import hongPao from "../images/HongPao.png";

export default function RedPacket() {
  return (
    <div>
      <div className="box">
        <img src={hongPao} className="hongPao" alt="Red packet" />
        <div className="text">
          <h1>You are born in the year of the Tiger 🐯</h1>
        </div>
      </div>
    </div>
  );
}
