import React from 'react';
import './Section1.css';
import gsap from 'gsap';
import img2 from "./img/img2.jpeg";
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);





export default function Section1() {

     // Define Animation
   const artDirRef= useRef(null);  
   const provideSupportRef= useRef(null);
   const availForCollabRef = useRef(null);
   const basedInNigRef = useRef(null);
   const bar = useRef(null);
   const scroll = useRef(null);
   const brand = useRef(null);
   const front = useRef(null);
//    const dev = useRef(null)
   const evolve = useRef(null);
   const letsKeepSection = useRef(null);
   const aboutChild3 = useRef(null);
   const cityImgRef = useRef(null);
   const fo = useRef(null);
   const aic = useRef(null);
   const language = useRef(null);
   const aboutParentSec = useRef(null);
   const cityReveal = useRef(null); 

//    For Text Effect in Frontend Section 
    useEffect(() => {

        // Frontend Dev Section
        const el2 = artDirRef.current;
        const el = provideSupportRef.current;
        const el3 = availForCollabRef.current;
        const el4 = basedInNigRef.current;
        const el5 = bar.current;
        const el6 = scroll.current;
        const el7 = front.current;
        // const frontDev = el7.getElementsByClassName("dev");    
      

        
        let tl= gsap.timeline({defaults:{duration: 1,}});

            // Frontend Section
            tl.fromTo(el7, {opacity:0, y: '20vw'}, {y: 0, opacity:1, ease: "power4", transition: 1, 
                scrollTrigger:{
                trigger: el7,
                start: "10px 70%",
            }})

            .fromTo(el2, {opacity:0, y: '6vw'}, {opacity:1, y: 0, ease: "power4", transition: 1, scrollTrigger:{
                trigger: el2,
                start: "10px 60%",
            }}, "0.7")
            .fromTo(el5, {opacity:0, y: '6vw'}, {opacity:1, y: 0, ease: "elastic(1, 0.3)", transition: 1,  scrollTrigger:{
                trigger: el5,
                start: "10px 60%",
            }},"0.9")
            .fromTo(el, {opacity:0, x: '10vw'}, {opacity:1, x: 0, duration: 0.6, ease: "power4", transition: 1, scrollTrigger:{
                trigger: el,
                start: "10px 60%",
            }}, "1.1")

            .fromTo(el3, {opacity:0, y: '6vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4", transition: 1, scrollTrigger:{
                trigger: el3,
                start: "10px 60%",
            }}, "1.3")
            .fromTo(el4, {opacity:0, y: '6vw'}, {opacity:1, y: 0, duration: 0.7, ease: "power4",  scrollTrigger:{
                trigger: el4,
                start: "10px 60%",
            }}, "1.6")
            .fromTo(el6, {opacity:0, x: '6vw'}, {opacity:1, x: 0, ease: "power4",  scrollTrigger:{
                trigger: el6,
                
            }}, "1.6")
            
           
    }, [])



    // For Logo Section
    useEffect(() => {
        const el9 = brand.current;
        

        
            gsap.fromTo(el9, {x: '-80vw'}, {x: 0, rotation: 360, duration: 2, transition: 0.2, 
                scrollTrigger:{
                    trigger: el9,
                    toggleActions:"restart reset resume none",
                    scrub: true
                }
            }, "0.5")
            
    }, [])

    // For About Section
    useEffect(() => {
       const el10 = evolve.current;
       const el11 = letsKeepSection.current;
       const el16 = language.current;
       const el17 = aboutParentSec.current;
       const el18 = aboutChild3.current;
       const elcityReveal = cityReveal.current;
       const el19 = cityImgRef.current;
       const elfo = fo.current;
       const el20 = aic.current;

        // About Children
        const aboutFirstChild = el17.children[0];
        const aboutSecondChild = aboutFirstChild.nextSibling;
        const aboutThirdChild = aboutSecondChild.nextSibling;
        const aboutFourthChild = aboutThirdChild.nextSibling;
        const aboutFifthChild = aboutFourthChild.nextSibling;

        // Defining Language Children 
        const langFirst = el16.children[0];
        const langSecond = langFirst.nextSibling;
        const langThird = langSecond.nextSibling;
        const langFourth = langThird.nextSibling;

        // BLACK CITY VIEW CHILDREN
        const aicArt = el20.children[0];
        const aicNo1 = el20.children[1];
       
        // Language Children
        gsap.fromTo(langFirst, {x: '-1vw'}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: langFirst,
            scrub: true
        }})

        gsap.fromTo(langSecond, {x: '1vw'}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: langSecond,
            scrub: true
        }})

        gsap.fromTo(langThird, {x: '-1vw'}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: langThird,
            scrub: true
        }})
        
        gsap.fromTo(langFourth, {x: '1vw'}, {x: 0, ease: "none", 
        scrollTrigger: {
            trigger: langFourth,
            scrub: true
        }})
        
        // Black City Reveal
        gsap.to(elcityReveal, {height: '0%', duration: 0.8, ease: 'power4.easeOut', 
        scrollTrigger: {
          trigger: elcityReveal,
          start: "10px 50%",
        }})

        gsap.fromTo(el19, {y: '5vw', scale: 2.5}, {y: 0, scale: 1, transition: 1,  duration: 2, 
        scrollTrigger:{
        trigger: el19,
        start: "10px 50%",
        scrub: true
        }},"0.2")

        gsap.fromTo(elfo, {opacity:0, x: '-7vw'}, {opacity:1, x: 0, ease: "power3.easeOut", delay: 0.5, transition: 1, duration: 1, 
        scrollTrigger:{
        trigger: elfo,
        // start: "10px 40%"
        }},"0.2" )

        gsap.fromTo(aicArt, {opacity:0, x: '5vw'}, {opacity:1, x: 0, ease: "power3.easeOut", delay: 0.5, transition: 1, duration: 1, 
        scrollTrigger:{
        trigger: aicArt,
        // start: "10px 40%"
        }},"0.2" )

        gsap.fromTo(aicNo1, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", delay: 0.5, transition: 1, duration: 1, 
        scrollTrigger:{
        trigger: aicArt,
        // start: "10px 40%"
        }},"0.2" )


        let tl1 = gsap.timeline()

                // Language Section
                tl1.fromTo(langFirst, {opacity: 0, y: '6vw'}, {opacity: 1, y: 0, transition: 0.5, duration: 0.5, ease: "power3.easIn", scrollTrigger:{
                        trigger: el16,
                        toggleActions: 'play reverse play reset'
                }}, "0.2")

                    .fromTo(langSecond, {opacity: 0, y: '6vw'}, {opacity: 1, y: 0, transition: 0.5, duration: 0.5, ease: "power3.easIn", scrollTrigger:{
                    trigger: langSecond,
                    toggleActions: 'play reverse play reset'
                    }}, "0.2")

                    .fromTo(langThird, {opacity: 0, y: '6vw'}, {opacity: 1, y: 0, transition: 0.5, duration: 0.5, ease: "power3.easIn", scrollTrigger:{
                        trigger: langThird,
                        toggleActions: 'play reverse play reset'
                    }}, "0.2")

                    .fromTo(langFourth, {opacity: 0, y: '6vw'}, {opacity: 1, y: 0, transition: 0.5, duration: 0.5, ease: "power3.easIn", scrollTrigger:{
                        trigger: langFourth,
                        toggleActions: 'play reverse play reset'
                    }}, "0.2")


                // Evolve Section
                .fromTo(el10, {opacity:0, y: '4vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: el10,
                start: "10px 90%"
                }},"0.2")

                // Lets Keep Section
                .fromTo(el11, {opacity:0, x: '5vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: el11,
                start: "30px 90%",
                }},'0.5')

                // About Child3 Section
                .fromTo(el18, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: el18,
                start: "10px 90%",
                }},"0.2")


                // About Children Section

                .fromTo(aboutFirstChild, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: el17
                }},"0.2" )

                .fromTo(aboutSecondChild, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: aboutSecondChild
                }},"0.2" )

                .fromTo(aboutThirdChild, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: aboutThirdChild
                }},"0.2" )

                .fromTo(aboutFourthChild, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: aboutFourthChild
                }},"0.2" )

                .fromTo(aboutFifthChild, {opacity:0, y: '5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, duration: 1, 
                scrollTrigger:{
                trigger: aboutFifthChild
                }},"0.2" )

    }, [])

   

    
    

    
  return (
    // FRONTEND SECTION
    <div className='pb-36 sm:pb-[14vw] 7xl:pb-[23vw] relative overflow-hidden 2xl:pt-[3vw]'>
        
        <div>
        <div className='front items-center sm:flex text-stone-200 ml-[0.6vw] font-black sm:mb-[12vw] md:mb-[13.5vw] lg:mb-[14.5vw] 2xl:mb-[16vw] 5xl:mb-[18vw]' ref={front}>
           
            <div className='contFrontandScrl mt-[0.6vw] sm:flex sm:justify-between sm:items-center sm:relative'>
                <div className='fed fed1 flex tracking-tighter flex-wrap pt-[1.4vw] lg:pt-[0.6vw] 2xl:pt-[0.2vw] sm:text-[13vw] text-[85px]'>
                    <span className='fed fed1 flex flex-wrap'>
                        <h1 className='dev hover:text-stone-400'>F</h1>
                        <h1 className='dev hover:text-stone-400'>R</h1>
                        <h1 className='dev hover:text-stone-400'>O</h1>
                        <h1 className='dev hover:text-stone-400'>N</h1>
                        <h1 className='dev hover:text-stone-400'>T</h1>
                    </span>

                    <span className='fed flex flex-wrap'>
                        <div className='dev'>-</div>
                        <h1 className='dev hover:text-stone-400'>E</h1>
                        <h1 className='dev hover:text-stone-400'>N</h1>
                        <h1 className='dev hover:text-stone-400'>D</h1>
                    </span>
                </div> 
                {/* <div className='scrl [display:none] sm:[display:flex] sm:text-xs sm:h-[48px] md:h-16 2xl:h-[90px] md:text-base 2xl:text-[22px] text-black p-1 scroll bg-zinc-700 tracking-tighter' ref={scroll}>SCROLL</div> */}
            </div>

            <div className='fed fed2 flex flex-wrap tracking-tight sm:text-[16.8vw] text-[105px] sm:absolute sm:top-[11.9vw] md:top-[11.4vw] lg:top-[10.8vw] 2xl:top-[10.3vw] 6xl:top-[10.4vw]'>
                <h1 className='dev hover:text-stone-400  xl:h-72 h-24'>D</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev text-stone-400 hover:text-stone-200 xl:h-72 h-24'>V</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>L</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>O</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>P</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>E</h1>
                <h1 className='dev hover:text-stone-400 xl:h-72 h-24'>R</h1>
            </div>
        </div>
        </div>

        <div className='appFont font-bold stag text-stone-300 flex justify-end mr-[1.4vw] mt-4 lg:mb-[1.6vw] xl:mb-[1vw] xl:mt-[15vw]' ref = {basedInNigRef}>
            <div className='text-sm md:text-[2vw] lg:text-[1.7vw]'>BASED IN NIGERIA</div>
        </div>

        {/* ART DIRECTION SEC */}
        <div className='lg:flex items-center lg:justify-between'>
        <div className='artDirectionAndCo flex items-center'>
            <div className='text-stone-400 text-[5.4vw] sm:text-[4.5vw] leading-none lg:[line-height:4.1vw] mt-[1.7] ml-[4vw] sm:ml-[2vw] relative' ref= {artDirRef}>
                    <div className='adc-inner bg-zinc-900 hover:text-stone-200'>ART DIRECTION</div>
                    <div className='adc-inner bg-zinc-900 hover:text-zinc-700 text-stone-200'>INTERACTIVE</div>
                    <div className='adc-inner bg-zinc-900 hover:text-stone-200'>CONCEPT DESIGN</div>
            </div>

            <div>
                <div className='w-20 h-3 lg:h-[1.55vw] xl:w-[12.5vw] bg-zinc-700' ref={bar}></div>
            </div>
        </div>

        <div className='iProvSupport flex justify-center text-stone-400 mt-4 2xl:mt-8 xl:mt-1'>
               <span className='appFont font-semibold text-[3vw] sm:text-[2.8vw] leading-none lg:text-[2.2vw] xl:text-[1.9vw] w-[70vw] lg:w-[28vw] xl:w-[26vw] xl:leading-none lg:mr-[10vw] xl:mr-[9vw] sm:mr-40 ml-20' ref= {provideSupportRef}> 
                   I PROVIDE DIGITAL EXPERIENCE FOR COMPANIES, DESIGNERS
                   AND BRANDS THROUGH CREATIVE DEVELOPMENT
               </span> 
            </div>
        </div>


        {/* THE BALL, EVOLVE AND AVAIL FOR COLLAB SEC */}
        <div className='cBrandandAvailCollabContainer flex justify-center flex-col pr-[0.4vw]'>
        <div className='flex items-center'>

        <div className='cBrand mt-5' ref={brand}>
        <div className='c0 c1 h-36 w-36 rounded-full border-stone-200 border-8 bg-transparent ml-4'>
            <div className='c0 c2 h-28 w-28 rounded-full border-stone-200 border-8 bg-transparent'>
                <div className='c0 c3 h-20 w-20 rounded-full border-stone-200 border-8 bg-transparent'>
                    <div className='c0 c4 h-12 w-12 rounded-full border-8 bg-stone-200 flex justify-center items-center animate-spin'>
                        <div className='cLong h-4 w-1 bg-stone-700 z-0'></div>
                        <div className='cShort h-1 w-4 bg-stone-700 z-10'></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className='evolve text-stone-300 ml-[3.5vw] mt-[10.9vw] text-3xl xl:text-[2.4vw]' ref={evolve}>evolve</div>
        </div>
        <div className='availCollab appFont font-bold md:text-[2.1vw] xl:text-[1.9vw] stag text-stone-300 mt-10 ml-10 md:ml-56 xl:ml-[6vw] 8xl:ml-[7vw] mr-[0.8vw]' ref = {availForCollabRef}>
            <div>AVAILABLE FOR COLLABORATION</div>
        </div>
        </div>


        {/* ABOUT AND CHINEESE SECTION */}
        <div className='flex justify-start pr-5 mt-5 sm:mt-0'>
        <div className='flex justify-center flex-wrap xl:flex-nowrap'>

        <div className='aboutAndChinseCont flex flex-row'>

            {/* parent 1*/}
        <div className='ml-[5.5vw] sm:ml-[2.2vw] 5xl:ml-[2.9vw] text-base sm:w-96 xl:text-[1.25vw] xl:w-[25vw] leading-normal' ref={aboutParentSec}>

            {/* 1st Child */}
            <div className='aboutChildSec appFont font-light md:font-bold text-stone-400 mt-[3.3vw]'>
               <h1 className='about font-extrabold xl:text-[1.4vw]'>ABOUT</h1> 
               <p>
                 I am a developer based in Lagos, Nigeria with a degree in Computer Technology. 
                focused on creating interactive digital experiences 
                on the web. I design, develop and deliver web applications that drives result.
                </p>
            </div>

                {/* 2nd Child */}
            <div className='whatsMore aboutChildSec xl:text-[2.7vw] text-4xl text-stone-400 mt-[2vw] [display:none] xl:[display:block]'>
                <div>What's More..</div>
            </div>
            
                {/* 3rd child */}
            <div className='aboutChildSec appFont font-light md:font-bold xl:[display:none] duplabout2 text-stone-400 mt-6 xl:mt-52 max-w-sm mb-6 xl:mb-60'>
                <h1 className='font-extrabold xl:text-[1.4vw]'>INTEREST</h1>
                <div>Art Direction, Creative Development, Concept Design, Brand Strategy, Web3</div>
            </div>

                {/* 4th Child */}
            <div className='aboutChildSec appFont font-light md:font-bold text-stone-400 mt-[2vw] mb-7 md:mb-7 lg:mb-[2vw]'>
                <p>I'm curious, passionate, and strive for continuous evolution. 
                    I gain inspiration through the very art of innovation.
                Creativity has become my lifestyle and I believe expression of ideas through art and designs tells a story at a 
                deeper level without words being uttered.</p>
               <p> I thrive in creating identities that expresses ones true 
                personality by branding their experience and lifestyle.</p>
                <p>Currently, I'm a Frontend Developer and Designer and to this day i push to build 
                    as far as our imaginations can carry, play around with new shapes 
                and techniques to find solutions that are appealing and efficient.</p>
            </div>

                {/* 5th Child */}
            <div className='aboutChildSec appFont text-stone-400 mb-20 md:font-bold lg:mb-[4vw]'>
                <p>
                    I love to explore possibities, strive to know more and everly open minded to constant improvement. 
                    I enjoy working with people that love aesthetics, like minded individuals that evolve with the times,
                    and truly believe the right experience can change it all.
                </p>
            </div>
        </div>

            <div className='lg:ml-16 xl:ml-[3.7vw] 6xl:ml-[4vw] mt-9 lg:mt-12 xl:mt-0'>
                <div className='free text-stone-400 ml-9 w-12 sm:w-[160px] lg:w-[480px] xl:w-[34vw] h-96 text-3xl sm:text-6xl lg:text-7xl  xl:text-[10.4vw] hover:text-stone-200' ref={language}>
                        <div>
                            <span className='lang'>这</span>
                            <span className='lang'>是</span>
                            <span className='lang'>一</span>
                            <span className='lang'>个</span>
                            <span className='lang'>满</span>
                        </div>

                        <div>
                            <span className='lang'>月</span>
                            <span className='lang'>，</span>
                            <span className='lang'>释</span>
                            <span className='lang'>放</span>
                            <span className='lang'>你</span>
                            <span className='lang'>的 </span>
                        </div>
                        
                        <div>
                            <span className='lang'>思</span>
                            <span className='lang'>想</span>
                            <span className='lang'>，</span>
                            <span className='lang'>永</span>
                            <span className='lang'>远</span>
                            <span className='lang'>活</span>
                        </div>

                        <div>
                            <span className='lang'>着</span>
                        </div>
                </div>

                <div className='flex justify-center items-center [display:none] lg:[display:block] xl:[display:none] lg:ml-10'>
                    <div className='appFont flex flex-col text-stone-400 text-2xl sm:text-3xl lg:text-[3.4vw] lg:leading-tight font-light'>
                        <span>LET'S KEEP 'EM</span>
                        <span className='font-bold text-4xl text-red-800 lg:text-[5vw]'>INSPIRED</span> 
                        <span>AND WANTING MORE.</span>
                    </div>
                </div>
            </div>
        </div>


            <div className='mr-[1.55vw]'>
            <div className='flex flex-col md:flex-row justify-center items-center xl:flex-col ml-[1.55vw] 7xl:ml-0'>
                <div className='flex justify-end lg:[display:none] xl:[display:block]'>
                    <div className='appFont flex flex-col text-stone-400 text-4xl leading-none ml-5 sm:text-5xl md:text-[3vw] lg:text-[2vw] font-light' ref={letsKeepSection}>
                        <span>LET'S KEEP 'EM</span>
                        <span className='font-bold text-6xl sm:text-7xl md:text-[4.5vw] lg:text-[3.2vw] text-red-700'>INSPIRED</span> 
                        <span>AND WANTING MORE.</span>
                    </div>
                </div>


                <div className='appFont [display:none] xl:[display:block] xl:text-[1.25vw] font-bold about2 text-stone-400 mt-[5vw] ml-[2.5vw]' ref={aboutChild3}>
                    <h1 className='interest font-extrabold xl:text-[1.4vw]'>INTEREST</h1>
                    <div>Art Direction, Creative Development, Concept Design, Brand Strategy, Web3</div>
                </div>

                
                <div>
                <div className='imgDiv mt-20 lg:mt-0  xl:mt-[4vw] sm:ml-5 h-[350px] w-[73vw] md:h-[500px] md:w-[400px] lg:w-[49vw] lg:h-[400px] xl:h-[49vw] xl:w-[26.5vw] flex justify-center items-center relative overflow-hidden'>
                    <img className='imgg  h-[100%] w-[100%] lg:mt-0  opacity-50 absolute' src= {img2} alt= "cityView" ref={cityImgRef}></img>
                
                <div className='after:absolute after:h-full after:w-full after:top-0 after:right-0 z-10 md:mt-[22vw] lg:mt-[0vw]'> 

                    <div>
                        <div className='text-stone-200  xl:text-[1.1vw] md:text-[1.8vw] text-[2.5vw] ml-[13vw] lg:ml-[9vw]' ref={fo}>
                            <div>FOLIO / 2023</div>
                        </div>

                        <div className='text-stone-400 xl:text-[2.1vw] lg:text-[3vw] md:text-[4vw] text-[5vw]' ref={aic}>
                            <div>
                                <div className='artD flex justify-center'>
                                    <div>ART DIRECTION </div>
                                </div>
                                
                                <div className='text-red-700 xl:text-[1.25vw] lg:text-[2vw] md:text-[2.5vw] ml-[30vw] lg:ml-[19vw]'>
                                    <div>01</div>
                                </div>
                            </div>
                        </div>
                    </div>

               </div>
                <div className='absolute h-full w-full top-0 right-0 z-20 bg-black' ref={cityReveal}></div>
               </div>
                </div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
