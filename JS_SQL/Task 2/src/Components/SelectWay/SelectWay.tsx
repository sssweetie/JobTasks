import React, { useState } from "react";
import SelectTimeContainer from "../SelectTime/SelectTimeContainer";
import styles from "./SelectWay.module.css";
const SelectAB = () => {
  const [travel, setTravel] = useState("AB");

  const getValue = (target: any) => {
    setTravel(target);
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.selectWrapper}>
        <p>
          Выберите<br></br>направление
        </p>
        <select
          className={styles.selectWay}
          onChange={(e) => getValue(e.target.value)}
        >
          <option value="AB">из A в B</option>
          <option value="BA">из B в A</option>
          <option value="ABA">из A в B и обратно в А</option>
        </select>
      </div>
      <SelectTimeContainer travel={travel}></SelectTimeContainer>
    </div>
  );
};

export default SelectAB;
