import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() data: any;
  @Input() tabintro: any;
  @Input() tabimg: any;
  constructor(public service: MainService) { }

  selectedTab = -1
  ngOnInit(): void {

  }
  tab(n: any) {
    this.selectedTab = n;
  }


}
