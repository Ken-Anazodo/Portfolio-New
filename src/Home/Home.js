import React from 'react'
import "./Home.css";
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import Section1 from './Section1/Section1';
import Navmenu from './Navmenu/Navmenu';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClanChief from './ClanChiefIntro/ClanChief';
import ClanChiefDisplay from './ClanChiefDisplay/ClanChiefDisplay';
import Footer from './Footer/Footer';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  const intro = useRef(null);
  const panels = useRef(null);

   // Intro Cover Section
   useEffect(() => {
    const clanIntroRed = intro.current;
    const clanIntroChildRed = clanIntroRed.children[0];
    const elPanels = panels.current;
    const panelChildren = elPanels.getElementsByClassName('panel');


      let tl40 = gsap.timeline()

      tl40.fromTo(clanIntroRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '100%', transition: 1, ease: 'power4.easeOut', duration: 1.5,}, '6')
          .fromTo(clanIntroChildRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '-100%', transition: 1, ease: 'power4.easeOut', duration: 1.5}, '6')
        



          const panelSections = gsap.utils.toArray(panelChildren);
          gsap.to(panelSections, {
            ease: "none",
            overwrite: 'auto',
            scrollTrigger: {
                trigger: elPanels,
                start: "top top",
                scrub: 1,
                snap: {
                  snapTo: 1 / (panelSections.length - 1),
                  inertia: false,
                  duration: {min: 0.3, max: 0.3}
              },
            }
          });
     
  }, [])
  

  return (
    <div className='overflow-hidden'>
      <div>

      <div>
      {/* <div className='fixed bg-red-900 text-black'>GET IN TOUCH</div> */}
        <div ref={panels}>

            <div className='panel bg-black'>
                {/* Snap Control */}
                <div className='h-[1vw]'></div>
            </div>

          <div className='w-[100vw] h-[100%] relative bg-black'>
              <div className='w-[100vw] h-full bg-black leading-none pl-[1.5vw]'>
                <ClanChiefDisplay/>
              </div> 
          </div>

          
            <div className='panel bg-black'>
                {/* Snap Control */}
                <div className='h-[5vw]'></div>
            </div>
        </div>
           
            <Navmenu/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer />  
      </div>

     
     
                   <div className='w-[100%] h-[100vh] translate-x-0 translate-y-ful absolute top-0' ref={intro}>
                      <div className='w-full h-[100vh]  translate-x-0 translate-y-ful absolute top-0'>
                         <ClanChief/>
                      </div>
                   </div>
      </div>
    </div>
  )
}

export default Home



// const Home = () => {
//   const panels = useRef(null);
//   const intro = useRef(null);
  

//    // Intro Cover Section
//    useEffect(() => {
//     const elPanels = panels.current;
//     // const componentSecs = elPanels.children[1]
//     const panelChildren = elPanels.getElementsByClassName('panel');
//     const clanIntroRed = intro.current;
//     const clanIntroChildRed = clanIntroRed.children[0];



//       const panelSections = gsap.utils.toArray(panelChildren);
//       const mm = GSAP.matchMedia();
//       gsap.to(panelSections, {
//       // xPercent: -100 * ( panelSections.length - 1 ),
//       x: () => {
//         return -(elPanels.scrollWidth - window.innerWidth);
//       },
//       ease: "none",
//       overwrite: 'auto',
//       scrollTrigger: {
//           trigger: elPanels,
//           pin: true,
//           start: "top top",
//           invalidateOnRefresh: true,
//           scrub: 1,
//           snap: {
//             snapTo: 1 / (panelSections.length - 1),
//             inertia: false,
//             duration: {min: 0.1, max: 0.1}
//         },
//         end: () =>  "+=" + (elPanels.offsetWidth + window.innerWidth)
//       }
//     });

   
       
//         if (panelSections && elPanels.isSameNode(panelSections.parentElement)) {
//           let totalScroll = gsap.scrollTrigger.end - gsap.scrollTrigger.start,
//             totalMovement = (panelSections.length - 1) * panelSections.offsetWidth;
//           const y = Math.round(gsap.scrollTrigger.start + (panelSections.offsetLeft / totalMovement) * totalScroll);
//         }
      
//         gsap.to(window, {scrollTo: {y: 'y', autoKill: false}, duration: 1});
     


//       let tl40 = gsap.timeline()

//       tl40.fromTo(clanIntroRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '100%', transition: 1, ease: 'power4.easeOut', duration: 1.5}, '6')
//           .fromTo(clanIntroChildRed, { yPercent: 0, translate: 0, display: "block", opacity: 1}, {display: "none", opacity: 0, yPercent: 100, translate: '-100%', transition: 1, ease: 'power4.easeOut', duration: 1.5}, '6')
        
//   }, [])


//   return (
//     <div className='overflow-hidden'>
//       <div id='mainPanels'>

//       <div className='flex' ref={panels}>
//         <div className='panel w-[100vw] h-[100%] relative'>
//             <div className='w-[100vw] h-full bg-zinc-900 leading-none pl-[1.5vw] relative bg-black'>
//                 <ClanChiefDisplay/>
//             </div> 
//         </div>


//           <div className='panel'>

//             <div className='flex'>
//               <div className='bg-zinc-900'>
//                   <Navmenu />
//                   <Section1 />
//                   <Section2 />
//                   <Section3 />
//                   <Section4 />
//               </div>
              
//               <div className='flex items-end'>
//                 <div className='bg-stone-200'>
//                     <Footer />
//                 </div>
//               </div>
//             </div>

//           </div>
//       </div>

//                    <div className='w-[100vw] h-[100vh] translate-x-0 absolute top-0 z-50' ref={intro}>
//                       <div className='w-full h-[100vh]  translate-x-0 absolute top-0 z-50'>
//                          <ClanChief />
//                       </div>
//                    </div>
//       </div>
//     </div>
//   )
// }

// export default Home
