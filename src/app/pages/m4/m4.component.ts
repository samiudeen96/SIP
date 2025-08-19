import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m4',
  templateUrl: './m4.component.html',
  styleUrls: ['./m4.component.scss']
})
export class M4Component implements OnInit {

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
