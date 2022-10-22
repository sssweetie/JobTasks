import React, { useState, useEffect } from "react";
import styles from "./Total.module.css";
const Total = ({ travel, timeStart, timeFinish }: any) => {
  const [peopleCount, setPeopleCount] = useState(0);
  const [ticketPrices, setTicketPrices] = useState(0);
  const [ticketName, setTicketName] = useState("билет");

  useEffect(() => {
    setPeopleCount(0);
    setTicketPrices(0);
  }, [travel]);
  useEffect(() => {
    peopleCount === 1
      ? setTicketName("билет")
      : peopleCount >= 2 && peopleCount <= 4
      ? setTicketName("билета")
      : setTicketName("билетов");
  }, [peopleCount]);

  const totalPrice = () => {
    let price = 0;
    travel === "ABA" ? (price = 1200) : (price = 700);
    setTicketPrices(price * peopleCount);
  };

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
          Вы выбрали {peopleCount ? peopleCount : 0} {ticketName} по маршруту
          &nbsp;
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
