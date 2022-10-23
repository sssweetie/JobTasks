import React, { useState, useEffect } from "react";
import styles from "./Total.module.css";
const Total = ({ travel, timeStart, timeFinish }: any) => {
  const [peopleCount, setPeopleCount] = useState(0);//how many tickets
  const [ticketPrices, setTicketPrices] = useState(0);//ticket price
  const [ticketName, setTicketName] = useState("билет");//state to display current syntax of word "билет"

  useEffect(() => {
    setPeopleCount(0);
    setTicketPrices(0);
  }, [travel]); //travelDidUpdate ==> reset inputs etc

  useEffect(() => {
    String(peopleCount)
      .split("")
      .forEach((item) => {
        return parseInt(item) === 1
          ? setTicketName("билет")
          : parseInt(item) >= 2 && parseInt(item) <= 4
          ? setTicketName("билета")
          : setTicketName("билетов");
      });
  }, [peopleCount]); //right syntax of words "билет, билета, билетов" that depends on having 1,[2-4],[5-9] in current number

  const totalPrice = () => {
    let price = 0;
    travel === "ABA" ? (price = 1200) : (price = 700);
    setTicketPrices(price * peopleCount);
  };//from A to B to A price = 1200, else 700. calculate sum.

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.sumWrapper}>
        <label>Количество билетов</label>
        <div className={styles.inputInfoWrapper}>
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(parseInt(e.target.value))}
          ></input>
          <button onClick={() => totalPrice()}>Посчитать</button>
        </div>
      </div>
      <div className={styles.output}>
        <p>
          Вы выбрали {peopleCount ? peopleCount : 0} {ticketName} по
          маршруту&nbsp;
          {travel} стоимостью &nbsp;{ticketPrices}.
        </p>
        {travel === "ABA" ? (
          <div>
            <p>Время пути составляет 100 минут.</p>
            <p>
              Теплоход отправляется в {timeStart}, а прибудет в {timeFinish}.
            </p>
          </div>
        ) : (
          <div>
            <p>Это путешествие займет у вас 50 минут.</p>
            <p>Теплоход отправляется в {timeStart}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Total;
