function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom",{
        height: "21vh"
    })

    tl.to(".navpart2 h5",{
        display: "block"
    })

    tl.to(".navpart2 h5 span",{
        y:0,
        stagger:{
            amount: 0.3
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()

    tl.to(".navpart2 h5 span",{
        y:25,
        stagger:{
            amount: 0.2
        }
    })

    tl.to(".navpart2 h5", {
        display: "none",
        duration: 0.1
    })

    tl.to("#nav-bottom",{
        height: 0,
        duration: 0.2
    })
})
}

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3],{
            opacity: 1,
            scale: 1,
        })
    })

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })

    elem.addEventListener("mousemove", function (dets){
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 45,
            y: dets.y - elem.getBoundingClientRect().y - 110        
        })
    } )

})
}

function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        opacity: 1,
        transform: "scaleX(1) scaleY(1)",
        borderRadius: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -0.3,

    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        opacity: 0,
        transform: "scaleX(0) scaleY(0)",
        borderRadius: "20px",
        ease: Expo.easeInOut,
        duration: 1,
        delay: -0.3
    })
})
}

navAnimation()
page2Animation()
page3VideoAnimation()