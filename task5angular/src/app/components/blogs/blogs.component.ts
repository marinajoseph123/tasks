import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  firstName:string = "marina"
  inputType:string = "password"
  imagePath:string = "assets\images\dorm1.jpg"
  inputVal : string = ""
  constructor() { }
  
  ngOnInit(): void {
  }
  getNumber(){
    return 200
  }
changeName(){
  this.firstName = "mervat"
}
handleInput(eve:any){
console.log(eve.value)
}

}
