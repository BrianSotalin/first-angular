import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-comp',
  templateUrl: './one-comp.component.html',
  styleUrls: ['./one-comp.component.css']
})
export class OneCompComponent  {
  name:string ='Ingrese su nombre';
  age:number = 0;
  users: string []= ['Tyson','Davis','Lebron','Linares'];
  add(newUser){
    this.users.push(newUser.value);
    newUser.value='';
    return false;
  }
  delete(user){
    for(let i=0;i<this.users.length;i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  
}
