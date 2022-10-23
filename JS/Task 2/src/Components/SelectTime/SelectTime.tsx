import React, { useState, useEffect } from "react";
import Total from "../ScoreTickets/Total";
import styles from "./SelectTime.module.css";

interface Travel {
  travel: string;
  isDisabled: Array<string>;
  disableOption: any;
  timeFinish: string;
  setTimeFinish: any;
  timeStart: string;
  setTimeStart: any;
}

const SelectTime = ({
  travel,
  isDisabled,
  disableOption,
  timeFinish,
  setTimeFinish,
  timeStart,
  setTimeStart,
}: Travel) => {
  const timeTravelAB = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00"]; //from A to B
  const timeTravelBA = ["18:30", "18:45", "19:00", "19:15", "21:00", "21:55"]; //from B to A

  const hoursInMinutes = (time: string) => {
    return parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
  }; //convert hours in minutes to determ timezone

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
  }; //get time zone

  useEffect(
    () =>
      travel === "BA"
        ? setTimeStart(getTimeZone(timeTravelBA[0]))
        : setTimeStart(getTimeZone(timeTravelAB[0])),
    [travel]
  ); //travelDidUpdate ==> update output info

  useEffect(() => {
    setTimeFinish(getTimeZone(timeTravelBA[0]));
    setTimeStart(getTimeZone(timeTravelAB[0]));
  }, []);
  //travelDidMount ==> set initial state

  const selectAB = timeTravelAB.map((time, index) => (
    <option key={index} value={getTimeZone(time)}>
      {getTimeZone(time)}
    </option>
  )); //select from A to B

  const selectBA = timeTravelBA.map((time, index) => (
    <option key={index} value={getTimeZone(time)}>
      {getTimeZone(time)}
    </option>
  )); //select from B to A

  const selectABA = timeTravelBA.map((time, index) => (
    <option
      key={index}
      value={getTimeZone(time)}
      style={{ display: isDisabled[index] }}
    >
      {getTimeZone(time)}
    </option>
  )); //select from A to B to A

  const getTime = (target: any) => {
    let disabledCopy = [];
    let index = 0;
    //if selected time index bigger or we dont have enough time (50min)
    //it means that we dont have to display previous records
    for (let i = 0; i < timeTravelAB.length; i++) {
      if (
        target.selectedIndex > i ||
        Math.abs(
          hoursInMinutes(target.value) -
            hoursInMinutes(getTimeZone(timeTravelBA[i]))
        ) < 50
      )
        //array to display records
        disabledCopy[i] = "none";
      else if (index === 0) {
        disabledCopy[i] = "inherit";
        index = i;
      } else disabledCopy[i] = "inherit";
    }
    //update state
    disableOption(disabledCopy);
    setTimeFinish(getTimeZone(timeTravelBA[index]));
    setTimeStart(target.value);
  }; //calculating time

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
              onChange={(e) => setTimeFinish(e.target.value)}
              value={timeFinish}
            >
              {selectABA}
            </select>
          </div>
        )}
      </div>
      <Total
        travel={travel}
        timeStart={timeStart}
        timeFinish={timeFinish}
      ></Total>
    </div>
  );
};

export default SelectTime;
