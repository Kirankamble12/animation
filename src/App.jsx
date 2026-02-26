import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './App.css'



function App() {
      
 const headlineRef = useRef();

 useGSAP(() =>{
     gsap.from(headlineRef.current,{
      y: 30,          
      opacity: 0,     
      duration: 1,    
      ease: "power3.out" 
     })
 })
  return (
    <>
      <div className='h-screen bg-zinc-950 flex items-center justify-center'>
         <h1  ref={headlineRef}
         className="text-8xl font-bold text-white tracking-tight">
            welcome traveler
           </h1>
      </div>
      
    </>
  )
}

export default App
