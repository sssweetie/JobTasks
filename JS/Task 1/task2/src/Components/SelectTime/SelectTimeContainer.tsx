import React from "react";
import { connect } from "react-redux";
import {
  currentTimeActionCreator,
  optionDisabledActionCreator,
} from "../../Redux/Reducers/selectReducer";
import SelectTime from "./SelectTime";

const mstp = (state: any) => ({
  isDisabled: state.selectReducer.isDisabled,
  currentTime: state.selectReducer.currentTime,
});

const mdtp = (dispatch: any) => {
  return {
    disableOption: (disable: Array<string>) => {
      dispatch(optionDisabledActionCreator(disable));
    },
    setCurrentTime: (currentTime: string) => {
      dispatch(currentTimeActionCreator(currentTime));
    },
  };
};

const SelectTimeContainer = (props: any) => {
  return (
    <SelectTime
      travel={props.travel}
      isDisabled={props.isDisabled}
      disableOption={props.disableOption}
      currentTime={props.currentTime}
      setCurrentTime={props.setCurrentTime}
    ></SelectTime>
  );
};

export default connect(mstp, mdtp)(SelectTimeContainer);
