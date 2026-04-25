import { createAction, props } from "@ngrx/store";



export const loadUser=createAction('[User] Load User');


export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: any }>()
);