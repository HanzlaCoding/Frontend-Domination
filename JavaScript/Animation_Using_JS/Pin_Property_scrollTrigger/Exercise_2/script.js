gsap.from('#page1 h1', {
    duration: 1.5,
    ease: "back.out(1.7)",
    y: -250
})
gsap.to('#page2 h2', {
    transform: "translateX(-650%)",
    scrollTrigger: {
        trigger: '#page2',
        scroller: 'body',
        scrub: 2,
        pin: true
    }
})

gsap.from('#page3 span',{
    duration: 2,
    opacity:0,
    color:'red'
})

gsap.from('#page3 h3',{
    y:-100,
    opacity:0,
    scrollTrigger:{
        scroller:'body',
        trigger:'#page3',
        start:'top 70%',
        markers:true,
    }
})