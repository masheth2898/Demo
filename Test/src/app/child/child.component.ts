import { Component, OnInit,EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnChanges ,OnInit{


  @Output() greetEvent = new EventEmitter();
  private _loogedIn:boolean;
  message:string;
  name:string='Mitul';
  @Input() loggedIn:boolean

  constructor(private _interactionService:InteractionService){

  }

  ngOnInit(): void {
   this._interactionService.message$.subscribe(data=>{
     if(data === 'Good morning'){
       alert('Good morning teacher');
     }
     else if(data === 'Very good'){
       alert('Thank you teacher');
     }
   })
  }
  ngOnChanges(changes: SimpleChanges): void {

    let loggedInvalue = changes['loggedIn'];

    if(loggedInvalue.currentValue == true){
    this.message = 'Welcome back';
    }
    else{
    this.message = 'Please log in';
    }
 }
 greetParent(){
   this.greetEvent.emit(this.name);
 }

 greetUser(){
   alert('Welcome Mitul');
 }
}
