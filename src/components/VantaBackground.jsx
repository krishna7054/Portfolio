import React, { useEffect, useRef, useState } from 'react';
import HALO from 'vanta/dist/vanta.halo.min.js';
import * as THREE from 'three';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          minHeight: 200.0,
          minWidth: 200.0,
          amplitudeFactor: 1.7,
          size: 1.0,
          yOffset: 0.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full"></div>;
};

export default VantaBackground;
