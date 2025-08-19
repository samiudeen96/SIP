import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.scss']
})
export class M2Component implements OnInit {
  
  constructor(public service:MainService) { }

  ngOnInit(): void {
  }


  selectedContent = -1
  tab(n: number){
    this.selectedContent = n
   }
   close(){
     this.selectedContent = -1
   }

  pillDetails = [

    ///////////////////////////////////Average Revenue Uplift: 0.5 - 5%////////////////////////////////////////////////
    {
      id: 1,
      name: "1. PLAN",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>Timely BU strategy, GTM, coverage, and role design decisions</li>
                          <li>Roles defined consistently with clear accountability and behavior</li>
                          <li>Map all jobs according to Cargill Position Mapping Workbook</li>
                          </ul>
                </div>`
    },
    {
      id: 2,
      name: "2. DESIGN",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>All plans align with sales incentive best practices, GTM, and BU Strategy</li>
                          <li>Designs provide line of sight between measures and behaviors</li>
                          <li>All plan designs have feasible measures</li>
                          <li>Cross functional input is incorporated into plan design</li>
                          <li>Limit mid-year plan changes as best as possible</li>
                          </ul>
                </div>`
    },
    {
      id: 3,
      name: "3. IMPLEMENT",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>All Plans, Quotas and Territories ready at the end of the prior plan period for Day 1 roll-out</li>
                          <li>Strong automation to assist with system setup</li>
                          <li>Simple plan documentation</li>
                          <li>Cascading communication</li>
                          <li>Sales management owns communicating how the plan supports strategy; others can communicate the details</li>
                          </ul>
                </div>`
    },

    {
      id: 4,
      name: "4. ADMINISTER",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>Automated systems eliminate manual feeds</li>
                          <li>Operational systems aligned with and able to report on plan metrics</li>
                          <li>Pay or quota adjustments approved by same mechanism as initial plans</li>
                          </ul>
                </div>`
    },
    {
      id: 5,
      name: "5. ASSESS",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>Ongoing and annual plan assessment includes sales force feedback, pay-for-performance and plan effectiveness analysis</li>
                          <li>Plan assessment includes comparison to appropriate market data (pay and practices)</li>
                          <li>Ongoing sales performance and operations reporting is performed</li>
                          </ul>
                </div>`
    },
    
    {
      id: 6,
      name: "6. MANAGE",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li>Sales compensation program management is governed by single body</li>
                          <li>Off-cycle design (short-term bonus, comp initiatives) subscribe to component guidelines, sound governance and approval</li>
                          <li>Plan adjustments approved by same mechanism as initial plans</li>
                          </ul>
                </div>`
    },
]



