import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state,props) => {
      console.log(props,'adasdadxvxcv');
      return state + 1
    }),
    on(decrement, (state) => state > 1 ? state - 1 : 0),
    on(reset, (state) => 0)
)


