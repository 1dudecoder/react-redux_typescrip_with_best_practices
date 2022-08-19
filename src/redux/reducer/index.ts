import {combineReducers} from "redux"
import { CounterReducers } from "./CounterReducers"
import { ProductReducer } from "./ProductReducer"

export const rootreducers = combineReducers({
    product: ProductReducer,
    count : CounterReducers
})

export type RootState = ReturnType<typeof rootreducers>

