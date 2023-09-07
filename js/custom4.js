var tl = gsap. timeline () ;
split = new SplitText(".democlass", {type:"chars"}),

tl.from(split.chars, {opacity:0, y:50, duration:1, ease:"back", stagger:0.03})



//effect1
var $1_first = $("#1_first"),
    $1_second = $("#1_second"),
    $1_third = $("#1_third"),
    tl_1 = new TimelineMax({repeat:-1});
tl_1
  .to($1_first, 0.5, {alpha: 1, scale: 1.5, ease: Power1.easeIn},'+=1')
  .to($1_first, 0.5, {alpha: 0, scale: 2.5, ease: Power1.easeOut},'+=0.3')
  .to($1_second, 0.5, {alpha: 1, scale: 1.5, ease: Power1.easeIn})
  .to($1_second, 0.5, {alpha: 0, scale: 2.5, ease: Power1.easeOut},'+=0.3')
  .to($1_third, 0.5, {alpha: 1, scale: 1.5, ease: Power1.easeIn})
  .to($1_third, 0.5, {alpha: 0, scale: 2.5, ease: Power1.easeOut},'+=0.3');




//effect5
$('.text5').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_text3'>$&</span>"));
});
var $text5 = $(".text5 span"),
    tl_5 = new TimelineMax({repeat:-1});

tl_5
  .staggerFrom($text5, 0.5, {alpha: 0, x: 40, ease: Power1.easeOut}, 0.1,'+=1.2')
  .staggerTo($text5, 0.5, {alpha: 0, x: -40, ease: Power1.easeOut}, 0.1, '+=1.5');
