import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootreducers } from "../reducer";
import thunk from "redux-thunk";

export const store = createStore(
  rootreducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch
