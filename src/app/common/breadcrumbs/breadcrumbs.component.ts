import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(public service:MainService, public router : Router) { }

  ngOnInit(): void {
  }


  goToPage(path:string):void{
    this.router.navigate([`${path}`])
  }
}
 