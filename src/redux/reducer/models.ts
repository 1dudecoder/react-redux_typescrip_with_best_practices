import { ActionTypes, CounterTypes } from "../action/actiontypes";

export interface datatype {
  userId: number ,
  id: number,
  title: string,
  completed: boolean
} 


export interface stateType {
  pending: boolean;
  data: datatype[] | null ;
  failed: string|null;
}

export const InitalState = {
  pending: false,
  data: [],
  failed: null,
};

interface pendingType {
  type: ActionTypes.PENDING;
}

interface getDataType {
  type: ActionTypes.GET_DATA;
  payload: datatype[] | null;
}

interface failedType {
  type: ActionTypes.FAIL_REQUEST;
  payload: string | null
}

export type Action = pendingType | getDataType | failedType;


// ----------------------------------------

interface increase {
  type: CounterTypes.INCRESE,
  payload: number 
}

interface decrese {
  type: CounterTypes.DECRESE,
  payload : number
}

export type Counter = increase | decrese;