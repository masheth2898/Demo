import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

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
private _customerName:string;
imageUrl='https://picsum.photos/100';


@ViewChild('nameRef',{static:true}) nameElementRef:ElementRef;

ngAfterViewInit(): void {
  this.nameElementRef.nativeElement.focus();
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
greetUser(updateValue){
  this.userName = updateValue;
  if(updateValue === "Mitul"){
    alert('Welcome back Mitul.');
  }
}
}
