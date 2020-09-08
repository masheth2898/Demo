import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

pageHeader = 'Angular Components Interaction';
count=0;
name:string;
userName:string;
userLoggedIn:boolean = false;
private _customerName:string;
imageUrl='https://picsum.photos/100';
@ViewChild(ChildComponent,{static:true}) childeComponent:ChildComponent

constructor(private _interactionService:InteractionService){

}
ngAfterViewInit(): void {
  this.childeComponent.message='Message from parent component';
}

clickEvent(){
  this.count+=1;
}
get customerName(){
  return this._customerName;
}

set customerName(value:string){
  this._customerName = value;

  if(value === "Mitul"){
    alert('Hello Mitul.');
  }
}
greetUser(name:string){
  alert('Hello '+name);
}
greetStudents(){
this._interactionService.sendmessage('Good morning');
}
appriciateStudents(){
  this._interactionService.sendmessage('Very good');
}
}
