import React from 'react'
import "./Section3.css"
import img6 from "./img/img6.jpg";
import img17 from "./img/img17.jpg";
import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Section3 = () => {

  const num052 = useRef(null);
  const num0522 = useRef(null);
  const num054 = useRef(null);
  const blackPic = useRef(null);
  const dontStop = useRef(null);
  const grayPic = useRef(null);
  const nextArrow = useRef(null);
  const badmanReveal = useRef(null);
  const badgirlsReveal = useRef(null);
  

  useEffect(() => {
    const elnum052 = num052.current;
    const elnum0522 = num0522.current;
    const elnum054 = num054.current;
    const el33 = blackPic.current;
    const el44 =dontStop.current;
    const el55 = grayPic.current;
    const el66 = nextArrow.current;
    const elbadmanReveal = badmanReveal.current;
    const elbadgirlsReveal = badgirlsReveal.current;

    // Badman Img Reveal
    gsap.fromTo(elnum052, {y: '15vw', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power4.easeIn', 
    scrollTrigger: {
      trigger: elnum052,
    }})

    gsap.fromTo(elnum0522, {y: '12vw', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power4.easeIn', 
    scrollTrigger: {
      trigger: elnum0522,
    }})

    gsap.to(elbadmanReveal, {width: '0%', duration: 0.7, ease: 'power2.easeInOut', 
    scrollTrigger: {
      trigger: elbadmanReveal,
      start: "10px 50%",
    }}, .2)

    gsap.from(el33.firstElementChild, {scale: 2.5, delay: -1.6, ease: 'power2.easeInOut'})


     // Badgirls Img Reveal
     gsap.fromTo(elnum054, {y: '12vw', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power4.easeIn', 
     scrollTrigger: {
       trigger: elnum054,
     }})

     gsap.to(elbadgirlsReveal, {width: '0%', duration: 0.7, ease: 'power2.easeInOut', 
     scrollTrigger: {
       trigger: elbadgirlsReveal,
       start: "10px 50%",
     }}, .2)
 
     gsap.from(el55.firstElementChild, {scale: 2.5, delay: -1.6, ease: 'power2.easeInOut'})


    let tl = gsap.timeline()

    tl.fromTo(el33.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
      trigger: el33,
      scrub: true,
    }}, .2)

    .fromTo(el44,  {opacity: 0, x: '25vw'}, {opacity: 1, x: 0, duration: 0.5,  transition: 1, ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: el44,
      }}, .2)

    .fromTo(el55.firstElementChild, {scale: 1.8}, {scale: 1, transition: 2, duration: 2, scrollTrigger: {
      trigger: el55,
      scrub: true,
    }}, .2)

    .fromTo(el66, {opacity: 0, y: '30vw'}, {opacity: 1, duration: 0.4, y: 0, transition: 1, ease: "Power3.easeOut",  scrollTrigger: {
      trigger: el66,
      start: "10px 80%",
    }}, .2)


  }, [])

  
  
  return (
    <div className='px-10 pt-28 lg:px-[4.5vw] pb-40 lg:pb-[20vw] md:pt-[12vw]'>
        <div className='text-stone-800 text-[2.5vw] mb-[5vw] lg:[display:none]' ref={num052}>
            <div>0</div>
            <div>5</div>
            <div>2</div>
          </div>
      <div className='flex justify-end '>
      <div className='w-[100%] lg:w-[70%] h-[31vh] sm:h-[65vh] md:h-[45vw] lg:h-[35vh] xl:h-[65vh] relative'>
      <div className='flex justify-end'>
        <div className='picture1 flex justify-center lg:justify-end absolute overflow-hidden h-[100%] w-[100%] lg:h-[85%] lg:w-[76%] sepia brightness-50 hover:filter-none transition-all' id='badPic'  ref={blackPic}>
          <img className='pic w-[100%] h-[100%] object-cover' src= {img6} alt= "building"></img>
        </div>
        <div className='reveal h-[100%] w-[100%] lg:h-[85%] lg:w-[76%] absolute bg-black z-30' ref={badmanReveal}></div>
      </div>
        <div className='text-stone-800 text-[2.5vw] lg:text-[1.5vw] [display:none] lg:[display:block]' ref={num0522}>
          <div>0</div>
          <div>5</div>
          <div>2</div>
        </div>
      </div>
      </div>

        <div className='appFont italic flex items-center justify-center py-20 xl:py-[6vw]'>
            <div className='text-2xl md:text-[4vw] lg:text-[2.7vw] md:leading-none text-stone-400 flex flex-col justify-center' ref={dontStop}>
                <span>Don't Stop!</span>
                <span>We're not done</span>
                <span>Keep it moving.</span>
            </div>
        </div>

        <div className='text-stone-800 text-[2.5vw] lg:text-[1.5vw]' ref={num054}>
            <div>0</div>
            <div>5</div>
            <div>4</div>
          </div>
      <div className='w-[100%] h-[31vh] sm:h-[65vh] md:h-[45vw] lg:h-[35vh] xl:h-[65vh] relative'>
      <div>
          <div className='picture2 flex justify-center lg:justify-start overflow-hidden h-[100%] w-[100%] lg:h-[85%] lg:w-[55%] top-[5.6vw] sepia brightness-100 hover:filter-none transition-all absolute' ref={grayPic}>
              <img className='pic h-[100%] w-[100%] object-cover' src= {img17} alt= "building"></img>
          </div>
          <div className='reveal h-[100%] w-[100%] lg:h-[85%] lg:w-[55%] absolute bg-black z-30 top-[5.6vw]' ref={badgirlsReveal}></div>

          <div className='[display:none] lg:[display:block] bottom-[5vw] right-[13vw] absolute'>
            <div className='flex border-stone-400 animate-pulse' ref={nextArrow}>
                                  <div className='arrows rightArrows border-stone-400'></div>
                                  <div className='arrows rightArrows'></div>
                                  <div className='arrows rightArrows'></div>
                                  <div className='arrows rightArrows'></div>
                                  <div className='arrows rightArrows'></div>
                                  <div className='arrows rightArrows border-stone-400'></div>
                              </div>
          </div>
      </div>
      </div>

      <div className='flex text-[4.5vw] text-stone-200 lg:[display:none] mt-[8vw]'>
        <div>Continue...</div>
      </div>
    </div>
  )
}

export default Section3