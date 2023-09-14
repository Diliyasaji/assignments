import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  public applicationForm: Array<{name :string,birthday: number,email:string,gender: string,institute: string, phoneno: number,nationality: string}>=[]
  public name!: string;
  public birthday!: number;
  public email!:string;
  public gender!: string;
  public institute!: string;
  public phoneno!: number;
  public nationality!: string;
  onSave(){
    let result={name:this.name,birthday:this.birthday,email:this.email,gender:this.gender,institute:this.institute,phoneno:this.phoneno,nationality:this.nationality};
    console.log(result);
    this.applicationForm.push(result);
    debugger
  }
  onClear(){
   
   
   this.applicationForm.pop();
   debugger
  }
}
