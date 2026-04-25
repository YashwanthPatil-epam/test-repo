// user.state.ts

import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

export const userReducer=createReducer(
    initialState,
    on(userActions.loadUser,state=>({
        ...state,
        loading:true,error:null
    })),
    on(userActions.loadUserSuccess,(state,{user})=>({
        ...state,
        user,loading:false,error:null
    })),



)