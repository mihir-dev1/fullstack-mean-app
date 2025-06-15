import { createReducer, on } from "@ngrx/store"
import { addCart } from "./cart.action"
import { AppState } from "./app.state"

export const initialState:AppState = {
  cart: []
}

export const cartReducer = createReducer(
  initialState,
  on(addCart,(state:AppState,props) => {
    return {...state, cart:[...state.cart,props]}
  })
)
