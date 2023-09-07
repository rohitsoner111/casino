gsap.registerPlugin(ScrollTrigger);

function setScrollText() {
  gsap.to("#heading1", {
    scrollTrigger: {
      trigger: "#heading1",
      toggleActions: "play reverse play reverse",
      start: "0s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#heading2", {
    scrollTrigger: {
      trigger: "#heading2",
      toggleActions: "play reverse play reverse",
      start: "+=1000s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#heading3", {
    scrollTrigger: {
      trigger: "#heading3",
      toggleActions: "play reverse play reverse",
      start: "+=2000s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#heading4", {
    scrollTrigger: {
      trigger: "#heading4",
      toggleActions: "play reverse play reverse",
      start: "+=3000s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#heading5", {
    scrollTrigger: {
      trigger: "#heading5",
      toggleActions: "play reverse play reverse",
      start: "+=4000s",
      end: "+=1000s",
    },
    opacity: 1,
  });
}

function setScrollImages() {
  gsap.to("#img1", {
    scrollTrigger: {
      trigger: "#img1",
      toggleActions: "play reverse play reverse",
      start: "0s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#img2", {
    scrollTrigger: {
      trigger: "#img2",
      toggleActions: "play reverse play reverse",
      start: "+=1000s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#img3", {
    scrollTrigger: {
      trigger: "#img3",
      toggleActions: "play reverse play reverse",
      start: "+=2000s",
      end: "+=1000s",
    },
    opacity: 1,
    duration: 2, 
    rotation: 360, 
    transformOrigin: "right top"
  });

  gsap.to("#img4", {
    scrollTrigger: {
      trigger: "#img4",
      toggleActions: "play reverse play reverse",
      start: "+=3000s",
      end: "+=1000s",
    },
    opacity: 1,
  });

  gsap.to("#img5", {
    scrollTrigger: {
      trigger: "#img5",
      toggleActions: "play reverse play reverse",
      start: "+=4000s",
      end: "+=1000s",
    },
    opacity: 1,
  });
}


gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "active",
    ease: "power2",
  },
});

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    //   scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

t3.from(".section-2 h2", 1, { x: 200, opacity: 0 });
t3.from(".section-2 p", 1, { x: -200, opacity: 0 });

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s-2",
    //   scroller: ".smooth-scroll",
    //   scrub: true,
    //   pin: true,
    start: "center center",
    end: "+=100%",
  },
  // scaleX: 0,
  // transformOrigin: "left center",
  // ease: "none"
});

t4.from(".s-2-inner", 1, { y: -300, opacity: 0 });
t4.from(".s-2-inner h2", 1, { x: 200, opacity: 0 });
t4.from(".s-2-inner p", 1, { x: -200, opacity: 0 });
t4.from(".s-2-inner a", 1, { x: 100, opacity: 0 });
t4.from(".s-2 img", 1, { x: 50, opacity: 0 });
t4.from(".s-2 .box", 1, { scale: 0, opacity: 0 }, "-=2");

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    //   scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".battle-section",
    // scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
});

tl.from(".battle-section .thumb__content", {
  scale: 0.3,
  rotation: 45,
  autoAlpha: 0,
  ease: "power2",
})
  .from(
    ".battle-section .line-rotate",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".battle-section", { backgroundColor: "rgb(10 52 34)" }, 0);

// --- PURPLE/GREEN PANEL ---
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gray",
    //   scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
});

t2.from(".grid-item", {
  scale: 0.3,
  rotation: 45,
  autoAlpha: 0,
  ease: "power2",
}).to(".gray", { backgroundColor: "#28a92b" }, 0);

//   gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

// create a sequence that moves 3 of the panels in from different directions
const t6 = gsap.timeline();
t6.from(".orange1", { xPercent: -100 })
  .from(".purple2", { xPercent: 100 })
  .from(".green3", { yPercent: -100 });

// pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
ScrollTrigger.create({
  animation: t6,
  trigger: "#container",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

gsap.to(".yoyo p", {
  scrollTrigger: ".yoyo",
  duration: 2,
  rotation: 360,
});

gsap.to(".red-2", {
  scrollTrigger: {
    trigger: ".red",
    toggleActions: "restart pause reverse pause",
  },
  duration: 1,
  backgroundColor: "#FFA500",
  ease: "none",
});

gsap.to(".yoyo .thumb-img-1", {
  scrollTrigger: ".yoyo",
  scale: 0.5,
  repeat: -1,
  yoyo: true,
  ease: "power2",
});

TweenMax.from(".header div",1 ,{
  opacity: 0,
  x: -500,
  delay: 0.2,
  ease: Expo.easeInOut,
})

// TweenMax.from(".header div",1 ,{
//   opacity: 0,
//   y: 800,
//   delay: 0.5,
//   ease: Expo.easeInOut,
// })


// TweenMax.from(".banner-content p:nth-child(1)",1 ,{
//   opacity: 0,
//   y: 500,
//   delay: 0.5,
//   ease: Expo.easeInOut,
// })


TweenMax.from(".banner-content svg",1.5 ,{
  opacity: 0,
  y: 600,
  delay: 0.7,
  ease: Expo.easeInOut,
})

TweenMax.from(".banner-content h6",1.8 ,{
  opacity: 0,
  y: 700,
  delay: 0.9,
  ease: Expo.easeInOut,
})

TweenMax.from(".banner-content p",2 ,{
  opacity: 0,
  y: 500,
  delay: 1.1,
  ease: Expo.easeInOut,
})

TweenMax.from(".banner-content button",5 ,{
  opacity: 0,
  y: 900,
  delay: 1.3,
  ease: Expo.easeInOut,
})


gsap.to(".head", {
  scrollTrigger: {
    pin: ".head",
    end: "+=5000s",
    pinSpacing: true,
  },
});

setScrollText();
setScrollImages();
