var tl = gsap.timeline();
// tl.from('.line h1', {
//     y: 150,
//     stagger: 0.1,
//     duration: 0.6,
//     delay: 0.2,
//     ease: "expo.out",
//     opacity: 0
// })

// tl.from('.line-part1, .line h2', {
//     opacity: 0,
//     onStart: () => {
//         const l1p1 = document.querySelector('.line1-part1 h5');
//         // Loop of loader
//         let levelUp = 0;
//         const intId = setInterval(() => {
//             if (levelUp < 100) {
//                 l1p1.innerHTML = levelUp++;
//             }
//             else {
//                 l1p1.innerHTML = levelUp;
//                 clearInterval(intId);
//             }
//             console.log(levelUp);

//         }, 30);
//     }
// })

// tl.to('#loader', {
//     opacity: 0,
//     duration: 0.1,
//     delay: 2.8
// });

tl.from('#page1', {
    y: 1600,
    delay: 0.1,
    ease: "power1.out",
    opacity: 0,
    duration: 0.8
})

tl.to('#loader', {
    display: 'none'
})

const hero3h1 = document.querySelector('#hero3 h1');

tl.from(`#hero1 h1, #hero3 h1,#hero2 h1,#hero4 h1`,{
    y: 150,
    stagger:0.1,
    duration:0.8
})

Shery.makeMagnet("#nav-part2 h5", {});

// const h5= document.querySelector('#page1 #nav-part2 h5');
// h5.addEventListener('mouseenter',()=>{
//     gsap.to('#crsr',{
//         scale:1.5,
//         ease:Power4,
//         duration:0.2
//     })
// })

// Cursor
document.addEventListener('mousemove', (dets) => {
    gsap.to('#crsr', {
        x: dets.x,
        y: dets.y,
        ease: "power2.out"
    });
});

