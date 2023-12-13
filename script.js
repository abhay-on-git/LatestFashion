var tl = gsap.timeline();
gsap.from("#card",{
    y:`30px`,
    ease:`ease`,
    duration:`0.5`,
    delay:`1`,
})
gsap.from("#card",{
    x:`-25px`,
    ease:`ease`,
    duration:`0.5`,
    delay:`1`,
})
gsap.to("#card",{
    y:`-400%`,
    ease:`ease`,
    duration:`1.2`,
    stagger:0.01,
    delay:`2`,
})
gsap.to("#title",{
    y:`-200%`,
    ease:`ease`,
    duration:`1`,
    delay:`2`,
})
gsap.to("#subtitle",{
    y:`-100%`,
    opacity:0,
    ease:`ease`,
    duration:`1`,
    delay:`2`,
})
gsap.from("#developed",{
    y:`-100%`,
    opacity:0,
    ease:`ease`,
    duration:`1`,
    delay:`2`,
})
gsap.from("#by",{
    y:`100%`,
    opacity:0,
    ease:`ease`,
    duration:`1`,
    delay:`2`,
})
gsap.from("#name",{
    opacity:0,
    ease:`ease`,
    duration:`1`,
    delay:`2.5`,
})
gsap.from("#emoji",{
    transform:'scale(0)',
    ease:`ease`,
    duration:`1`,
    delay:`2.5`,
})


