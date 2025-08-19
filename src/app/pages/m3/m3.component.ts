import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m3',
  templateUrl: './m3.component.html',
  styleUrls: ['./m3.component.scss']
})
export class M3Component implements OnInit {

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
