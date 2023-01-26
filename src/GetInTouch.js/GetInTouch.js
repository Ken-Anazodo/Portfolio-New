import React, { useRef } from 'react';
import './GetInTouch.css';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import {useState, useEffect} from 'react'
import cee from "./img/cee.PNG";


const GetInTouch = () => {

    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    const[onHover, setonHover] = useState(false);
    

   
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    const line4 = useRef(null);
    const smdetails = useRef(null);
    const backButton = useRef(null);
    const backButton2 = useRef(null);
    const yearRef = useRef(null);
    const lagosAndTimeRef = useRef(null);
   
    useEffect(() => {
        const el201 = line1.current;
        const el202 = line2.current;
        const el203 = line3.current;
        const el204 = line4.current;
        const el205 = smdetails.current;
        const backBtn = backButton.current;
        const backBtn2 = backButton2.current;
        const smdetailsRef = el205.getElementsByClassName("subTitle");
        const socialPlatRef = el205.getElementsByClassName("sH");
        const yearr = yearRef.current;
        const LgAndTime = lagosAndTimeRef.current;
        


        const tl = gsap.timeline({defaults:{opacity: 0, duration: 1.5}})

        tl.fromTo(el201, {x: 1000}, {opacity:1, x: 0, ease: "power4"}, "0.5")
            .fromTo(el202, {x: -1000}, {opacity:1, x: 0, ease: "power4"}, "0.5")
            .fromTo(el203, {x: 1000}, {opacity:1, x: 0, ease: "power4"}, "0.5")
            .fromTo(el204, {x: -1000}, {opacity:1, x: 0, ease: "power4"}, "0.5")
            .fromTo(smdetailsRef, {y: '5vw'}, {opacity:1, y: 0, duration: 0.4, ease: "power3.easeOut"}, "0.7")
            .fromTo(socialPlatRef, {y: '4.5vw'}, {opacity:1, y: 0, duration: 0.4, ease: "power3.easeOut"}, "1.5")
            .fromTo(backBtn, {x: '7vw'}, {opacity:1, x: 0, duration: 0.4, ease: "power3.easeOut"}, "2.5")
            .fromTo(backBtn2, {y: '6vw'}, {opacity:1, y: 0, duration: 0.4, ease: "power3.easeOut"}, "2")
            .fromTo(LgAndTime, {x: '6vw'}, {opacity:1, x: 0, duration: 0.4, ease: "power3.easeOut", transition: 1,  scrollTrigger: {
                trigger: LgAndTime,
                toggleActions: 'play restart play reset'
            }}, "0.5")
            .fromTo(yearr, {y: '4vw'}, {opacity:1, y: 0, duration: 0.4, transition: 1, ease: "power3.easeOut", scrollTrigger: {
                trigger: yearr,
                toggleActions: 'play restart play reset'
            }}, "0.5")
            



    }, [])
    


  return (
    <div className=' min-h-screen relative overflow-hidden'>
        <div className='socialMedia text-stone-400 px-[3vw] text-[6.8vw] sm:text-[4vw] pt-[1.5vw] relative' ref={smdetails}>
            <div>
                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[1vw]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <a href= "mailto: kenanazodo43@gmail? subject= subject text">
                        <div className='sH my-[1.2vw] cursor-pointer hover:text-red-600 text-zinc-700'>kenanazodo43@gmail.com</div>
                    </a>
                </div>

                <div className='flex justify-center' ref={line1}>
                    <div className='h-[0.15vw] w-10/12 bg-stone-400'></div>
                </div>



                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[1vw]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>

                    <a className='linkedIn' href='https://www.linkedin.com/in/kenneth-anazodo-299a20170' aria-label='linkedIn' rel='noopener' target='_blank'>
                        <div className='sH social my-[1.2vw] cursor-pointer hover:text-red-600'>LinkedIn</div>
                    </a>

                </div>

                <div className='flex justify-center' ref={line2}>
                    <div className='h-[0.15vw] w-10/12 bg-stone-400'></div>
                </div>




                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[1vw]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>

                    <a className='linkedIn' href='https://www.instagram.com/kenova_' aria-label='instagram' rel='noopener' target='_blank'>
                        <div className='sH social my-[1.2vw] cursor-pointer hover:text-red-600'>Instagram</div>
                    </a>

                </div>

                <div className='flex justify-center' ref={line3}>
                    <div className='h-[0.15vw] w-10/12 bg-stone-400'></div>
                </div>
                



                <div>
                    <div className='subTitle text-[2vw] sm:text-[11px] md:text-[1vw]'>
                        <ul>
                            <li>Creative Developer</li> 
                            <li>Get In Touch</li>
                        </ul>
                    </div>
                    <a className='twitter' href='https://www.twitter.com/TheClanChief' aria-label='twitter' rel='noopener' target='_blank'>
                        <div className='sH social my-[1.2vw] cursor-pointer hover:text-red-600'>Twitter</div>
                     </a>
                </div>
               
                <div className='flex justify-center' ref={line4}>
                    <div className='h-[0.15vw] w-10/12 bg-stone-400'></div>
                </div>
                   
                       {/* Button Arrow Section (Large Screen) */}
                        <div className='absolute flex justify-end mt-4 [display:none] md:[display:flex] bottom-[10vw] left-[72vw]' ref={backButton}>
                        <div>
                            <div className='flex justify-end mr-[2.5vw]'>
                            <div className ='animate-ping mb-[7vw]'>
                                <div className='arrow2 up'></div>
                                <div className='arrow2 up'></div>
                                <div className='arrow2 up'></div>
                            </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='animate-ping flex mr-[6.5vw]'>
                                    <div className='arrow2 left'></div>
                                    <div className='arrow2 left'></div>
                                    <div className='arrow2 left'></div>
                                </div>
                            
                                <Link to= "/">
                                    <button onMouseOver={() => {setonHover(true)}}>
                                    <div className='backToHomePage'>
                                    <div className='h-[12.5vw] w-[12.5vw] rounded-full border-stone-400 border-[0.38vw] bg-transparent'>
                                    <div className='h-[10.5vw] w-[10.5vw] rounded-full border-stone-400 border-[0.38vw] bg-transparent'>
                                        <div className='w-[8.5vw] h-[8.5vw] rounded-full border-stone-400 border-[0.38vw] bg-transparent'>
                                            <div className='w-[6vw] h-[6vw] rounded-full bg-stone-400 flex justify-center items-center animate-spin'>
                                                <div className='w-[0.44vw] h-[2vw] bg-stone-700'></div>
                                                <div className='w-[2.1vw] md:h-[0.45vw] bg-stone-700'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                
                    {/* Button Arrow Section Small Screens */}
                <div className='flex justify-center items-center md:[display:none]' ref={backButton2}>
                    <div className={`hoverArrow-MobBreakPoint ${onHover? "arrow-active" : ""} animate-ping mt-[13vh]`}>
                                <div className='arrow1 left'></div>
                                <div className='arrow1 left'></div>
                            </div>

                    <Link to= "/">
                        <div className='flex justify-center mt-[15vh] px-3'>
                            <button onMouseOver={() => {setonHover(true)}} className="">
                            <div className='backToHomePage'>
                            <div className='h-[15vw] w-[15vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                            <div className='h-[12vw] w-[12vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                                <div className='w-[9.5vw] h-[9.5vw] rounded-full border-stone-400 border-2 sm:border-[3px] bg-transparent'>
                                    <div className='w-[7vw] h-[7vw]  rounded-full sm:border-[3px] bg-stone-400 flex justify-center items-center animate-spin'>
                                        <div className='w-[0.5vw] h-[2vw] bg-stone-700'></div>
                                        <div className='w-[2vw] h-[0.5vw] bg-stone-700'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </button>
                        </div>
                        </Link>

                        <div className={`hoverArrow-MobBreakPoint ${onHover? "arrow-active" : ""} animate-ping mt-[13vh]`}>
                                <div className='arrow1 right'></div>
                                <div className='arrow1 right'></div>
                            </div>
                    </div>


                    <div className='flex justify-center sm:justify-end text-[4vw] sm:text-[1.4vw] mt-[12vw] md:mt-[16vw] sm:pt-2 pb-[1vw] sm:mr-[6.3vw] text-zinc-700'ref={lagosAndTimeRef}>
                        <div className='mr-5'>LAGOS, NG</div>
                        <div className='text-red-700'>{`${time}`}</div>
                    </div>

                    <div className='year flex justify-center items-center text-[3vw]' ref={yearRef}>
                        <img className='w-[1.5vw] h-[1.5vw] mr-[0.5vw]' src= {cee} alt= "copyright"></img>
                        <div>2023</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch