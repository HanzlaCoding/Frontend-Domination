const allH1 = document.querySelectorAll('#page2 h1');

allH1.forEach(elem => {
    var clutter = '';
    const h1Text = elem.textContent;
    const splitedH1 = h1Text.split('');
    splitedH1.forEach(e => {
        clutter += `<span>${e}</span>`;  
    })
    elem.innerHTML = clutter;
});

gsap.to('#page2 h1 span',{
    color: '#e3e3c4',
    stagger:0.1,
    scrollTrigger:{
        trigger:'#page2 h1',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top -10%',
        scrub:3
    }
})