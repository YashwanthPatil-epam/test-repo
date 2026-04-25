
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UppercasepipePipe } from "../../pipes/uppercasepipe-pipe";
import { BackgroundColor } from '../../directives/background-color';
import { User } from '../../services/user';
import { Child } from '../child/child';
import { select, Store } from '@ngrx/store';
import * as userActions from '../../store/user.actions';
import * as userSelectors from '../../store/user.selector';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  imports: [RouterLink, UppercasepipePipe,BackgroundColor,Child,ReactiveFormsModule],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  userService=inject(User)
  store=inject(Store)
  userForm :FormGroup = new FormGroup({
    name: new FormControl('')
  });
  items:any=[
    
  ]

  constructor()
  {
    console.log('Product component created');
    this.userService.getUsers().subscribe((res:any)=>{
    
      this.items=res})

this.store.pipe(select(userSelectors.selectUser)).subscribe((res:any)=>{
  console.log('User from store:', res);
})
  }

  
  takeChildEve(event:any){
    this.store.dispatch(userActions.loadUser())

    console.log('Event from child:', event);
  }
}
