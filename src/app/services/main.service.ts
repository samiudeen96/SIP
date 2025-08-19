import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { gsap, Power0, Power3 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  theme = "dark";

  audio: string = "";
  tl = gsap.timeline();
  mediaElem: any;
  audioPlayerDisable = false;

  audioPlayer: any;
  currentPage: any;
  nextPage = 0;
  previousPage = -1;
  currentModule = 0;
  currentPageIndex = -1;
 // closemenubutton = false

  constructor(public router: Router, route: ActivatedRoute) {
    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ScrollToPlugin);


    router.events.forEach((event) => {

      if (event instanceof NavigationEnd) {
        // console.log(event);
        this.nextTopic = undefined;
        this.prevTopic = undefined;
        this.currentModule = Number(router.url.substr(2, 1)) - 1;
        if (this.currentModule != -1) {

          this.currentPageIndex = this.menuDetails[this.currentModule].pages.findIndex((f: any) => f.path == router.url);
          if (this.currentPageIndex != -1) {
            this.currentPage = this.menuDetails[this.currentModule].pages[this.currentPageIndex];
          }
          console.log(this.currentModule, this.currentPage);
          // this.menuDetails[this.currentModule].filter((f: any) => f.path == router.url)[0].visited = true;
          document.getElementById("content")?.scrollIntoView();
          console.log(this.currentModule);



          this.nextPage = this.currentPageIndex + 1;
          this.previousPage = this.currentPageIndex - 1;

          this.nextTopic = this.menuDetails[this.currentModule].pages[this.nextPage]
          this.prevTopic = this.menuDetails[this.currentModule].pages[this.previousPage]


          if (this.nextTopic == undefined && this.currentModule != this.menuDetails.length - 1) {
            this.nextPage = 0;
            this.nextTopic = this.menuDetails[this.currentModule + 1].pages[this.nextPage]
          }
          console.log("Next: ", this.nextTopic);

          if (this.prevTopic == undefined && this.currentModule > 0) {
            this.previousPage = this.menuDetails[this.currentModule - 1].pages.length - 1;
            this.prevTopic = this.menuDetails[this.currentModule - 1].pages[this.previousPage]
          }


          console.log("Next: ", this.nextTopic);
        }

      }
    });
  }


  current_i: any;
  current_j: any;

  nextTopic: any;
  prevTopic: any;


  next() {
    this.router.navigateByUrl(this.nextTopic.path);
  }

  previous() {
    if (this.prevTopic == undefined) {
      this.router.navigateByUrl("/");
    } else {
      this.router.navigateByUrl(this.prevTopic.path);
    }

  }

  // next() {

  //    this.router.navigateByUrl(this.menuDetails[this.currentModule][this.nextPage].path);
  //    console.log(this.menuDetails[this.currentModule][this.nextPage].path)
  // }

  // previous() {
  //    this.router.navigateByUrl(this.menuDetails[this.currentModule][this.previousPage].path);

  // }
  getCompletedPercent(i: number) {
    // console.log(i)
    // if (i <= 2) {
    //   let visitedCount = this.menuDetails[i - 1].filter(f => f.visited == true).length;
    //   let totalCount = this.menuDetails[i - 1].length;

    //   return Math.floor(visitedCount / totalCount * 100);
    // } else {
    //   return 0;
    // }
  }

  getTotalPages(i: number) {
    // if (i <= 2) {
    //   return this.menuDetails[i - 1].length;
    // } else {
    //   return 24;
    // }
  }

  animateOnScroll() {
    const faders = document.querySelectorAll(".ht_aos");
    console.log("faders ", faders.length)
    // const sliders = document.querySelectorAll(".slide-in");
    faders.forEach(entry => {
      //  gsap.set(entry, { opacity: 0, y: 100 })
      gsap.set(entry.querySelectorAll(".ht_aos_anim"),
        { y: 100, opacity: 0 })
    });


    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      let i = 0;
      let divs = [];
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          i++;
          let animate = entry.target.getAttribute('data-anim');

          if (animate) {
            entry.target.classList.add(animate);
          } else {
            // entry.target.classList.add("appear");
            // console.log(entry.target.querySelectorAll(".ht_aos_anim"));
            // divs.push(entry.target);

            gsap.to(entry.target.querySelectorAll(".ht_aos_anim"),
              { y: 0, opacity: 1, stagger: 0.35 })
          }
          appearOnScroll.unobserve(entry.target);
        }
      });
      // console.log(divs);
      // gsap.to(divs, { y: 0, opacity: 1, stagger: 1 })
    },
      appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

  }

  // sidenav-details

  currentMenu = 0;

  menuDetails =
    [
      {
        "volumeTitle": "Volume 1",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 1",
            title: "Sales Compensation Overview",
            path: "/m1"
          }
        ]
      },
      {
        "volumeTitle": "Volume 2",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 2",
            title: "SIP Program Management at a Glance",
            path: "/m2"
          }
        ]
      },
      {
        "volumeTitle": "Volume 3",
        "pages": [
          {
            id: 1, 
            volumeTitle: "Volume 3",
            title: "Planning for a SIP",
            path: "/m3"
          },
          {
            id: 2,
            volumeTitle: "Volume 3",
            title: "Chapter 1: Strategic Alignment",
            path: "/m3-1"
          },
          {
            id: 3,
            volumeTitle: "Volume 3",
            title: "Chapter 2: Team Selection Process",
            path: "/m3-2"
          },
          {
            id: 4,
            volumeTitle: "Volume 3",
            title: "Chapter 3: Data Needs and Current State Assessment",
            path: "/m3-3"
          },
          {
            id: 5,
            volumeTitle: "Volume 3",
            title: "Chapter 4: Platform Job Selection Process",
            path: "/m3-4"
          }
        ]
      },
      {
        "volumeTitle": "Volume 4",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 4",
            title: "Designing a SIP",
            path: "/m4"
          },
          {
            id: 2,
            volumeTitle: "Volume 4",
            title: "Chapter 1: Eligibility and Pay Parameters",
            path: "/m4-1"
          },
          {
            id: 3,
            volumeTitle: "Volume 4",
            title: "Chapter 2: Measures, Funding Mechanics and Pay Curves",
            path: "/m4-2"
          },
          {
            id: 4,
            volumeTitle: "Volume 4",
            title: "Chapter 3: Pay Periods, Setting Targets, Crediting & SPIFFS",
            path: "/m4-3"
          }
        ]
      },
      {
        "volumeTitle": "Volume 5",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 5",
            title: "SIP Cost Modeling",
            path: "/m5"
          }
        ]
      },
      {
        "volumeTitle": "Volume 6",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 6",
            title: "Implementing and Administrating a SIP",
            path: "/m6"
          },
          {
            id: 2,
            volumeTitle: "Volume 6",
            title: "Chapter 1: Setting Targets",
            path: "/m6-1"
          },
          {
            id: 3,
            volumeTitle: "Volume 6",
            title: "Chapter 2: Plan Administration",
            path: "/m6-2"
          },
          {
            id: 4,
            volumeTitle: "Volume 6",
            title: "Chapter 3: Change and Communications",
            path: "/m6-3"
          },
          {
            id: 5,
            volumeTitle: "Volume 6",
            title: "Chapter 4: Governance and Program Management",
            path: "/m6-4"
          }
        ]
      },
      {
        "volumeTitle": "Volume 7",
        "pages": [
          {
            id: 1,
            volumeTitle: "Volume 7",
            title: "Assessing a SIP",
            path: "/m7"
          },
        ]
      },
      {
        "volumeTitle": "",
        "pages": [
          {
            id: 1,
            volumeTitle: "",
            title: "Case Study",
            path: "/m8"
          },
        ]
      },
    ]


  ////////////////////////////////////// Navbar-details///////////////////////////////////////////////

  setMediaElem(elem: any) {
    this.audioPlayerDisable = false;
    this.mediaElem = elem.nativeElement;
    this.audioPlayer.setPlayer();
  }
  getMediaElem() {
    return this.mediaElem;
  }

  animate(name = '', aduioSync = true) {
    //console.log(this.tl)
    this.tl.clear();
    gsap.ticker.lagSmoothing(0);
    this.tl = gsap.timeline();
    //console.log(2, this.tl)
    //  gsap.to(myDiv, { duration: 2, scrollTo: 250 });
    let elems;
    if (name == '') {
      elems = document.querySelectorAll('[data-animatetime]');
    } else {
      elems = document.querySelectorAll('[data-animatename=' + name + ']');
    }
    // console.log(elems);
    elems.forEach((element: any) => {
      if (element['dataset'].animatetype == 'scroll') {
        // scroll animation
        console.log('scroll', element.id);
        this.tl.to(
          window,
          { scrollTo: '#' + element.id, duration: 0.4, ease: Power0.easeNone },
          element['dataset'].animatetime
        );
      } else {
        // slide animation
        if (element['dataset'].animatefrom == 'right') {
          this.tl.fromTo(
            element,
            { opacity: 0, x: 100 },
            { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime
          );
        } else if (element['dataset'].animatefrom == 'left') {
          this.tl.fromTo(
            element,
            { opacity: 0, x: -100 },
            { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime
          );
        } else if (element['dataset'].animatefrom == 'left-right') {
          this.tl.fromTo(
            element,
            { opacity: 1, x: 0 },
            { x: -200, duration: 1, opacity: 0 },
            element['dataset'].animatetime
          );
        } else if (element['dataset'].animatefrom == 'fade-in') {
          this.tl.fromTo(
            element,
            { opacity: 0, x: 0 },
            { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime
          );
        } else {
          this.tl.fromTo(
            element,
            { opacity: 0, y: 30 },
            { y: 0, duration: 0.5, opacity: 1 },
            element['dataset'].animatetime
          );
        }
      }
      //console.log(aduioSync);
      // if (aduioSync) {
      //   this.tl.pause();
      // } else {
      //   this.tl.play();
      // }

      // console.log(element, element['dataset'].animatetime);
    });
  }
  // audio
  getAudio() {
    return this.audio;
  }
  setAudio(a: string) {
    console.log('audio', a);
    if (a == '') {
      this.audioPlayerDisable = true;
    } else {
      this.audioPlayerDisable = false;
    }
    this.audio = '';
    setTimeout(() => {
      this.audio = 'assets/audio/' + a;
    }, 100);
  }

  setTimeline(t: number) {
    this.tl.progress(t);
  }

  getTimeline() {
    return this.tl;
  }




}


