import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";



@Component({
    selector:'layout',
    styleUrl :'./layout.scss',
    templateUrl:'./layout.html',
    standalone:true,
    imports:[RouterOutlet]
})

export class Layout {

}