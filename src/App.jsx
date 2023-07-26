import React, { useEffect, useState } from 'react';
import { Application } from '@splinetool/runtime'; 
import LoadingImg from './assets/loading.svg'

function App() {

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    
    app
    .load('https://prod.spline.design/hnhZVl8bukxzjj0h/scene.splinecode')
    .then(() => {
      setIsLoading(false);
    })


    // Cleanup function (optional)
    
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  return (
    <div className='flex flex-col w-full justify-between md:p-10 p-0 min-h-[500px] relative overflow-x-hidden'>
      <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-[-100px] right-[-100px] rounded-full white__gradient animate-pulse' />
      <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-[-100px] left-[-100px] rounded-full pink__gradient animate-pulse' />
      <div className='flex flex-col mt-12 md:mt-0'>
        <h1 className='font-roboto font-bold md:text-[30px] text-[20px] text-center text-white mt-12 tracking-[5px] md:tracking-wider drop-shadow-2xl mb-6'>
          Design and Integrate beautiful 3D paths
        </h1>
        <h2 className='font-roboto md:text-[15px] text-[12px] text-center text-white tracking-[8px] md:tracking-wider drop-shadow-2xl'><a href="https://app.spline.design/">Using Spline</a></h2>
      </div>
      <div className='flex flex-col h-[607px]'>
        <div className={`${!isLoading ? "hidden" : "block"} loading-container mt-12`}>
          <img src={LoadingImg} alt='Loading...' className='animate-spin'/>
        </div>
        <canvas id="canvas3d" className={isLoading ? "hidden" : "block"}></canvas>
      </div>
    </div>
  )
}

export default App
