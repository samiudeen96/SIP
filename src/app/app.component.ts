import { AfterViewInit, Component } from '@angular/core';
import { MainService } from './services/main.service';
import { security } from 'ht-security';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(public service: MainService, public router : Router) { }

  title = 'SIP';

  ngAfterViewInit(): void {
    AOS.init();

    // security({
    //   mode: "development" 
    //   // mode: "deployment"     
    // });

    const script1 = document.createElement('script');
    script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';
    document.head.appendChild(script1); 
  }


}