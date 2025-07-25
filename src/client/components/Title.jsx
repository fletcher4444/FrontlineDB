import React, { useEffect, useRef } from 'react';
import { animate, stagger, text } from 'animejs';
import '../styles/AnimatedCss.css'// Ensure you have this CSS file for styling

const AnimatedTitle = ({ title }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Split the text into chars
    const { chars } = text.split(headingRef.current, {
      words: false,
      chars: true
    });

    // Apply the animation to the characters
    animate(chars, {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: stagger(50),
      ease: 'inOutCirc',
      loopDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <h2 ref={headingRef}>
      {title}
    </h2>
  );
};

export default AnimatedTitle;
