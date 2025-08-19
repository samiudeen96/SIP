import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m6-page4',
  templateUrl: './m6-page4.component.html',
  styleUrls: ['./m6-page4.component.scss']
})
export class M6Page4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pillDetails = [

    ///////////////////////////////////Average Revenue Uplift: 0.5 - 5%////////////////////////////////////////////////
    {
      id: 1,
      name: "Target Total Cash",
      content: `<div class="p-5">
      
                          <ul class="no-ul">
                          <li>Review incumbent level information against pay levels/bands</li>
                          <li>Review delta between current and target pay level</li>
                          <li> Create a transition plan for incumbents over time to align to pay levels</li>
                          </ul>
                </div>`
    },
    {
      id: 2,
      name: "Pay Mix",
      content: `<div class="p-5">
    
                          <ul class="no-ul">
                          <li>Review incumbent level information against target pay mix</li>
                          <li>Review delta between current and target pay mix</li>
                          <li>Create a transition plan for incumbents over time to align to pay mix (can be a mix of increase in base or incentive) </li>
                          </ul>
                </div>`
    },
    {
      id: 3,
      name: "Measures & Weights",
      content: `<div class="p-5">
     

                          <ul class="no-ul">
                          <li> Align sellers to plan designs for next fiscal year</li>
                         
                          </ul>
                </div>`
    },

    {
      id: 4,
      name: "Mechanics",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li> Align sellers to plan designs for next fiscal year</li>
                          </ul>
                </div>`
    },
    {
      id: 5,
      name: "Performance & Payout Periods",
      content: `<div class="p-5">
                  
                          <ul class="no-ul">
                          <li> Align sellers to plan designs for next fiscal year
                          </li>
                          </ul>
                </div>`
    }
]


// pillDetails2 = [

//   {
//     id: 1,
//     name: "Pay Mix Change",
//     content: `<div class="p-5">
    
                        
//                         Moving to new pay mix; Less than +/- 5% Change
//                         (e.g., 84/26 to 80/20
                       
//               </div>`
//   },
//   {
//     id: 2,
//     name: "Low TTC (Below Min)",
//     content: `<div class="p-5">
  
//                         <ul>
//                         <li>Review incumbent level information against target pay mix</li>
//                         <li>Review delta between current and target pay mix</li>
//                         <li>Create a transition plan for incumbents over time to align to pay mix (can be a mix of increase in base or incentive) </li>
//                         </ul>
//               </div>`
//   },
//   {
//     id: 3,
//     name: "TTC at Target",
//     content: `<div class="p-5">
   

//                         <ul>
//                         <li> Align sellers to plan designs for next fiscal year</li>
                       
//                         </ul>
//               </div>`
//   },

//   {
//     id: 4,
//     name: "High TTC (Higher than Max)",
//     content: `<div class="p-5">
                
//                         <ul>
//                         <li> Align sellers to plan designs for next fiscal year</li>
//                         </ul>
//               </div>`
//   },
//   {
//     id: 5,
//     name: "Issues and Considerations",
//     content: `<div class="p-5">
                
//                         <ul>
//                         <li> Align sellers to plan designs for next fiscal year
//                         </li>
//                         </ul>
//               </div>`
//   }
// ]

}
