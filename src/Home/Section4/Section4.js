import React from 'react';
import {useRef, useEffect} from 'react';
import "./Section4.css";
import img55 from './Img/img55.jpg';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger); 


const Section4 = () => {

    const storyParentSv = useRef(null);
    const tinyWriteUpSec = useRef(null);
    const tinyWriteUpSec1 = useRef(null);
    const forEnquiriesLg = useRef(null);
    const forEnquiriesSm = useRef(null);
    const getInTouchRef = useRef(null);
     
    // Let's Tell Your Story Section
    useEffect(() => {
        const el88 = storyParentSv.current;
        
        const storyChildSv1 = el88.children[0];
        const storyChildSv2 = storyChildSv1.nextSibling;
        const storyChildSv3 = storyChildSv2.nextSibling;
        const storyChildSv4 = storyChildSv3.nextSibling;

        const splitTellParent = new SplitType('#storyParentLv', {
            types: 'lines',
            lineClass: 'lineParent'
          })
  
          const splitTell = new SplitType('#storyParentLv', {
            types: 'lines',
            lineClass: 'lineChildren'
          })
        
        gsap.to(splitTell.lines, {duration: 1, y: 0, opacity: 1, stagger: 0.1, ease: 'power2.easeIn',  
        scrollTrigger: {
            trigger: '#storyParentLv',
            start: "10px 70%",
        }}, '0.2')


        let tl5 = gsap.timeline();

        tl5.fromTo(storyChildSv1, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", duration: 0.3, transition: 1, scrollTrigger: {
            trigger: el88,
            start: "20px 80%",
            // toggleActions: 'play restart play reset'
        }}, "0.2")

        .fromTo(storyChildSv2, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", duration: 0.3, transition: 1, scrollTrigger: {
            trigger: storyChildSv2,
            start: "20px 80%",
            // toggleActions: 'play restart play reset'
        }}, "0.2")

        .fromTo(storyChildSv3, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", duration: 0.3, transition: 1, scrollTrigger: {
            trigger: storyChildSv3,
            start: "20px 80%",
            // toggleActions: 'play restart play reset'
        }}, "0.3")

        .fromTo(storyChildSv4, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", duration: 0.3, transition: 1, scrollTrigger: {
            trigger: storyChildSv4,
            start: "20px 80%",
            // toggleActions: 'play restart play reset'
        }}, "0.4")


        gsap.to('#tinyBuilding', {width: '0%', duration: 1, ease: 'power2.easeInOut', 
        scrollTrigger: {
          trigger: '#tinyBuilding',
          start: "20px 80%",
        }}, "0.2")
        
    }, [])

    // Tiny Write Up Section
    useEffect(() => {
       const el101 = tinyWriteUpSec.current;
       const el106 = tinyWriteUpSec1.current;

    //    Tiny Write Up For Large Screen
        const firstChildTiny = el101.children[0];
        const secondChildTiny = firstChildTiny.nextSibling;
        const thirdChildTiny = secondChildTiny.nextSibling;
        const fourthChildTiny = thirdChildTiny.nextSibling;

        // Tiny Write Up For Small Screen
        const firstChildTiny1 = el106.children[0].children[0];
        const secondChildTiny1 = el106.children[1].children[0];
        const thirdChildTiny1 = el106.children[0].children[1]
        const fourthChildTiny1 = el106.children[1].children[1];



        let tl6 = gsap.timeline()

        tl6.fromTo(firstChildTiny, {opacity:0, x: '-7vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
            trigger: el101,
            // toggleActions: 'play restart play reset'
             }}, "0.2")

            .fromTo(secondChildTiny, {opacity:0, x: '7vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                trigger: secondChildTiny,
                // toggleActions: 'play restart play reset'
            }}, "0.2")

            .fromTo(thirdChildTiny, {opacity:0, x: '-7vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                trigger: thirdChildTiny,
                // toggleActions: 'play restart play reset'
            }}, "0.2")

            .fromTo(fourthChildTiny, {opacity:0, x: '7vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                trigger: fourthChildTiny,
                // toggleActions: 'play restart play reset'
            }}, "0.2")



            .fromTo(firstChildTiny1, {opacity:0, x: '20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                trigger: el106,
                // toggleActions: 'play restart play reset'
                 }}, "0.2")
    
                .fromTo(secondChildTiny1, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                    trigger: secondChildTiny1,
                    // toggleActions: 'play restart play reset'
                }}, "0.2")

                .fromTo(thirdChildTiny1, {opacity:0, x: '20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                    trigger: thirdChildTiny1,
                    // toggleActions: 'play restart play reset'
                }}, "0.2")

                .fromTo(fourthChildTiny1, {opacity:0, x: '-20vw'}, {opacity:1, x: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
                    trigger: fourthChildTiny1,
                    // toggleActions: 'play restart play reset'
                }}, "0.2")
    
    }, [])


    useEffect(() => {
        const el102 = forEnquiriesLg.current;
        const el103 = forEnquiriesSm.current;
        const el104 = getInTouchRef.current
        // const el105 = lagosAndTime.current

        // FOR MORE ENQURIES CHILDREN 
        const enquiriesChild1 = el102.children[0];
        const enquiriesChild2 = enquiriesChild1.nextSibling;

       
        let tl6 = gsap.timeline()

        tl6.fromTo(enquiriesChild1, {opacity:0, y: '3.5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", duration: 0.1, transition: 1, scrollTrigger: {
            trigger: enquiriesChild1,
            // toggleActions: 'play restart play reset'
        }}, "0.2")

        .fromTo(enquiriesChild2, {opacity:0, y: '3.5vw'}, {opacity:1, y: 0, ease: "power3.easeOut", duration: 0.1, transition: 1, scrollTrigger: {
            trigger: enquiriesChild2,
            // toggleActions: 'play restart play reset'
        }}, "0.2")

        .fromTo(el103, {opacity:0, y: '4vw'}, {opacity:1, y: 0, ease: "power3.easeOut", transition: 1, scrollTrigger: {
            trigger: el103,
            // toggleActions: 'play restart play reset'
        }}, "0.2")

        .fromTo(el104, {opacity:0, y: '4vw'}, {opacity:1, y: 0, ease: "power3.easeOut", duration: 0.1, transition: 1, scrollTrigger: {
            trigger: el104,
            // toggleActions: 'play restart play reset'
        }}, "0.2")


    }, [])
    
    

  return (
    <div className='callToAction h-fit mt-0 text-stone-400 pb-[1.6vw] px-[1.6vw] relative overflow-hidden bg-neutral-900'>


        {/* LET'S TELL YOUR STORY SECTION (SMALL BREAK POINT) */}   
        <div className='flex justify-end items-center lg:[display:none]'>
         <div className='storyContainer flex flex-col text-5xl md:text-7xl'>
            <div className='story flex flex-col tracking-tighter font-bold mr-[1.2vw]' ref={storyParentSv}>
                
                <div className='flex justify-end'>
                    <span>LET'S</span>
                </div>

                <div className='flex justify-end'>
                    <span>TELL</span>
                </div>
                
                <div className='flex justify-end'>
                    <span>YOUR</span>
                </div>
                
                <div className='flex justify-end'>
                    <span>STORY</span> 
                </div> 
            </div>
        </div>

            <div className='h-52 w-[62%] md:h-72 md:w-3/6 relative'>
              <span className='h-full w-full absolute top-0 left-0 overflow-hidden z-20'>
                    <img className='h-full w-full' src={img55} alt='building'></img>
              </span>

              <div className='absolute h-[100%] w-[100%] z-30 bg-black' id='tinyBuilding'></div>
            </div>
        </div>



        {/* LET'S TELL YOUR STORY SECTION (LARGE BREAK POINT) */}
        <div className='storyContainer [display:none] lg:[display:block]'>
            <div className='story1 flex justify-center tracking-tighter font-bold lg:text-[9.3vw]' id='storyParentLv'>
                {/* LET'S TELL YOUR STORY */}
                <div className='flex'>
                    LET'S TELL YOUR STORY
                </div>
            </div>
        </div>


                    {/* TINY WRITE UP SECTION */}
        {/* TINY WRITE UP SECTION (TINY TO MEDIUM BREAKPOINT) */}
        <div className='tinyWriteUp flex mt-16 ml-10 md:ml-40 lg:[display:none] text-[10px]' ref={tinyWriteUpSec1}>
            <div className='tiny w-[150px]'>
                <div className='mb-32'>
                    BEGIN TO TAYLOR YOUR EXPERIENCE WITH A BRAND THAT'S YOURS TRUE
                    IDENTITY AND MAKE IT A VIBE!
                </div>

                <div>
                    FOR MORE INQUIRIES, KINDLY CLICK GET IN TOUCH BELOW AND REACH OUT.
                </div>
            </div>
           
           <div className='tiny w-[150px] mt-16'>
                <div className='mb-32'>
                    <div>GOT A QUESTION, PROPOSAL OR PROJECT ?</div>
                    <div>HAVE YOU GOT SOMETHING TO WORK TOGETHER ON ?</div>
                    <div>FEEL FREE TO REACH OUT.</div>
                </div>

                <div>
                    THANK YOU FOR YOUR TIME AND LOOKING THROUGH THE PORTFOLIO
                </div>
           </div>
        </div>



        {/* TINY WRITE UP SECTION (LARGE BREAKPOINT UPWARD) */}
        <div className='tinyWriteUp flex px-[1vw] justify-center font-semibold [display:none] lg:flex text-[0.76vw]' ref={tinyWriteUpSec}>
            <div className='w-[17vw] mr-[10.2vw]'>
                BEGIN TO TAYLOR YOUR EXPERIENCE WITH A 
                BRAND THAT'S YOURS TRUE IDENTITY
                AND MAKE IT A VIBE!
            </div>

            <div className='mt-[10vw] w-[27vw]'>
                <div>GOT A QUESTION, PROPOSAL OR PROJECT ?</div>
                <div>HAVE YOU GOT SOMETHING TO WORK TOGETHER ON ?</div>
                <div>FEEL FREE TO REACH OUT.</div>
            </div>

                <div className='w-[17.5vw] mt-[14vw] xl:ml-0'>
                    THANK YOU FOR YOUR TIME AND LOOKING
                    THROUGH THE PORTFOLIO
                </div>
            
            
            <div className='lg:ml-[7.5vw] mt-[17.5vw]'>
                FOR MORE INQUIRIES, KINDLY CLICK GET IN TOUCH
                BELOW AND REACH OUT  
            </div>
        </div>



        {/* WORKING ENQUIRIRIES SECTION */}
        <div className='getInTouchSec flex text-[30px] md:text-[40px] lg:text-[45px] xl:text-[3.9vw]  mt-28 flex-col lg:flex-row sm:justify-between md:mb-10 lg:mb-0 font-normal'>
            <div className='forWorkEnqandCollab flex justify-center'>
                <div className='forWorkEnq1 flex flex-col justify-center md:ml-0 [display:none]' ref={forEnquiriesLg}>
                    <div>
                        <span className='italic mr-[0.9vw]'>For</span>
                        <span>working enquiries</span>
                    </div>
                    <div className='creatCollab z-20 mt-[-20px] lg:mt-[-30px] xl:mt-[-2.3vw] font-normal'>
                        <span className='italic mr-[0.9vw]'>and</span> 
                        <span>creative collaboration</span>
                    </div>
                </div>

                <div className='forWorkEnq2 flex justify-center text-2xl leading-5' ref={forEnquiriesSm}>
                    <div>For working enquiries and creative collaboration</div>
                </div>
            </div>


            <div className='flex sm:items-end justify-center sm:justify-end  mt-[5.8vw] mb-[3.2vw] sm:mb-[5.8vw] md:mb-0 md:mt-0'>

            <div className='[display:none] sm:[display:block]'>       
            <div className='flexArrow mb-[1.8vw] md:mb-[1.5vw] mr-[2vw]'>
                                <div className='arow rightArrow'></div>
                                <div className='arow rightArrow'></div>
                                <div className='arow rightArrow'></div>
                                <div className='arow rightArrow'></div>
                            </div>
                        </div>   

                <Link to="/GetInTouch">
                    <div className='getInTouch text-[25px] lg:text-[3vw] tracking-tighter text-stone-200 hover:text-zinc-700 animate-bounce hover:animate-none easeIn' ref={getInTouchRef}>GET IN TOUCH</div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Section4