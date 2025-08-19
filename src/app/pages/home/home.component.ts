import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(public service: MainService, public router:Router) { }
  ngAfterViewInit(): void {
    this.service.animateOnScroll();
  }


  // ngOnInit(): void {
  // }
  // gotoHash(id: string = "") {
  //   (document.getElementById(id) as HTMLDivElement)
  //     .scrollIntoView();
  // }

goToPage(path:string):void{
  this.router.navigate([`${path}`])
}
  
}
