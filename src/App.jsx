import './App.css'
import Main from './Pages/Main'
import Nav from './Pages/Nav'
import Secondsection from './Pages/Secondsection'
import CustomCursor from './Animations/CustomCursor';
import ScrollEffect from './Animations/ScrollEffect';
import AudioPlayer from './Animations/AudioPlayer';
import CountUp from './Animations/CountUp';
import React, { useState, useEffect } from 'react';





function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or resources)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (or when content is ready)
    }, 3000); // You can adjust the delay based on your needs (e.g., waiting for API response)
  }, []);

  return (



    <div className='cursor-none'>
      <CustomCursor></CustomCursor>
      <AudioPlayer />

      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen h-screen w-full flex text-4xl  justify-center items-center"  style={{ backgroundColor: '#F8F8E1' }}>
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
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
