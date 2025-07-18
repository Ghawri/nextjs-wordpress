'use client';

import { useEffect, useRef, useState } from 'react';

export default function CounterCard({ target = 100, duration = 2000, title = "", icon}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = parseInt(target);
    const increment = end / (duration / 10);

    const update = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        setTimeout(update, 10);
      } else {
        setCount(end);
      }
    };

    update();
  };

  return (
 

    <div ref={ref} className="text-center flex flex-col items-center justify-center p-4">
  {/* Icon Circle */}
  <div className="flex items-center justify-center bg-[#ef7e63] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mt-10 mb-4">
    <img
      src={icon}
      alt="icon"
      className="w-10 h-10 sm:w-12 transition-transform duration-400 hover:-translate-y-2 sm:h-12 md:w-14 md:h-14 object-contain"
    />
  </div>

  {/* Count Number */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">{count}</h1>

  {/* Title */}
  <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mt-2">{title}</h3>
</div>

  );
}
