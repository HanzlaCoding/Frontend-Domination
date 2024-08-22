gsap.from('#page1 #circle',{
    scale: 0,
    duration: 4,
    rotate: 720,
});

gsap.from('#page2 #circle',{
    scale:0,
    duration:3,
    rotate:720,
    scrollTrigger:{
        trigger:'#page2 #circle',
        scroller:'body',
        markers: true,
        start: 'top 60%',
        end: 'bottom 30%',
        scrub:5
    }
})