gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
// gsap.from(".line-1", {
//   scrollTrigger: {
//     trigger: ".section-2",
//     scroller: ".smooth-scroll",
//     scrub: true,
//     pin: true,
//     start: "top bottom",
//     end: "+=100%",
//     onUpdate: self => console.log(self.direction)
//   },
//   scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });


gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2"
  }
});


var t3 =  gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});

t3.from('.section-2 h2', 1, {x: 200, opacity: 0});
t3.from('.section-2 p', 1, {x: -200, opacity: 0});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);




// --- PURPLE/GREEN PANEL ---
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gray",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

t2.from(".gray p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
.to(".gray", {backgroundColor: "#28a92b"}, 0);


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var t3 = new TimelineMax({onUpdate:updatePercentage});
var controller = new ScrollMagic.Controller();

t3.from('.s-2-inner', 1, {y: -300, opacity: 0});
t3.from('.s-2-inner h2', 1, {x: 200, opacity: 0});
t3.from('.s-2-inner p', 1, {x: -200, opacity: 0});
t3.from('.s-2-inner a', 1, {x: 100, opacity: 0});
t3.from('.s-2 img', 1, {x: 50, opacity: 0});
t3.from('.s-2 .box', 1, {scale: 0, opacity: 0}, "-=2");


const scene = new ScrollMagic.Scene({
  triggerElement: ".s-2",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".s-2")
  .setTween(t3)
    .addTo(controller);

function updatePercentage() {
  t3.progress();
  console.log(t3.progress());
}