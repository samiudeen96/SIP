import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { M1Component } from './pages/m1/m1.component';
import { M2Component } from './pages/m2/m2.component';
import { M3Page1Component } from './pages/m3/m3-page1/m3-page1.component';
import { M3Page2Component } from './pages/m3/m3-page2/m3-page2.component';
import { M3Page3Component } from './pages/m3/m3-page3/m3-page3.component';
import { M3Page4Component } from './pages/m3/m3-page4/m3-page4.component';
import { M3Component } from './pages/m3/m3.component';
import { M4Page1Component } from './pages/m4/m4-page1/m4-page1.component';
import { M4Page2Component } from './pages/m4/m4-page2/m4-page2.component';
import { M4Page3Component } from './pages/m4/m4-page3/m4-page3.component';
import { M4Component } from './pages/m4/m4.component';
import { M5Component } from './pages/m5/m5.component';
import { M6Page1Component } from './pages/m6/m6-page1/m6-page1.component';
import { M6Page2Component } from './pages/m6/m6-page2/m6-page2.component';
import { M6Page3Component } from './pages/m6/m6-page3/m6-page3.component';
import { M6Page4Component } from './pages/m6/m6-page4/m6-page4.component';
import { M6Component } from './pages/m6/m6.component';
import { M7Component } from './pages/m7/m7.component';
import { M8Component } from './pages/m8/m8.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'm1', component: M1Component },
  { path: 'm2', component: M2Component },
  { path: 'm3', component: M3Component },
  { path: 'm3-1', component: M3Page1Component },
  { path: 'm3-2', component: M3Page2Component },
  { path: 'm3-3', component: M3Page3Component},
  { path: 'm3-4', component: M3Page4Component},
  { path: 'm4', component: M4Component},
  { path: 'm4-1', component: M4Page1Component},
  { path: 'm4-2', component: M4Page2Component},
  { path: 'm4-3', component: M4Page3Component},
  { path: 'm5', component: M5Component},
  { path: 'm6', component: M6Component},
  { path: 'm6-1', component: M6Page1Component},
  { path: 'm6-2', component: M6Page2Component},
  { path: 'm6-3', component: M6Page3Component},
  { path: 'm6-4', component: M6Page4Component},
  { path: 'm7', component: M7Component},
  { path: 'm8', component: M8Component},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',

    })],
    
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
