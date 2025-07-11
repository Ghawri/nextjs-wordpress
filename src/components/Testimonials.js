'use client';
import React, { useEffect,useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useState } from 'react';

const slides = [
    {
        id: 1,
        text: "“Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid.”",
        img: "/images/client-img5.jpg",
        customer: "Jonathan Andrew"
    },
    {
        id: 2,
        text: "“Ignissimos ducimus ui blandiitis praesentium voluptatum deleniti atqui corrupti quos dolores aet quas molestias excepturi, sint occaesatii gnissimos ducimus molestiae non recusandae itarue earum rerum tenetur a saiente delectus.”",
        img: "/images/client-img4.jpg",
        customer: "Methew John"
    },
    {
        id: 3,
        text: "“Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid.”",
        img: "/images/client-img3.jpg",
        customer: "John Weck"
    },
    {
        id: 4,
        text: "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,”",
        img: "/images/client-img2.jpg",
        customer: "Sarina William"
    },
    {
        id: 5,
        text: "“Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "/images/client-img1.jpg",
        customer: "Mark Jack"
    },
];

const Testimonials = () => {

     const containerRef = useRef();

  useEffect(() => {
    const headings = gsap.utils.toArray(".animate-heading");

    headings.forEach((el) => {
      gsap.fromTo(
        el,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    };


    return (
        
        <div className="container mt-[10vh] h-[40vh] mx-auto px-4">
            {/* Heading */}
            <div className="text-heading flex flex-col items-center mb-[5vh] text-center">
                <div className="title text-[#ef7e63] text-[2vh] font-semibold">
                    <h2>Testimonials</h2>
                </div>
                <div ref={containerRef}  className=" animate-heading sub-title text-[4vh] sm:text-[5vh] md:text-[6vh] font-bold">
                    <h2>What Our Patients are Saying</h2>
                </div>
            </div>

            {/* Carousel */}
            <div className="crouser flex justify-center w-full">
                <div className="relative w-full max-w-4xl px-4 sm:px-6 mt-[-3vh] flex flex-col items-center text-center">

                    {/* Backward Button */}
                    <button
                        onClick={prevSlide}
                        className="hidden sm:flex absolute left-0 top-1/2 transform -translate-x-[5vh] -translate-y-1/2  rounded-full w-10 h-10 items-center justify-center shadow z-10"
                    >
                        ◀
                    </button>

                    {/* Testimonial Box */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center text-base sm:text-lg font-medium text-gray-700 transition-all duration-900">
                        {/* Stars */}
                        <div className="stars flex items-center mb-3 gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-yellow-400"
                                >
                                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853 1.417 8.262L12 19.771l-7.417 4.092L6 15.601 0 9.748l8.332-1.73z" />
                                </svg>
                            ))}
                        </div>

                        {slides[current].text}
                    </div>

                    {/* Forward Button */}
                    <button
                        onClick={nextSlide}
                        className="hidden sm:flex absolute right-0 top-1/2 transform -translate-x-[-5vh] -translate-y-1/2 rounded-full w-10 h-10 items-center justify-center shadow "
                    >
                        ▶
                    </button>

                    {/* Indicator Images */}
                    <div className="flex flex-col items-center mt-10 gap-3">
                        {/* Indicator Images */}
                        <div className="flex justify-center gap-5 flex-wrap">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => setCurrent(index)}
                                    className={`rounded-full overflow-hidden w-10 h-10 sm:w-12 sm:h-12 transition-all duration-600 ${index === current ? 'scale-150' : 'opacity-60'
                                        }`}
                                >
                                    <img
                                        src={slide.img}
                                        alt={`Client ${slide.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Customer Name (centered below all indicators) */}
                        <div className="mt-3">
                            <h2 className="text-lg font-semibold text-gray-800">{slides[current].customer}</h2>
                            <h2 className='sub-text mt-1'> Happy Client</h2>


                        </div>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Testimonials