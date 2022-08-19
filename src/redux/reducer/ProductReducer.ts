import { ActionTypes } from "../action/actiontypes";
import { Action, InitalState, stateType } from "./models";

export const ProductReducer = (
  state: stateType = InitalState,
  action: Action
  
): stateType => {
  switch (action.type) {
    case ActionTypes.PENDING:
      return { pending: true, data: [], failed: null };

    case ActionTypes.GET_DATA:

    if(Array.isArray(action.payload)){
      action.payload = action.payload.splice(0,10);
    }

    return { pending: false, data: action.payload , failed: null };

    case ActionTypes.FAIL_REQUEST:
      return { pending: false, data: [], failed: action.payload };

    default:
      return state;
  }
};
