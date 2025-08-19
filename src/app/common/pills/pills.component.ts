import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {
  @Input() data: any;
  @Input() Pillintro: any;
  @Input() Pillimg: any;
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }
  selectedPill = -1

  pill(n: any) {
    this.selectedPill = n;
  }
}
