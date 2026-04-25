import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  @Input() name:string='';
  @Output() childeve=new EventEmitter<string>();

  constructor()
  {
    console.log('Child component created');
  }
  sendEventToParent(){
    this.childeve.emit('Hello from Child');
  }
}
