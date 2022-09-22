import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName:string = "marina"
  inputType:string = "password"
  imagePath:string = "assets/images/helpbox-contact (1).jpg"
  constructor() { }
  inputVal:string = ""
  inputData:string = ""
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
  customH2(eve:any){
    console.log(eve.value)

  }

}
