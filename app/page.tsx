'use client';

import React from 'react';
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all';


gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage = () => {
  return (
    <div className="p-5">
      HomePage
    </div>
  );
};

export default HomePage;
