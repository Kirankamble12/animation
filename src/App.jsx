import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import './App.css'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef(); 
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",   
        end: "+=2000",      
        scrub: 1,           
        pin: true,          
      }
    });

    // 1) Move the Box
    tl.to(".scroll-box", {
      x: "80vw",            
      rotate: 360,
      ease: "none"          
    })
    //reveling the text through box moving
    .to(".reveal-content", {
      clipPath: "inset(0% 0% 0% 0%)", 
      ease: "none"
    }, "<"); 

  }, { scope: container });

  return (
    <div ref={container} className='bg-zinc-950 text-white overflow-x-hidden'>
      
      <section className="hero-section h-screen flex items-center px-10 relative overflow-hidden">
        
       
        <div className="scroll-box w-40 h-40 bg-blue-600 rounded-2xl shadow-2xl z-20"></div>

        {/* the invisibale text*/}
        <div 
          className="reveal-content absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ clipPath: "inset(0% 100% 0% 0%)" }} // Starts clipped from the right
        >
          
          <h1 className="headline text-8xl font-bold tracking-tight mb-10 text-center uppercase">
            WELCOME ITZFIZZ
          </h1>

          <div className="flex gap-20">
            <div className="stat-box text-center">
              <h2 className="text-4xl font-bold text-blue-500">99%</h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Efficiency</p>
            </div>
            <div className="stat-box text-center">
              <h2 className="text-4xl font-bold text-blue-500">12k+</h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Users</p>
            </div>
             <div className="stat-box text-center">
              <h2 className="text-4xl font-bold text-blue-500">24/7</h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Support</p>
            </div>
          </div>

        </div>
      </section>

      <div className="h-screen opacity-0"></div>
    </div>
  )
}

export default App;