  tabDetails = [

    ///////////////////////////////////Average Revenue Uplift: 0.5 - 5%////////////////////////////////////////////////
    {
      id: 1,
      name: "1. PLAN",
      content: `<div class="p-5">
                  <h3>SIP Process Overview - Plan</h3>
                  <h5>The planning step is crucial to setting the groundwork for effective SIP.</h5>
                  <ul>
                      <li>Develop a detailed workplan for SIP Design</li>
                      <ul><dd>
                      <li>Use a Gantt Chart format</li>
                      <li>Provide an overview of dates and expected milestones</li>
                      </dd></ul>
                      <li>Align on the team strategy and what behaviors the SIP should reinforce</li>
                      <li>Select the roles that will be part of the SIP design process</li>
                      <ul>
                      <dd>
                      <li>Roles should be within the sales or sales support organization</li>
                      </dd>
                      </ul>
                      <li>Map the selected positions to the Platform Jobs</li>
                      <ul>
                      <dd>
                      <li> Platform Jobs Framework will be provided</li>
                      </dd>
                      </ul>
                      <li>Collect and analyze the necessary data</li>
                  </ul>
                </div>`
    },


    {
      id: 2,
      name: "2. DESIGN",
      content: `<div class="p-5">
                  <h3>SIP Process Overview - Design</h3>
                  <h5>The SIP Design process helps develop best-in-class plans that drive desired behaviors and align with team and business unit strategy.</h5>
                  <ul>
                      <li>Various stakeholders will be involved in the design process</li>
                      <ul><dd>
                      <li>Roles will vary from executing the actual design, having approval rights and providing feedback and input</li>
                      </dd></ul>
                      <li>Once all roles are mapped to a platform job, design sales compensation on a platform role basis</li>
                      <li>Review best practices for each platform role</li>
                      <ul>
                      <dd>
                      <li>What are examples of compensation plans for each role?</li>
                      </dd>
                      </ul>
                      <li>Design will need to ensure that all measures are quantifiable and trackable</li>
                      
                      <li>Compensation costing will need to be run to ensure that plans are in line with budget</li>
                  </ul>
                </div>`
    },

    {
      id: 3,
      name: "3. IMPLEMENT",
      content: `<div class="p-5">
                  <h3>SIP Process Overview - Implement</h3>
                  <h5>The SIP Design implementation step ensures that the newly designed plans are effectively rolled-out and communicated.</h5>
                  <ul>
                      <li>Communicating the newly design sales compensation plans will require a multi-step communication process, that involves a cascading approach (sales leadership to sales management to first line management)</li>
                      <li>Collateral that clearly explains how the new plans work, the rationale for changes and how to maximize earnings needs to be distributed to the incumbents impacted</li>
                      <ul><dd>
                      <li>Collateral examples include: plan documents, plan calculators that enable incumbents to estimate their earnings, payout examples</li>
                      </dd></ul>
                      <li>Plan participants should receive training and have a chance to ask questions regarding the new plans</li>
                      <li>Before plans are rolled-out, quotas and sales territories need to be established and communicated</li>
                     
                  </ul>
                </div>`
    },


    {
      id: 4,
      name: "4. ADMINISTER",
      content: `<div class="p-5">
                  <h3>SIP Process Overview- Administration</h3>
                  <h5>SIP administration is an on-going process that ensures that plans are running as intended.</h5>
                  <ul>
                      <li>Sales compensation plans are typically administrated with the aid of tools that help automate the process</li>
                      <ul><dd>
                      <li>Ideally,  automated systems help eliminate manual work and human error</li>
                      </dd></ul>
                      <li>Plans should be setup in the system</li>
                      <li>A process for disputing quota or payout should be established, communicated and enforced</li>
                      <ul><dd>
                      <li>One-off pay adjustments should be eliminated</li>
                      </dd></ul>
                      <li>Plan participants should receive a statement explaining their payout concurrently with receiving the payout</li>
                     
                  </ul>
                </div>`
    },

    {
      id: 5,
      name: "5. ASSESS",
      content: `<div class="p-5">
                  <h3>SIP Process Overview- Assessment</h3>
                  <h5>SIP should be monitored on an ongoing basis to ensure that it is working effectively, and a formal assessment should be conducting annually.</h5>
                  <ul>
                      <li>Plan performance should be collected and assessed on an ongoing basis</li>
                      <li>Plan participant feedback should be collected through a survey or informal discussion</li>
                      <ul><dd>
                      <li>Feedback should be analyzed and shared across the team</li>
                      </dd></ul>
                     
                      <li>Plan effectiveness analyses should be conducted</li>
                      <ul><dd>
                      <li>Analyses examples include pay-for-performance analysis and quota performance distributions</li>
                      </dd></ul> 
                  </ul>
                </div>`
    },


    {
      id: 5,
      name: "6. MANAGE",
      content: `<div class="p-5">
                  <h3>SIP Process Overview- Manage</h3>
                  <h5>SIP governance should be established and enforced on an ongoing basis.</h5>
                  <ul>
                      <li>A sales compensation governance committee should be selected</li>
                      <li>Any plan adjustments or plan changes should be approved by the governance committee</li>
                     
                      <li>Communication about plan migration strategy should be clear frequent</li>
                     
                     
                      <li>Plan participation norms should be understood by both sellers and sales leaders</li>
                      
                      <li>Crediting and payment processing rules, as well as quota or pay adjustments and issue and dispute management processes should be transparent</li>
                     
                  </ul>
                </div>`
    },

  ]
}

