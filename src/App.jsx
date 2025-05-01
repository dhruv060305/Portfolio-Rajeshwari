import './App.css'
import Main from './Pages/Main'
import Nav from './Pages/Nav'
import Secondsection from './Pages/Secondsection'
import CustomCursor from './Animations/CustomCursor';
import ScrollEffect from './Animations/ScrollEffect';

import CountUp from './Animations/CountUp';
import React, { useState, useEffect } from 'react';





function App() {

  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      
      setTimeout(() => {
        setShowLoader(false);
      }, 700); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (



    <div className='cursor-none'>
      <CustomCursor></CustomCursor>


      {/* Loading Screen */}
      {showLoader && (
        <div
          className={`loading-screen h-screen w-full flex text-4xl justify-center items-center fixed top-0 left-0 transition-transform duration-700 ease-in-out ${!loading ? '-translate-y-full' : ''
            }`}
          style={{ backgroundColor: '#000000', zIndex: 50 }}
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-amber-50"
          />
        </div>
      )}



      {/* Main Content after loading */}
      {!loading && (
        <>

          <ScrollEffect />
          <Nav></Nav>
          <Main></Main>
          <Secondsection></Secondsection>
        </>
      )}
    </div>




  )
}

export default App
