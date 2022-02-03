/* eslint-disable no-unused-vars */
import React from 'react';
import SelectDatePicker from '@netojose/react-select-datepicker';
import solarLunar from 'solarlunar';
import '../styles/RedPacket.css';
import hongPao from '../images/HongPao1.png';
import 兔 from '../images/兔.png';
import 牛 from '../images/牛.png';
import 狗 from '../images/狗.png';
import 猪 from '../images/猪.png';
import 猴 from '../images/猴.png';
import 羊 from '../images/羊.png';
import 虎 from '../images/虎.png';
import 蛇 from '../images/蛇.png';
import 马 from '../images/马.png';
import 鸡 from '../images/鸡.png';
import 鼠 from '../images/鼠.png';
import 龙 from '../images/龙.png';

export default function RedPacket() {
  const [birthday, setBirthday] = React.useState(new Date());

  const map = new Map([
    ['兔', { name: 'Rabbit', image: 兔 }],
    ['牛', { name: 'Ox', image: 牛 }],
    ['狗', { name: 'Dog', image: 狗 }],
    ['猪', { name: 'Pig', image: 猪 }],
    ['猴', { name: 'Monkey', image: 猴 }],
    ['羊', { name: 'Goat', image: 羊 }],
    ['虎', { name: 'Tiger', image: 虎 }],
    ['蛇', { name: 'Snake', image: 蛇 }],
    ['马', { name: 'Horse', image: 马 }],
    ['鸡', { name: 'Rooster', image: 鸡 }],
    ['鼠', { name: 'Rat', image: 鼠 }],
    ['龙', { name: 'Dragon', image: 龙 }],
  ]);

  const handleChange = (value) => {
    if (value) {
      console.log(value);
      setBirthday(value);
    }
  };

  const lunarBirthday = solarLunar.solar2lunar(birthday.getFullYear(), birthday.getMonth() + 1, birthday.getDate());
  console.log('lunarBirthday', lunarBirthday);
  const animalIcon = map.get(lunarBirthday.animal).image;
  const animalName = map.get(lunarBirthday.animal).name;

  return (
    <div className="box">
      <img src={hongPao} className="hongPao" alt="Red packet" />
      <div className="text">
        <h2>
          You are born in the year of the
        </h2>
        <h1>
          {animalName}
          {' '}
          {lunarBirthday.animal}
        </h1>
      </div>
      <img src={animalIcon} className="zodiac" alt="Red packet" />
      <div className="calendar">
        <h2>Check out your birthday in the Chinese Lunar Calendar 👇🏻</h2>
        <SelectDatePicker className="SelectDatePicker" minDate={new Date(1901, 0, 1)} maxDate={new Date(2100, 11, 31)} showLabels={false} value={birthday} onDateChange={handleChange} />
      </div>
    </div>
  );
}
