import React from "react";
import "../styles/RedPacket.css";
import hongPao from "../images/HongPao.png";
import tiger from "../images/tiger.png";

export default function RedPacket() {
  return (
    <div className="box">
      <img src={hongPao} className="hongPao" alt="Red packet" />
      <div className="text">
        <h1>You are born in the year of the Tiger 🐯</h1>
      </div>
      <img src={tiger} className="zodiac" alt="Red packet" />
      <div className="calendar">
        <h2>Check out your birthday in the Chinese Lunar Calendar 👇🏻</h2>
      </div>
    </div>
  );
}
