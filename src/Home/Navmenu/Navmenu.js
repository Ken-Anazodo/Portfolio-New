import React from 'react';
import './Navmenu.css';
import gsap from 'gsap';
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import ceee from "./Img/ceee.PNG";


export default function Navmenu() {
  const navSelect = useRef(null);
  

  useEffect(() => {
    const el = navSelect.current;
   
    gsap.fromTo(el, {opacity:0, y: 0}, {opacity:1, duration:1, y: 20, delay: 0.4, ease: "power4",
    scrollTrigger:{
      trigger: el,
      start: "10px 40%",
  }});

  }, [])
  
  
  return (
    <div>
    
        <div className='nav px-7 mb-[2.5vw] xl:mb-[3vw] 2xl:mb-[2vw] mx-auto flex flex-col-reverse sm:flex-row justify-around space-x-4 text-stone-300' ref = {navSelect}>
            <div className='flex items-center cursor-pointer'>
              <div className='text-zinc-500 sm:text-stone-300  text-[3.7vw] sm:text-[2.1vw]'><h1>The Clan Chief</h1></div>
              <img className='h-[2.2vw] w-[2.2vw] sm:w-[1.3vw] sm:h-[1.3vw] ml-[0.5vw] object-cover' src= {ceee} alt= "copyright"></img>
            </div>
            <div className='flex items-center inTouch delay-100 text-[26px] sm:text-[2.1vw] xl:hover:text-[2.4vw] text-stone-300 cursor-pointer flex justify-end sm:block mb-9 sm:mb-0'>
              <div className='sm:[display:none]'>
                <div className='flex border-stone-400 mr-3 animate-bounce'>
                        <div className='navArrows rightArrows'></div>
                        <div className='navArrows rightArrows'></div>
                        <div className='navArrows rightArrows'></div>
                        <div className='navArrows rightArrows'></div>                
                    </div>
              </div>
              
              <Link to="/GetInTouch">
                <button><h1 className='text-stone-400 sm:text-stone-300 hover:text-zinc-700 lg:hover:text-red-600 '>GET IN TOUCH</h1></button>
                </Link>
              </div>
        </div>
      <div className='text-red-700 px-7 mt-5 text-[2.7vw] sm:[display:none]'>
        <div>FOLIO 2023</div>
      </div>
    </div>
  )
}