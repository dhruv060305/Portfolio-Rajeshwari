import React, { useEffect } from 'react';

function ScrollEffect() {
  useEffect(() => {
    // Scroll down a little slower (smooth scroll with a longer duration)
    window.scrollTo({
      top: 100,  // You can increase this number to scroll further
      behavior: 'smooth',
    });

    // Scroll back to the top after a longer delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 500); // Delay for 3 seconds before scrolling back (can increase this)
  }, []);

  return null;
}

export default ScrollEffect;
