import React, { useEffect, useState } from 'react';
import "../App.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('#ffffff'); // Initial color (white)

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Get the element under the cursor
      const element = document.elementFromPoint(x, y);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;

        // Convert background color to brightness and change cursor color
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const r = parseInt(rgb[0]);
            const g = parseInt(rgb[1]);
            const b = parseInt(rgb[2]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            // Set cursor color based on brightness
            if (brightness < 128) {
              setCursorColor('#ffffff'); // Light cursor on dark bg
            } else {
              setCursorColor('#000000'); // Dark cursor on light bg
            }
          }
        } else {
          setCursorColor('#ffffff'); // Default light color if transparent
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: cursorColor,
      }}
    />
  );
}

export default CustomCursor;
