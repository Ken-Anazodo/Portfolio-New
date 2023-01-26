import React, { useState } from 'react'
import "./Section2.css"
import gsap from 'gsap';
import {useRef, useEffect} from 'react'

const Section2 = () => {

const [changeColor, setChangeColor] = useState(false)

const colorChange = () => {
    setChangeColor(true)
    console.log("hovering")
}

    const spin1 = useRef(null);
    const spin2 = useRef(null);
    const anExperience = useRef(null);
    const toNeverForget = useRef(null);
    const passion = useRef(null);

useEffect(() => {
    const element1 = spin1.current;
    const element2 = spin2.current;
    const element3 = anExperience.current;
    const element4 = toNeverForget.current;
    const element5 = passion.current

    // Circle Brand Animation
    gsap.fromTo(element1, {x: '-70vw'}, {x: 0, rotation: 360, 
        scrollTrigger:{
            trigger: element2,
            toggleActions:"restart reset resume none",
            scrub: true
        }
    }, "0.5")

    gsap.fromTo(element2, {x: '-70vw'}, {x: 0, rotation: 360, 
        scrollTrigger:{
            trigger: element2,
            toggleActions:"restart reset resume none",
            scrub: 3
        }
    }, "0.5")


    // Passion is a reason
        gsap.fromTo(element5, {x: '8vw'}, {x: 0, ease: "easeIn.power4", transition: 0.3, duration: 0.6,
        scrollTrigger:{
            trigger: element5,
            scrub: true,
            toggleActions:"restart reset resume none",
        }
    })

     // An Experience to Never Forget Animation
     gsap.fromTo(element3, {x: '-33vw'}, {x: 0, ease: "easeIn.power4", transition: 0.3,
        scrollTrigger:{
            trigger: element3,
            scrub: true,
        }
    })

    gsap.fromTo(element4, {x: '37vw'}, {x: 0, ease: "easeIn.power4", transition: 0.3,
        scrollTrigger:{
            trigger: element4,
            scrub: true
        }
    })
}, [])


  return (
    <div className='h-fit sm:pb-5 p-[1vw] relative overflow-hidden'>
         <div className='pr-[0.5vw]'>
            <div className='passionLogoContnr mb-2'>

            <div className='logos relative flex justify-end '>
            <div className='passionLogo1 mr-10 pb-1'>
                        <div className='h-[17vw] w-[17vw] sm:h-20 sm:w-20 xl:h-[7.7vw] xl:w-[7.7vw] rounded-full border-zinc-700 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent' ref={spin1}>
                        <div className='h-[14vw] w-[14vw] sm:h-16 sm:w-16 xl:h-[6.4vw] xl:w-[6.4vw] rounded-full border-zinc-700 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent'>
                            <div className='h-[11vw] w-[11vw] sm:w-12 sm:h-12 xl:h-[5.2vw] xl:w-[5.2vw] rounded-full border-zinc-700 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent'>
                                <div className='h-[8vw] w-[8vw] sm:w-8 sm:h-8 xl:h-[3.68vw] xl:w-[3.68vw] rounded-full bg-zinc-700 flex justify-center items-center animate-spin'>
                                    <div className='h-[0.8vw] w-[2vw] sm:w-1 sm:h-3 xl:w-[0.3vw] xl:h-[1.5vw] bg-black'></div>
                                    <div className='h-[2vw] w-[0.8vw] sm:w-3 sm:h-1 xl:w-[1.5vw] xl:h-[0.3vw] bg-black'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>


            <div className='passionLogo2 absolute mr-10 pb-1 z-20'>
                        <div className='h-[17vw] w-[17vw] sm:h-20 sm:w-20 xl:h-[7.7vw] xl:w-[7.7vw] rounded-full border-stone-400 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent' ref={spin2}>
                        <div className='h-[14vw] w-[14vw] sm:h-16 sm:w-16 xl:h-[6.4vw] xl:w-[6.4vw] rounded-full border-stone-400 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent'>
                            <div className='h-[11vw] w-[11vw] sm:w-12 sm:h-12 xl:h-[5.2vw] xl:w-[5.2vw] rounded-full border-stone-400 border-[0.5vw] sm:border-[3px] xl:border-[0.3vw] bg-transparent'>
                                <div className='h-[8vw] w-[8vw] sm:w-8 sm:h-8 xl:h-[3.68vw] xl:w-[3.68vw] rounded-full bg-stone-400 flex justify-center items-center animate-spin'>
                                    <div className='h-[0.8vw] w-[2vw] sm:w-1 sm:h-3 xl:w-[0.3vw] xl:h-[1.5vw] bg-stone-700'></div>
                                    <div className='h-[2vw] w-[0.8vw] sm:w-3 sm:h-1 xl:w-[1.5vw] xl:h-[0.3vw] bg-stone-700'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

                    <div className='passion flex justify-end'>
                        <div className='appFont font-light text-stone-400 text-[3.7vw]' ref={passion}>Passion is always a reason </div>
                    </div>
                </div>
            </div>



        <div className='appFont writeUp font-bold text-[9.5vw] sm:text-[6.7vw] text-stone-400'>
            <div className='line flex justify-center'>
                <div className='bg-stone-400 h-[0.1vw] w-11/12'></div>
            </div>

            <div onMouseEnter={colorChange}>
                <div className={`chiefContainer text-zinc-700 text-xs font-semibold mt-[1.8vw] sm:text-sm md:text-[1.3vw] active:text-stone-200 ${changeColor? "" : ""}`}>
                    <span className='chief'>
                        THE CLAN CHIEF
                    </span>
                </div>
                <div className= {`statement flex justify-end mb-[3.2vw] mt-[2.7vw] tracking-tight overflow-hidden hover:text-red-600  ${changeColor? "" : ""}`} ref={anExperience}>
                    <h1>GIVE 'EM AN EXPERIENCE </h1>
                </div>
            </div>

            <div className='line flex justify-center'>
                <div className='bg-stone-400 h-[0.1vw] w-11/12'></div>
            </div>

            <div>
                <div className='chiefContainer text-zinc-700 text-xs font-semibold mt-[1.8vw] sm:text-sm  md:text-[1.3vw]'>
                    <span className='chief'>
                        THE CLAN CHIEF
                    </span>
                </div>
                <div className='statement mb-[3.2vw] mt-[2.7vw] tracking-tight overflow-hidden hover:text-red-600' ref={toNeverForget}>
                    <h1>SOMETHING TO NEVER FORGET </h1>
                </div>
            </div>

            <div className='line flex justify-center'>
                <div className='bg-stone-400 h-[0.1vw] w-11/12'></div>
            </div>
        </div>
    </div>
  )
}

export default Section2