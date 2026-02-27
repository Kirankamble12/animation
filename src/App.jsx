import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './App.css'

function App() {
  const container = useRef(); 

  useGSAP(() => {
    // Animation of the headline
    gsap.from(".headline", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 2. Animatation for statistic Statistics (STAGGERED REVEAL)
    gsap.from(".stat-box", {
      y: 20,          
      opacity: 0,     
      duration: 1,    
      stagger: 0.2,  
      delay: 0.5      
    });
  }, { scope: container }); 
  return (
    <div ref={container} className='h-screen bg-zinc-950 flex flex-col items-center justify-center gap-10'>
      
      {/* The Headline */}
      <h1 className="headline text-8xl font-bold text-white tracking-tight">
        welcome traveler
      </h1>

      {/* The Statistics  */}
      <div className="flex gap-20">
        <div className="stat-box text-center">
          <h2 className="text-4xl font-bold text-blue-500">99%</h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Efficiency</p>
        </div>
        <div className="stat-box text-center">
          <h2 className="text-4xl font-bold text-blue-500">12k+</h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Users</p>
        </div>
        <div className="stat-box text-center">
          <h2 className="text-4xl font-bold text-blue-500">24/7</h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Support</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
