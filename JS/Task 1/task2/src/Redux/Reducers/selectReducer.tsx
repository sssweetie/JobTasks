import React from "react";

const OPTION_DISABLED = "selectReducer/OPTION-DISABLED";
const CHANGE_CURRENT_TIME = "selectReducer/CHANGE-CURRENT-TYPE";
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
  currentTime: "18:00",
};

const selectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPTION_DISABLED: {
      return { ...state, isDisabled: action.disabled };
    }
    case CHANGE_CURRENT_TIME: {
      return { ...state, currentTime: action.currentTime };
    }
    default:
      return state;
  }
};

export const optionDisabledActionCreator = (disabled: Array<string>) => ({
  type: OPTION_DISABLED,
  disabled,
});

export const currentTimeActionCreator = (currentTime: string) => ({
  type: CHANGE_CURRENT_TIME,
  currentTime,
});

export default selectReducer;
