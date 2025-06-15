
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment',props<{msg: string}>());
export const decrement = createAction('[Counter Components] Decrement');
export const reset = createAction('[Counter Component] Reset');

