import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from './user.actions'
import { of, switchMap } from "rxjs";



export const userEffect=createEffect(()=>{
const actions=inject(Actions)
    return actions.pipe(
        ofType(userActions.loadUser),
        switchMap(()=>{
            const user={
                id:1,
                name:'Yashwanth',
                email:'yashwanth@example.com'
            }
            return of(userActions.loadUserSuccess({user}));
        })

    )
    
},{functional:true})