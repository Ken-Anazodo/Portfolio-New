import React from 'react';
import './ClanChief.css';
import {useRef, useEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import p1 from "./Img/p1.jpg";
import p2 from "./Img/p2.jpg";
import p3 from "./Img/p3.jpg";
import p4 from "./Img/p4.jpg";
gsap.registerPlugin(ScrollTrigger);


const ClanChief = () => {
    const picFolder = useRef(null);
    const tBrand = useRef(null);

useEffect(() => {
    const body = document.querySelector("body");
    const elpic = picFolder.current;
    const picFolderChild = elpic.getElementsByClassName('clanPic');
    const tBranding = tBrand.current;
    body.classList.add('no-scroll');

    let tl00 = gsap.timeline({
        onComplete: () => {
            setTimeout(() => {
                body.classList.remove("no-scroll");
            }, 3000);
        }
    });
        tl00.fromTo(picFolderChild, {opacity:0, y: '100vw'}, {opacity:1, y: 0, duration: 2, transition: 1, stagger: 0.5, ease: "power4.easeIn"}, "0.2")
            .fromTo(tBranding, {opacity:0, x: '30vw'}, {opacity:1, x: 0, duration: 0.4, ease: "power4.easeOut"}, "4.7")
}, [])



  return (
    <div className=' w-full h-[100vh] relative'>
        <div className=' bg-red-800 w-full h-[100vh] flex justify-center items-center p-[3vw]'>
            <div ref={picFolder}>

                <div className='clanPic  h-[27vw] w-[25vw]  sm:h-[17vw] sm:w-[16vw] md:h-[14vw] md:w-[13vw] lg:h-[12vw] lg:w-[11vw] -skew-y-6 mb-[1vw]'>
                    <img className='object-cover w-full h-full' src= {p1} alt= "building"></img>
                </div>

                <div className='clanPic  h-[27vw] w-[25vw]  sm:h-[17vw] sm:w-[16vw] md:h-[14vw] md:w-[13vw] lg:h-[12vw] lg:w-[11vw] skew-y-6 mb-[1vw]'>
                    <img className='object-cover w-full h-full' src= {p2} alt= "building"></img>
                </div>

                <div className='clanPic  h-[27vw] w-[25vw]  sm:h-[17vw] sm:w-[16vw] md:h-[14vw] md:w-[13vw] lg:h-[12vw] lg:w-[11vw] -skew-y-6 mb-[1vw]'>
                    <img className='object-cover w-full h-full' src= {p3} alt= "building"></img>
                </div>

                <div className='clanPic  h-[27vw] w-[25vw]  sm:h-[17vw] sm:w-[16vw] md:h-[14vw] md:w-[13vw] lg:h-[12vw] lg:w-[11vw] skew-y-6'>
                    <img className='object-cover w-full h-full' src= {p4} alt= "building"></img>
                </div>

            </div>


                <div className='absolute bottom-[3vw] right-[3vw]' ref={tBrand}>
                    <div className='h-[11vw] w-[11vw] md:h-[7.5vw] md:w-[7.5vw] rounded-full bg-zinc-900 flex justify-center items-center animate-spin'>
                    
                                    <div className='long w-[2.75vw] lg:w-[2.5vw] h-[0.9vw] lg:h-[0.7vw] bg-stone-200'></div>
                                    <div className='short w-[0.7vw] lg:w-[0.5]  h-[2.4vw] lg:h-[2.3vw] bg-stone-200'></div>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default ClanChief