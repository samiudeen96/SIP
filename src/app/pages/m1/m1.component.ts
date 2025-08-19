import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.scss']
})
export class M1Component implements OnInit {

  selectedContent = -1
  constructor(public service:MainService) { }

  ngOnInit(): void {
    this.service.animate('');
  }

  tab(n: number){
    this.selectedContent = n
   }
   close(){
     this.selectedContent = -1
   }

  tabDetails = [

    ///////////////////////////////////Average Revenue Uplift: 0.5 - 5%////////////////////////////////////////////////
    {
      id: 1,
      name: "Average Revenue Uplift: 0.5 - 5%",
      content: `<div class="container-fluid">
                    <div class="row ">
                      <div class="col-lg-12 pt-4 pb-4">
                      <div class="text2" >
                      <p><b>Considerations:</b></p>
                        
                    <ul>
                    
                        <li data-animatefrom='right' data-animatetime='48'>Well-designed compensation plans influence and motivate behaviors that drive productivity</li>
                        <li data-animatefrom='right' data-animatetime='53'>Provide clear alignment between job responsibilities, performance expectations and pay, ensuring that sales reps are paid for driving company objectives.</li>
                        <li>Increase sales rep productivity with plan mechanics that create greater discrimination between low and high performers and provide more upside opportunities for top sales reps.</li>
                    </ul>
                  
                      </div>
                      </div>

                  
                    </div>
                </div>`
    },

///////////////////////////////////Average Cost Savings: 3 - 8%////////////////////////////////////////////////
    {
      id: 2,
      name: "Average Cost Savings: 3 - 8%",
      audio: "m1/page6-2.mp3",
      content: `

                <div class="container-fluid pt-4 pb-4">
                    <div class="row">
                        <div class="col-lg-12">
                        <div class="text2" >
                        <p><b>Considerations:</b></p>
                              <ul>

                                  <li>Eliminate sales compensation plan “leaks”</li>
                                 <dd>
                                 <ul>
                                 <li>Paying from $1 for recurring revenue</li>
                                 <li>Double Crediting, without double quota</li>
                                 <li>Trailing credits or payment for no future influence</li>
                                 <li>Quality sales - debit for bad debt or cancelled orders</li>
                                 <li>Discourage "boom/bust“ or monthly stuffing of sales that result in upside payments, but net zero annual revenue generation</li>
                                 <li>Formula mistakes - incorrect thresholds, mega orders</li>
                                 </ul>
                                 </dd>
                                  <li>Eliminate “companion program” mistakes - quota relief outside of comp policies, account changes, plan exceptions, etc.</li>
                                  <li>Eliminate/reduce administration mistakes - the more complicated the suite of plans are, the more likely to have admin errors</li>
                                  <li>Reduce internal resource time, accelerate decision making, and reduce unnecessary rework in the design process</li>
                              </ul>
                        </div>
                        </div>

                     
                    </div>
                </div>
              `
    },
  ]
}







