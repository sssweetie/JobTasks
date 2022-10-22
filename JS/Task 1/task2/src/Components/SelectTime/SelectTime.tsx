import React, { useState } from "react";
import Total from "../ScoreTickets/Total";
import styles from "./SelectTime.module.css";
interface Travel {
  travel: string;
  isDisabled: Array<string>;
  disableOption: any;
  currentTime: string;
  setCurrentTime: any;
}

const SelectTime = ({
  travel,
  isDisabled,
  disableOption,
  currentTime,
  setCurrentTime,
}: Travel) => {
  const [timeStart, setTimeStart] = useState("18:00");
  const hoursInMinutes = (time: string) => {
    return parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
  };

  const getTimeZone = (time: string) => {
    const currentTime = new Date();
    let grandTotal = hoursInMinutes(time) - currentTime.getTimezoneOffset();
    let bookH = Math.floor(grandTotal / 60);
    let bookM = grandTotal % 60;
    if (bookH >= 24) bookH = bookH - 24;
    return (
      bookH.toString().padStart(2, "0") +
      ":" +
      bookM.toString().padStart(2, "0")
    );
  };

  const timeTravelAB = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00"];
  const timeTravelBA = ["18:30", "18:45", "19:00", "19:15", "21:00", "21:55"];

  const selectAB = timeTravelAB.map((time, index) => (
    <option key={index} value={getTimeZone(time)}>
      {getTimeZone(time)}
    </option>
  ));

  const selectBA = timeTravelBA.map((time, index) => (
    <option key={index} value={getTimeZone(time)}>
      {getTimeZone(time)}
    </option>
  ));

  const selectABA = timeTravelBA.map((time, index) => (
    <option
      key={index}
      value={getTimeZone(time)}
      style={{ display: isDisabled[index] }}
    >
      {getTimeZone(time)}
    </option>
  ));

  const getTime = (target: any) => {
    let disabledCopy = [];
    let index = 0;
    for (let i = 0; i < timeTravelAB.length; i++) {
      if (
        target.selectedIndex > i ||
        Math.abs(
          hoursInMinutes(target.value) -
            hoursInMinutes(getTimeZone(timeTravelBA[i]))
        ) < 50
      )
        disabledCopy[i] = "none";
      else if (index === 0) {
        disabledCopy[i] = "inherit";
        index = i;
      } else disabledCopy[i] = "inherit";
    }
    disableOption(disabledCopy);
    setCurrentTime(getTimeZone(timeTravelBA[index]));
    setTimeStart(target.value);
  };

  return (
    <div>
      <div className={styles.selectWrapper}>
        <p>
          Выберите<br></br> время
        </p>
        {travel === "AB" ? (
          <select
            onChange={(e) => setTimeStart(e.target.value)}
            value={timeStart}
            className={styles.advancedSelect}
          >
            {selectAB}
          </select>
        ) : travel === "BA" ? (
          <select
            onChange={(e) => setTimeStart(e.target.value)}
            value={timeStart}
            className={styles.advancedSelect}
          >
            {selectBA}
          </select>
        ) : (
          <div className={styles.timeStartFinish}>
            <select
              className={styles.basicSelect}
              onChange={(e) => getTime(e.target)}
            >
              {selectAB}
            </select>
            <select
              className={styles.basicSelect}
              onChange={(e) => setCurrentTime(e.target.value)}
              value={currentTime}
            >
              {selectABA}
            </select>
          </div>
        )}
      </div>

      <Total
        travel={travel}
        timeStart={timeStart}
        timeFinish={currentTime}
      ></Total>
    </div>
  );
};

export default SelectTime;
