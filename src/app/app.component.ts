import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCheck=true;
  onchange($event){
    console.log($event);
  }
  value="1";
  foods = [
    {id: '0', viewValue: 'Steak'},
    {id: '1', viewValue: 'Pizza'},
    {id: '2', viewValue: 'Tacos'}
  ];
}
