import React, { useState } from "react";
import clock from "../../Images/TicketWrapper/clock.svg";
import flag from "../../Images/TicketWrapper/flag.svg";
import styles from "./TicketWrapper.module.css";

interface Props {
  marginTop?: string;
  price900: string;
  purple?: boolean;
  img?: string;
  yellow?: boolean;
}

const TicketWrapper = ({
  marginTop,
  price900,
  purple = false,
  yellow = false,
  img,
}: Props) => {
  const [date, setDateSlice] = useState(3);
  const labels = [
    "Билет на целый день",
    "Неограниченное число катаний",
    "6 остановок у главных достопримечательностей",
    "Ближайший рейс сегодня",
  ];
  const times = ["09:00", "12:00", "15:00", "18:00", "21:00", "24:00", "03:00"];
  const labelsComponent = labels.map((item) => (
    <div className={styles.flagWrapper}>
      <img src={flag}></img>
      <p>{item}</p>
    </div>
  ));
  const timesComponent = times.map((item) => {
    return <p className={styles.raceTime}>{item}</p>;
  });
  return (
    <section className={styles.screenWrapper} style={{ marginTop: marginTop }}>
      <div
        className={styles.photoWrapper}
        style={{ backgroundImage: `url(${img})` }}
      >
        {purple ? (
          <p className={styles.newPurple}>НОВИНКА</p>
        ) : yellow ? (
          <p className={styles.newYellow}>НОВИНКА</p>
        ) : null}
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.clockWrapper}>
            <img src={clock}></img>
            <label className={styles.time}>2 часа</label>
          </div>
          <p className={styles.sale}>
            АКЦИЯ - Обзорная экскурсия по рекам и <br></br>каналам с остановками
            Hop on Hop Off 2019
          </p>
        </div>
        <div>{labelsComponent}</div>
        {timesComponent.length > 3 ? (
          <div className={styles.notEnoughTimeWrapper}>
            <div className={styles.timesWrapper}>
              {timesComponent.slice(0, date)}
              {date < times.length ? (
                <p
                  onClick={() => setDateSlice(times.length)}
                  className={styles.moreTime}
                >
                  ещё...
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={styles.timesWrapper}>{timesComponent}</div>
        )}
        <div className={styles.pricesWrapper}>
          <div>
            <p className={styles.price900}>{price900}</p>
            <label className={styles.price1200}>1200 р на причале</label>
          </div>
          <button className={styles.more}>Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default TicketWrapper;
