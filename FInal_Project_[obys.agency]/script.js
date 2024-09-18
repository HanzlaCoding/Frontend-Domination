function animationPageOne() {
    var tl = gsap.timeline();
    tl.from('.line h1', {
        y: 150,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.2,
        ease: "expo.out",
        opacity: 0
    })

    tl.from('.line-part1, .line h2', {
        opacity: 0,
        onStart: () => {
            const l1p1 = document.querySelector('.line1-part1 h5');
            // Loop of loader
            let levelUp = 0;
            const intId = setInterval(() => {
                if (levelUp < 100) {
                    l1p1.innerHTML = levelUp++;
                }
                else {
                    l1p1.innerHTML = levelUp;
                    clearInterval(intId);
                }
                console.log(levelUp);

            }, 30);
        }
    })

    tl.to('#loader', {
        opacity: 0,
        duration: 0.1,
        delay: 2.8
    });

    tl.from('#page1', {
        opacity: 0,
        delay: 0.1,
        ease: "expo.in",
        opacity: 0,
        duration: 0.8
    })

    tl.to('#loader', {
        display: 'none'
    })

    tl.from(`#hero1 h1, #hero2 h1,#inoxentH1 h1,#hero4 h1`, {
        y: 150,
        stagger: 0.1,
        duration: 0.8
    })
    tl.from('#hero1, #page2', {
        opacity: 0
    }, '-=2')
}
function crsr() {
    // Cursor
    document.addEventListener('mousemove', (dets) => {
        gsap.to('#mouse-cursor', {
            x: dets.x,
            y: dets.y,
            ease: "power2.out"
        });
    });
}
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function sheryJsAnimation() {
    Shery.imageEffect("#image-div", {
        style: 6,
        config: { "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 5.88, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.46, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272695760684946 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.41, "range": [0, 2] }, "discard_threshold": { "value": 0.78, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.29, "range": [0, 2] }, "noise_scale": { "value": 14.5, "range": [0, 100] } },
        gooey: true,
    });
}
animationPageOne()
crsr();
loco();
sheryJsAnimation();

document.querySelector('#inoxentH1').addEventListener('mousemove', (dets) => {
    gsap.to('#flag', {
        x: dets.x,
        y: dets.y,
        ease: "power4.out"
    })
});
document.querySelector('#inoxentH1').addEventListener('mouseenter', (dets) => {
    gsap.to('#flag', {
        opacity: 1
    })
});
document.querySelector('#inoxentH1').addEventListener('mouseleave', (dets) => {
    gsap.to('#flag', {
        opacity: 0
    })
});

Shery.makeMagnet("#nav-part2 h5", {});

document.querySelector('#email-box').addEventListener('mouseenter', () => {
    gsap.to(`#email-box h5`, {
        y: -30,
        duration: .4
    });
});

document.querySelector('#email-box').addEventListener('mouseleave', () => {
    gsap.to(`#email-box h5`, {
        y: 0
    });
});