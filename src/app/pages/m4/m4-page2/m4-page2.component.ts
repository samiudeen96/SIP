import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-m4-page2',
  templateUrl: './m4-page2.component.html',
  styleUrls: ['./m4-page2.component.scss']
})
export class M4Page2Component implements OnInit {

  constructor(public service:MainService) { }

  ngOnInit(): void {
  }

  tabDetails = [

    ///////////////////////////////////Commission Plan:<br>Pay as a rate of sales outcome (e.g. 2% of net sales)////////////////////////////////////////////////
    {
      id: 1,
      name: "Commission Plan: Pay as a rate of sales outcome (e.g. 2% of net sales)",
      content: `<div class="container-fluid">
                    <div class="row ">
                      <div class="col-lg-12 pt-4 pb-4">
                      <div class="text2" >
                        
                    <ul>
                    
                    <li>Typically used for companies in their early stages of development</li>
                    <li>Used when territories/ opportunity is fairly equal or unknown</li>
                    <li>Difficult to recognize relative performance (i.e. 90% share in small customer versus 20% share in large customer)</li>
                    <li>Earnings have the potential to vary substantially</li>
                    <li>More appropriate with low rates of reoccurring revenue</li>
                    
                    </ul>
                  
                      </div>
                      </div>

                  
                    </div>
                </div>`
    },

///////////////////////////////////Goal Based Plan:////////////////////////////////////////////////
    {
      id: 2,
      name: "Goal Based Plan: Pay as a percent of achievement against target (e.g. 90% of target)",
      audio: "m1/page6-2.mp3",
      content: `

                <div class="container-fluid pt-4 pb-4">
                    <div class="row">
                        <div class="col-lg-12">
                        <div class="text2" >
                       
                              <ul>

                              <li>Typically used for mature sales organizations</li>
                              <li>Provides the ability to equalize earnings at goal if territory/ opportunities are unequal between sellers</li>
                              <li>Sellers focus more on achieving their goals</li>
                              <li>Emphasizes commitment to Target Incentive amount</li>
                              <li>Relies on ability to set accurate goals</li>
                              <li>More appropriate with higher rates of reoccurring revenue</li>
                              
                              </ul>
                        </div>
                        </div>

                     
                    </div>
                </div>
              `
    },
  ]


  
accordionDetails =[


  ////////////////////////////////Odor and taste ///////////////////////////////////////////////
        {
          id: 1,
          name: "Flat Commission (without target)",
          content: `<div class=container-fluid>
                        <div class="row">
                            <div class="col-lg-6">
                            <p class="f-italic">Incumbent is paid a flat percentage for sales  achieved</p>
                            <ul class="list-none f-italic">
                            <li><span class="txt-green">&#9650;</span> Simple & motivational</li>
                            <li><span class="txt-red">&#9660;</span> May encourage “land  lording” of accounts</li>
                            <li><span class="txt-red">&#9660;</span> Difficult to recognize relative performance or encourage solution selling</li>
                            
                            </ul>
                            </div>
  
                            <div class="col-lg-6 text-center">
                            <img src="assets/images/m4/acc1.png">
                            </div>
                        </div>
                    </div>
                    `
        },
        {
          id: 2,
          name: "Tiered Commission Rate (without target)",
          audio: "m1/page9-2.mp3",
          content: `
                  <div class="container">
                     <div class="row">
                         <div class="col-lg-6">
                            <p class="f-italic">Incumbent is paid a flat percentage for sales based on strategic sales tiers</p>
  
                            <ul class="list-none f-italic">
                            <li><span class="txt-green">&#9650;</span> Simple & motivational</li>
                            <li><span class="txt-green">&#9650;</span> Additional incentive for more strategic tiers</li>
                            <li><span class="txt-red">&#9660;</span> May encourage “land  lording” of accounts</li>
                            <li><span class="txt-red">&#9660;</span> Difficult to encourage solution selling</li>
                            </ul>
                         </div>
                         
                         <div class="col-lg-6 text-center">
                            <img src="assets/images/m4/acc2.png">
                            </div>
                     </div>
                  </div>`
          
        },
  
        {
          id: 3,
          name: "Ramped Commission (with target)",
          audio: "m1/page9-3.mp3",
          content: `
          <div class="container">
          <div class="row">
              <div class="col-lg-6">
              <p class="f-italic">Incumbent is paid a flat percentage for sales below goal and accelerated percentage for above-goal sales</p>
              <ul class="list-none f-italic">
                  <li><span class="txt-green">&#9650;</span> Simple & motivational</li>
                   <li><span class="txt-red">&#9660;</span> More difficult to move accounts due to target</li>
                   <li><span class="txt-red">&#9660;</span> Highest quotas automatically have highest earning opportunity</li>
                   </ul>
              </div>

              <div class="col-lg-6 text-center">
              <img src="assets/images/m4/acc3.png">
              </div>
          </div>
       </div>`
          
        },
  
  
  
        {
          id: 4,
          name: "Goal-Based Payout Curve",
          audio: "m1/page9-4.mp3",
          content: `
          
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                  <p class="f-italic">Earnings increase continuously / linearly as performance target attainment increases.</p>
                  <ul class="list-none f-italic">
                  <li><span class="txt-green">&#9650;</span> Equalizes diverse sales opportunities</li>
                  <li><span class="txt-red">&#9660;</span> Two-step calculation</li>
                  </ul>
              </div>

              <div class="col-lg-6 text-center">
              <img src="assets/images/m4/acc4.png">
              </div>
            </div>
          </div>`
          
        },
  
        {
          id: 5,
          name: "Goal-Based Step Bonus",
          audio: "m1/page9-5.mp3",
          content: `
  
          <div class=container-fluid>
          <div class="row">
              <div class="col-lg-6">
              <p class="f-italic">Earnings increase in a step as performance target attainment increases.</p>
              <ul class="list-none f-italic">
                  <li><span class="txt-green">&#9650;</span> Addresses quota-setting difficulty</li>
                  <li><span class="txt-red">&#9660;</span> No pay change between steps</li>
              </ul>

              </div>
  
              <div class="col-lg-6 text-center">
              <img src="assets/images/m4/acc5.png">
              </div>
          </div>
       </div>`
          
        },

        {
          id: 5,
          name: "Product Points",
          audio: "m1/page9-5.mp3",
          content: `
  
          <div class=container-fluid>
          <div class="row">
              <div class="col-lg-6">
              <p class="f-italic">Assign point value to each product sale; payout depends on total points attained.</p>
              <ul class="list-none f-italic">
              <li><span class="txt-green">&#9650;</span> Weights key products</li>
              <li><span class="txt-red">&#9660;</span> Difficult to administer</li>
              <li><span class="txt-red">&#9660;</span> Plan shopping</li>
          </ul>
              </div>
  
              <div class="col-lg-6 text-center">
              <img src="assets/images/m4/acc6.png">
              </div>
          </div>
       </div>`
          
        }
    ]

}

