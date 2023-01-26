import React from 'react'
import './ClanChiefDisplay.css';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);

const ClanChiefDisplay = () => {
    const timeLvp = useRef(null);
    const kenneth = useRef(null);
    const anazodo = useRef(null);
    const scrl = useRef(null);
    const folio22 = useRef(null);
    const brandBall = useRef(null);

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    useEffect(() => {
        const eltime1 = timeLvp.current;
        const elkenneth = kenneth.current;
        const elanazodo = anazodo.current;
        const elScrl = scrl.current;
        const elfolio22 = folio22.current;
        const elfolio = elfolio22.getElementsByClassName('f2')
        const elTbrand = brandBall.current;

// Small Screens UPwards
        const splitParent = new SplitType('#splitChief', {
          types: 'lines',
          lineClass: 'lineParent'
        })

        const split = new SplitType('#splitChief', {
          types: 'lines',
          lineClass: 'lineChildren'
        })

        // Mobile Screens
        const mobChiefParentSplit = new SplitType('#mobChiefSplitId', {
          types: 'lines',
          lineClass: 'lineParent1'
        })

        const mobChiefSplit = new SplitType('#mobChiefSplitId', {
          types: 'lines',
          lineClass: 'lineChildren1'
        })

         // small View Port Upwards Clan Chief
        gsap.to(split.lines, {duration: 1, y: 0, opacity: 1, stagger: 0.1, ease: 'power2.easeIn' }, '7.5')
        gsap.to(mobChiefSplit.lines, {duration: 1, y: 0, opacity: 1, stagger: 0.1, ease: 'power3.easeIn' }, '7.5')

        const tl94 = gsap.timeline() 

          tl94.fromTo(eltime1, {opacity:0, x: '20vw'}, {opacity:1, duration: 0.8, x: 0, ease: "power4"}, "8")
          .fromTo(elkenneth, {opacity:0, y: '20vw'}, {opacity:1, y: 0, duration: 1, ease: "power4.easeIn"}, "8.2")
          .fromTo(elanazodo, {opacity:0, y: '20vw'}, {opacity:1, y: 0, duration: 1, ease: "power4.easeIn"}, "8.4")
          .fromTo(elfolio, {opacity:0, y: '10vw'}, {opacity:1, y: 0, duration: 0.5, stagger: 0.1, transition: 1, ease: "power4.easeIn"}, "8.7")
          .fromTo('.f23', {opacity:0, y: '-20vw'}, {opacity:1, y: 0, duration: 0.7, transition: 1,  stagger: 0.3, ease: "power4.easeOut"}, "8.7")
          .fromTo(elScrl, {opacity:0, x: '10vw'}, {opacity:1, x: 0, duration: 0.5, ease: "power4.easeOut"}, "9.5")
          .fromTo(elTbrand, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, duration: 0.7, ease: "power4.easeOut"}, "9")
          .fromTo('.portfolio', {opacity:0, x: '-20vw'}, {opacity:1, x: 0, duration: 0.7, ease: "power4.easeOut"}, "9.2")
          .fromTo('.tball', {opacity:0, x: '20vw'}, {opacity:1, x: 0, duration: 0.7, rotation: 360, ease: "power4.easeOut"}, "9.3")
          .fromTo('.zeroFour', {opacity:0, y: '20vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4.easeIn"}, "9.5")

    }, [])
    


  return (
    <div className='w-full h-[100vh] bg-black'>
         <div className='flex justify-between pt-[7vw] items-center'>
                          <div className='text-red-900 text-[3vw]'>
                              <div className='text-[5vw]' ref={timeLvp}>{`${time}`}</div>
                            <span className='ken mr-[1.6vw] text-zinc-700' ref={kenneth}>KENNETH</span>
                            <span className='theChief text-[4vw]' ref={anazodo}>ANAZODO</span>
                          </div>

                          <div className='flex justify-end mr-[5vw]'>
                            <div className='text-red-900 text-[4.5vw] sm:text-[3vw] xl:text-[2vw] mr-[5vw]'>
                              <h1 className='appFonts font-bold' ref={scrl}>SCROLL</h1>
                            </div>

                            <div className ='animate-ping mb-[7vw] text-zinc-700'>
                                <div className='introArrow2 up'></div>
                                <div className='introArrow2 up'></div>
                                <div className='introArrow2 up'></div>
                            </div>
                          </div>
                        </div>

                        {/* Mobile 450px View Port downwards */}
                        <div className="theChief mobChief mt-[11v] text-red-700 text-[25vw] sm:[display:none]" id='mobChiefSplitId'>
                            <div>THE</div>
                            <div>CLAN</div>
                            <div>CHIEF</div>   
                        </div>

                        {/* Small View Port Upwards */}
                        <div className="theChief mt-[2vw] text-red-700 text-[19vw] [display:none]  sm:[display:block] relative ">
                            <div id='splitChief' className='chiefSplit'>
                              <span>THE CLAN</span>
                              <span> CHIEF</span>
                            </div>
                        </div>
                      
                      {/* DISPLAY MOBILE */}
                          <div className='appFonts text-[7vw] mt-[2vw] text-red-900  xs:[display:none]'>
                              <div className='f23 font-black'>Folio</div>
                              <div className='f23'>2023</div>
                          </div>


                        {/* DISPLAY FROM SMALL VIEW PORT */}
                      
                          <div className='appFonts text-[5vw] mt-[2vw] text-red-900 [display:none] sm:[display:block] top-[39.1vw] right-[5vw] absolute' ref={folio22}>
                              <div className='f2 font-black'>Folio</div>
                              <div className='f2 font-medium animate-pulse'>2023</div>
                          </div>


                          {/* Small View Port Upwards */}
                          <div className='absolute top-[43.3vw] right-[18vw] [display:none] sm:[display:block]'>
                                <div className='pb-1 animate-spin' ref={brandBall}>
                                  <div className='h-[7.4vw] w-[7.4vw] rounded-full border-zinc-700 border-[0.45vw] bg-transparent'>
                                    <div className='h-[6.1vw] w-[6.1vw] rounded-full border-zinc-700 border-[0.45vw] bg-transparent'>
                                      <div className='h-[4.9vw] w-[4.9vw] rounded-full border-zinc-700 border-[0.45vw] bg-transparent'>
                                        <div className='h-[3.28vw] w-[3.28vw] rounded-full bg-zinc-700 flex justify-center items-center animate-spin'>
                                              <div className='w-[0.32vw] h-[1.4vw] bg-stone-400'></div>
                                              <div className='w-[1.4vw] h-[0.32vw] bg-stone-400'></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>

                            
                              <div className='portfolio text-center text-zinc-700 text-[5vw] sm:text-[6vw] flex xs:[display:none] justify-around items-center mt-[13vw] mt-[0vw] md:mt-[29vw]'>
                                    <div className='port'>PORTFOLIO</div>

                                      
                                        <div className='tball'>
                                            <div className='h-[14vw] w-[14vw] xl:h-[6.4vw] xl:w-[6.4vw] rounded-full  bg-zinc-700 flex justify-center items-center animate-spin'>
                                                <div className='h-[1.2vw] w-[3.9vw] bg-zinc-900'></div>
                                                <div className='h-[3.6vw] w-[1.2vw] bg-zinc-900'></div>
                                            </div>
                                        </div>
                                    
                              </div>
                              <div className='zeroFour text-red-900  xs:[display:none]'>
                                  <div>0</div>
                                  <div>4</div>
                                  <div>3</div>
                              </div>
    </div>
  )
}

export default ClanChiefDisplay