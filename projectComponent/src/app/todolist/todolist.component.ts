import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
 public tasks:string[]=[];
 public task!:string;
 public isEdit:boolean=false;

 add()
 {
    console.log(this.task);
      this.tasks.push(this.task);
      this.task="";
 }
 edit(){
  this.isEdit=true;
 }
 complete(){}
 save (){
  this.isEdit=false;
 }
 
 
  cancel(){
    this.isEdit=false;
  }
}
