import React, {  useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypeSelector";
import {bindActionCreators} from "redux"
import { ActionCreator } from "./redux";
import View from "./component/View";

function App() {
  const dispatch = useAppDispatch();
  const { getdata , CountIncrease, CountDecrease } = bindActionCreators(ActionCreator,dispatch)
  const storedata = useAppSelector(state => state.product);
  const countdata = useAppSelector(state => state.count);

  const [count, setCount] = useState(0);
  const [data ,setData] = useState<{}[] | null >(null);
  const [storeCounter, setStoreCounter] = useState(0);

  useEffect(()=>{
    getdata();
  },[dispatch])

  useEffect(()=>{
    setData(storedata.data);
  },[data,storedata.data])

  useEffect(()=>{
    setStoreCounter(countdata)
  },[countdata])

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >

      <h1>Store counter</h1>
      <h1>{storeCounter}</h1>

      <button onClick={()=>{CountIncrease(10)}}>+</button>
      <br />
      <button onClick={()=>{CountDecrease(5)}}>-</button>

      <h1>Normal counter</h1>
      <h1>{count}</h1>
      <button onClick={changeCount}>add</button>

      <br />
      <button onClick={()=>{getdata()}}>Get data</button>
      <br />
      {
        data?.map((item)=>{
          return <View data={item} />
        })
      }

    </div>
  );
}

export default App;
