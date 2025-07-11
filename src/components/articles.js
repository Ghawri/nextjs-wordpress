'use client';
import { useRef, useState, useEffect } from 'react';

const cards = [
    { title: 'Jan 01, 2025', sub: "Personl Meeting", description: 'One-on-one sessions with a licensed therapist to address...', img: '/images/healthcare-post-1.jpg' },
    { title: 'Jan 01, 2025', sub: "Depression", description: 'Therapy sessions designed to improve communication... ', img: '/images/healthcare-post-2.jpg' },
    { title: 'Jan 01, 2025', sub: "Mental Consult", description: 'Sessions that involve family  improve... ', img: '/images/healthcare-post-3.jpg' },
    { title: 'Jan 01, 2025', sub: "Personl Meeting", description: 'One-on-one sessions with a licensed therapist to... ', img: '/images/healthcare-post-1.jpg' },
    { title: 'Jan 01, 2025', sub: "Depression", description: 'Therapy sessions designed to improve communication...', img: '/images/healthcare-post-2.jpg' },
    { title: 'Jan 01, 2025', sub: "Mental Consult", description: 'Sessions that involve family  improve...', img: '/images/healthcare-post-3.jpg' },



];

const Articles = () => {
    const containerRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const cardsPerSlide = 3;
    const totalSlides = Math.ceil(cards.length / cardsPerSlide);

    const scrollToSlide = (index) => {
        const container = containerRef.current;
        const cardWidth = container.offsetWidth / cardsPerSlide;
        container.scrollTo({
            left: index * cardWidth * cardsPerSlide,
            behavior: 'smooth',
        });
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % totalSlides;
        scrollToSlide(next);
    };

    const prevSlide = () => {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        scrollToSlide(prev);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Cards Container */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto scroll-smooth space-x-4 pb-4 -mx-2"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-[85%] sm:w-1/2 md:w-1/3 flex-shrink-0 p-2 "
                        >

                            <div className="rounded-xl w-full flex flex-col bg-white shadow-md">
                                {/* Responsive Image */}
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="h-48 sm:h-64 md:h-80 w-full object-cover rounded-2xl"
                                />

                                {/* Card content */}



                            </div>
                            <div className="p-4 flex flex-col relative items-center shadow bg-white translate-y-[-10vh] rounded-2xl translate-x-[5vh] w-[25vh] h-[25vh] ">
                                <div className='mx-auto '>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#ef7e63"
                                        className="w-6 h-6 mx-auto text-gray-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 6.75v-1.5M15.75 6.75v-1.5M3.75 9h16.5M4.5 4.5h15a.75.75 0 01.75.75v14.25a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z"
                                        />
                                    </svg>

                                    <h3 className="text-sm text-[#ef7e63] font-semibold">{card.title}</h3>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-700">{card.sub}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                                     
                                      <div className=" mt-2 absolute bottom-0 right-0 left-0 pb-2" >
                                    <h2 className='text-[#156C5F]'>Read more {'>'}</h2>
                                     </div>
                                </div>

                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-[#156C5F]' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>

    );
};

export default Articles;
