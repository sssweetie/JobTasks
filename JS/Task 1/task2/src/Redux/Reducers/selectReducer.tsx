import React from "react";

const OPTION_DISABLED = "selectReducer/OPTION-DISABLED";
const CHANGE_FINISH_TIME = "selectReducer/CHANGE-FINISH-TIME";
const CHANGE_START_TIME = "selectReducer/CHANGE-START-TIME";
let initialState = {
  isDisabled: [
    "inherit",
    "inherit",
    "inherit",
    "inherit",
    "inherit",
    "inherit",
    "inherit",
  ],
  timeFinish: "",
  timeStart: "",
};

const selectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPTION_DISABLED: {
      return { ...state, isDisabled: action.disabled };
    }
    case CHANGE_FINISH_TIME: {
      return { ...state, timeFinish: action.timeFinish };
    }
    case CHANGE_START_TIME: {
      return { ...state, timeStart: action.timeStart };
    }
    default:
      return state;
  }
};

export const optionDisabledActionCreator = (disabled: Array<string>) => ({
  type: OPTION_DISABLED,
  disabled,
});

export const timeFinishActionCreator = (timeFinish: string) => ({
  type: CHANGE_FINISH_TIME,
  timeFinish,
});

export const timeStartActionCreator = (timeStart: string) => ({
  type: CHANGE_START_TIME,
  timeStart,
});

export default selectReducer;
