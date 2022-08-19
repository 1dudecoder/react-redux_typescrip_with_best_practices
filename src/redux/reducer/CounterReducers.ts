import { CounterTypes } from "../action/actiontypes";
import { Counter } from "./models";

type initalstate = number;
const initalstate = 0;

export const CounterReducers = (
  state: initalstate = initalstate,
  action: Counter
): initalstate => {
  switch (action.type) {
    case CounterTypes.INCRESE:
      return state + action.payload;
    case CounterTypes.DECRESE:
      return state - action.payload;
    default:
      return state;
  }
};
