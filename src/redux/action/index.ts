import { Dispatch } from "react";
import { Action, datatype } from "../reducer/models";
import { ActionTypes, CounterTypes } from "./actiontypes";
import axios from "axios"


export const getdata = () => async ( dispatch : Dispatch<Action> ) => {  
  try{
    dispatch({
      type:ActionTypes.PENDING,
    })

    let {data} = await axios.get<datatype[]>('https://jsonplaceholder.typicode.com/todos');
    console.log(data, "arryua")
    dispatch({
      type:ActionTypes.GET_DATA,
      payload: data,
    }) 

  }catch(e:any){
    dispatch({
      type:ActionTypes.FAIL_REQUEST,
      payload:e.message
    })
  }
}


export const CountIncrease = (data:number) => {
  return {
    type: CounterTypes.INCRESE,
    payload: data
  }
} 

export const CountDecrease = (data:number) => {
  return {
    type: CounterTypes.DECRESE,
    payload: data
  }
} 


