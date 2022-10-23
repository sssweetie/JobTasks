import React from "react";
import { connect } from "react-redux";
import {
  timeFinishActionCreator,
  optionDisabledActionCreator,
  timeStartActionCreator,
} from "../../Redux/Reducers/selectReducer";
import SelectTime from "./SelectTime";

const mstp = (state: any) => ({
  isDisabled: state.selectReducer.isDisabled,
  timeFinish: state.selectReducer.timeFinish,
  timeStart: state.selectReducer.timeStart,
});

const mdtp = (dispatch: any) => {
  return {
    disableOption: (disable: Array<string>) => {
      dispatch(optionDisabledActionCreator(disable));
    },
    setTimeFinish: (timeFinish: string) => {
      dispatch(timeFinishActionCreator(timeFinish));
    },
    setTimeStart: (timeStart: string) => {
      dispatch(timeStartActionCreator(timeStart));
    },
  };
};

const SelectTimeContainer = (props: any) => {
  return (
    <SelectTime
      travel={props.travel}
      isDisabled={props.isDisabled}
      disableOption={props.disableOption}
      timeFinish={props.timeFinish}
      setTimeFinish={props.setTimeFinish}
      timeStart={props.timeStart}
      setTimeStart={props.setTimeStart}
    ></SelectTime>
  );
};

export default connect(mstp, mdtp)(SelectTimeContainer);
