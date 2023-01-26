import React, { useEffect, useRef } from 'react';
import './Footer.css';
import SplitType from 'split-type'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const footer = useRef(null);
  const fiveFour = useRef(null);
 
  useEffect(() => {
    const elfooter = footer.current;
    const elMadein = elfooter.children[0];
    const elClan = elfooter.children[2];
    const elfiveFour = fiveFour.current

    const split = new SplitType('#lasgidi', {
      types: 'char',
    })
    
    ScrollTrigger.create({
      trigger: '.footer',
      start: 'top 20%',
      toggleClass: 'active'
    })

    ScrollTrigger.create({
      trigger: '.lag',
      start: 'top 45%',
      toggleClass: 'active'
    })

    ScrollTrigger.create({
      trigger: '.mc',
      start: 'top 45%',
      toggleClass: 'active'
    })

    ScrollTrigger.create({
      trigger: '.fiveFour',
      start: 'top 60%',
      toggleClass: 'active'
    })

    ScrollTrigger.create({
      trigger: '.mc1',
      start: 'top 80%',
      toggleClass: 'active'
    })


    gsap.to('.char', {duration: 1, y: 0, opacity: 1, stagger: 0.3, delay:0.2, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: '.char',
    } }, '0.2')
    
    gsap.fromTo(elMadein, {opacity: 0, x: '40vw'}, {duration: 1, x: 0, opacity: 1, delay: 2.5, ease: 'power2.easeIn', 
    scrollTrigger: {
      trigger: elMadein,
    } }, '0.7')

    gsap.fromTo(elClan, {opacity: 0, x: '-40vw'}, {duration: 1, x: 0, opacity: 1, delay: 2, ease: 'power2.easeIn', 
        scrollTrigger: {
          trigger: elClan,
        } }, '0.7')

    gsap.fromTo(elfiveFour, {opacity: 0, y: '10vw'}, {duration: 1, y: 0, opacity: 1, delay: 2, ease: 'power2.easeIn', 
        scrollTrigger: {
          trigger: elfiveFour,
        } }, '0.9')
   
  }, [])
  


  return (
    <div className='footer h-[100vh] w-[100vw] bg-red-900 flex justify-center items-center text-center leading-none'>
        <div className='footer1' ref={footer}>
            <h1 className='mc madeIn text-black text-[1.7vw]'>MADE IN</h1>

            <div className='flex'>
                <div className='lag text-black text-[25vw]' id='lasgidi'>LAGOS</div>
                <div className='fiveFour text-[1vw] text-black mt-[4vw]' ref={fiveFour}>
                  <div>5</div>
                  <div>4</div>
                  <div>3</div>
                </div>
            </div>
            
            <h1 className='mc1 chief text-black text-[2.7vw] mt-[3vw]'>THE CLAN CHIEF</h1>
        </div>
    </div>
  )
}

export default Footer