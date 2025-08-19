import { Component, OnInit,} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  closemenubutton = false
  constructor(public service:MainService, public router : Router ) { }

  icon: any
  nav:any;
  ngOnInit(): void {
    // let offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    // let offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    //   return new bootstrap.Offcanvas(offcanvasEl)
    // })

    // let icon = document.getElementById("icon");

    // icon.onclick = function() {
    //   if (this.className === "Icon") {
    //     this.className = "Icon open"; 
    //   } else {
    //     this.className = "Icon";
    //   }
    // }

  }

  goToPage(path:string):void{
    this.router.navigate([`${path}`])
  }
closemenu(){
  this.closemenubutton =true
}
  
}
 