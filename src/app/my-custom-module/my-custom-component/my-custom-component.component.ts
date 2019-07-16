import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myCustomModule-my-custom-component',
  templateUrl: './my-custom-component.component.html',
  styleUrls: ['./my-custom-component.component.css']
})
export class MyCustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  MouseOver(){
    console.log('over');
  }

  MouseOut(){
    console.log('out');
  }
}
