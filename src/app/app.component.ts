import { ReturnStatement } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Arul first Angular';
  Designation='Senior Software Engineer';
  salary =30000;
  orderNo="0";
  orderNo1="0";
  orderNo3=0;
  SelectedNumber=0;
  constructor()
  {
    this.salary=0;
  }
  Submit()
  {
    this.title="Kannan";
  }
   DesignationChange()
  {
      this.Designation="Manager";
  }
  calculateSalary()
  {
    let iResult=10;
    return this.salary * iResult;
  }
  givealert()
  {
     this.orderNo3=parseInt(this.orderNo) + parseInt(this.orderNo1) + this.SelectedNumber;
  }
}
