import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
 public userList:Array<{name: string,age: number}>=[]
 public name = '';
 public age = 0;
 onSave()
 {
  let result ={name:this.name,age:this.age};
  this.userList.push(result);
  this.name=' ';
  this.age=0;

 }
  
}
