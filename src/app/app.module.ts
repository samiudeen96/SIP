import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { M1Component } from './pages/m1/m1.component';
import { BreadcrumbsComponent } from './common/breadcrumbs/breadcrumbs.component';
import { TabComponent } from './common/tab/tab.component';
import { SafeHtmlPipe } from './services/safe.pipe';
import { M2Component } from './pages/m2/m2.component';
import { M3Page1Component } from './pages/m3/m3-page1/m3-page1.component';
import { M3Component } from './pages/m3/m3.component';
import { AlignmentComponent } from './common/alignment/alignment.component';
import { CycleComponent } from './common/cycle/cycle.component';
import { M3Page2Component } from './pages/m3/m3-page2/m3-page2.component';
import { M3Page3Component } from './pages/m3/m3-page3/m3-page3.component';
import { TableComponent } from './common/table/table.component';
import { M3Page4Component } from './pages/m3/m3-page4/m3-page4.component';
import { M4Component } from './pages/m4/m4.component';
import { M4Page1Component } from './pages/m4/m4-page1/m4-page1.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { M4Page2Component } from './pages/m4/m4-page2/m4-page2.component';
import { AccordionComponent } from './common/accordion/accordion.component';
import { M4Page3Component } from './pages/m4/m4-page3/m4-page3.component';
import { M5Component } from './pages/m5/m5.component';
import { M6Component } from './pages/m6/m6.component';
import { M6Page1Component } from './pages/m6/m6-page1/m6-page1.component';
import { M6Page2Component } from './pages/m6/m6-page2/m6-page2.component';
import { M6Page3Component } from './pages/m6/m6-page3/m6-page3.component';
import { M6Page4Component } from './pages/m6/m6-page4/m6-page4.component';
import { PillsComponent } from './common/pills/pills.component';
import { M7Component } from './pages/m7/m7.component';
import { M8Component } from './pages/m8/m8.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    M1Component,
    BreadcrumbsComponent,
    TabComponent,
    SafeHtmlPipe,
    M2Component,
    M3Page1Component,
    M3Component,
    AlignmentComponent,
    CycleComponent,
    M3Page2Component,
    M3Page3Component,
    TableComponent,
    M3Page4Component,
    M4Component,
    M4Page1Component,
    PaginationComponent,
    M4Page2Component,
    AccordionComponent,
    M4Page3Component,
    M5Component,
    M6Component,
    M6Page1Component,
    M6Page2Component,
    M6Page3Component,
    M6Page4Component,
    PillsComponent,
    M7Component,
    M8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
