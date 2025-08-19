import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'] 
})
export class AccordionComponent implements OnInit {
  @Input() data: any;
  
  constructor(public service:MainService) { }
  selectedAccordion = 1
  ngOnInit(): void {
  }
  accordion(n:any){
    this.selectedAccordion = n
    this.service.animate('tab1');
    this.service.setAudio(this.data[n].audio)
  }
 
}
