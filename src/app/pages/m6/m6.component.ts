import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m6',
  templateUrl: './m6.component.html',
  styleUrls: ['./m6.component.scss']
})
export class M6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedContent = -1
  tab(n: number){
    this.selectedContent = n
   }
   close(){
     this.selectedContent = -1
   }
}
