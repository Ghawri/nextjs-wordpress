'use client';
import { useRef, useState, useEffect } from 'react';




const ProjectCards = () => {
  const cards = [
    { title: 'Individual', sub: "Personl Meeting", description: 'One-on-one sessions with a licensed therapist to address...', img: '/images/case-3.jpg' },
    { title: 'Frustraion', sub: "Depression", description: 'Therapy sessions designed to improve communication... ', img: '/images/case-2.jpg' },
    { title: 'couple Problem', sub: "Mental Consult", description: 'Sessions that involve family  improve... ', img: '/images/case-1.jpg' },
    { title: 'Individual', sub: "Personl Meeting", description: 'One-on-one sessions with a licensed therapist to... ', img: '/images/case-3.jpg' },
    { title: 'Frustraion', sub: "Depression", description: 'Therapy sessions designed to improve communication...', img: '/images/case-2.jpg' },
    { title: 'couple Problem', sub: "Mental Consult", description: 'Sessions that involve family  improve...', img: '/images/case-1.jpg' },



  ];
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
       
        {/* Left Arrow */}
<button
  onClick={prevSlide}
  className="hidden sm:block absolute left-[-10vh] top-1/2 -translate-y-1/2 z-10 bg-[#156C5F] text-white px-3 py-2 rounded-full shadow hover:bg-[#0e5247] transition"
>
  ←
</button>

{/* Right Arrow */}
<button
  onClick={nextSlide}
  className="hidden sm:block absolute right-[-10vh] top-1/2 -translate-y-1/2 z-10 bg-[#156C5F] text-white px-3 py-2 rounded-full shadow hover:bg-[#0e5247] transition"
>
  →
</button>

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
              <div className="p-4 flex flex-col items-center shadow bg-white translate-y-[-10vh] rounded-2xl translate-x-[5vh] w-[25vh] h-[20vh] ">
                <div className='mx-auto'>
                  <h3 className="text-sm text-[#ef7e63] font-semibold">{card.title}</h3>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-700">{card.sub}</h3>
                  <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                </div>

                <div className="mt-4">
                  <button className="bg-[#156C5F] text-white px-5 py-2 rounded-full shadow">
                    &gt;
                  </button>
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

export default ProjectCards;
