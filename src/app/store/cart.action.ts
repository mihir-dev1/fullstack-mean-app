import { createAction, props } from "@ngrx/store";

export const addCart = createAction('[Item, Component] Add To Cart',props<{item:any}>());
