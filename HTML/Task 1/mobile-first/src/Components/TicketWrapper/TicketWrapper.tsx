import React from "react";
import clock from "../../Images/TicketWrapper/clock.svg";
import flag from "../../Images/TicketWrapper/flag.svg";
import styles from "./TicketWrapper.module.css";
import spb from "../../Images/TicketWrapper/spb.png";
const TicketWrapper = () => {
  const labels = [
    "Билет на целый день",
    "Неограниченное число катаний",
    "6 остановок у главных достопримечательностей",
    "Ближайший рейс сегодня",
  ];
  const times = ["09:00", "12:00", "15:00", "18:00"];
  const labelsComponent = [];
  const timesComponent = [];

  for (let i = 0; i < labels.length; i++) {
    labelsComponent.push(
      <div className={styles.flagWrapper}>
        <img src={flag}></img>
        <p>{labels[i]}</p>
      </div>
    );
    timesComponent.push(<div className={styles.raceTime}>{times[i]}</div>);
  }
  return (
    <section className={styles.screenWrapper}>
      <div
        className={styles.photoWrapper}
        style={{
          backgroundImage: `url(${spb})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>НОВИНКА</p>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.clockWrapper}>
          <img src={clock}></img>
          <label className={styles.time}>2 часа</label>
        </div>
        <p className={styles.sale}>
          АКЦИЯ - Обзорная экскурсия по рекам и <br></br>каналам с остановками
          Hop on Hop Off 2019
        </p>
        <div>{labelsComponent}</div>
        <div className={styles.timesWrapper}>{timesComponent}</div>
        <div className={styles.pricesWrapper}>
          <div>
            <p className={styles.price900}>900₽</p>
            <label className={styles.price1200}>1200 р на причале</label>
          </div>
          <button className={styles.more}>Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default TicketWrapper;
