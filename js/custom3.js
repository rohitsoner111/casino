const bear = {
  values: [{ opacity: 0 }, { opacity: 1 }]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".animation .bear:first-child", 1, {
    bezier: bear,
    ease: Power4.easeInOut
  })
);

tween.add(
  TweenLite.to(".animation .bear:nth-child(2)", 1, {
    bezier: bear,
    ease: Power4.easeInOut
  })
);

tween.add(
  TweenLite.to(".animation .bear:nth-child(3)", 1, {
    bezier: bear,
    ease: Power4.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0
})
  .setTween(tween)
  .addIndicators()
  .setPin(".animation")
  .addTo(controller);

















  gsap.to(".orange p", {
    scrollTrigger: ".orange", 
    duration: 2, 
    rotation: 360
  });
  
  gsap.to(".red", {
    scrollTrigger: {
      trigger: ".red",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 1, 
    backgroundColor: "#FFA500", 
    ease: "none"
  });
  
  gsap.to(".yoyo p", {
    scrollTrigger: ".yoyo", 
    scale: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2"
  });
