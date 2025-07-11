'use client';
import { useRef } from 'react';


export default function CardCarousel() {
    const containerRef = useRef();
const indexRef = useRef(0); // keeps track of scroll index

const scroll = (direction) => {
  const container = containerRef.current;
  const cardWidth = container.offsetWidth / 3; // assume 3 cards per view
  const maxScroll = container.scrollWidth - container.clientWidth;
  const totalSlides = Math.ceil(container.scrollWidth / cardWidth);

  if (direction === 'right') {
    indexRef.current++;
    const newScrollLeft = indexRef.current * cardWidth;

    if (newScrollLeft >= maxScroll) {
      // Loop to start (slide 0)
      indexRef.current = 0;
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  } else {
    indexRef.current--;
    if (indexRef.current < 0) {
      // Loop to end
      indexRef.current = Math.floor(maxScroll / cardWidth);
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollTo({ left: indexRef.current * cardWidth, behavior: 'smooth' });
    }
  }
};
    // const cards = ["http://localhost/wordpress/wp-content/uploads/2023/12/service-1.jpg",
    //     "http://localhost/wordpress/wp-content/uploads/2023/12/service-2.jpg",
    //     "http://localhost/wordpress/wp-content/uploads/2023/12/service-3.jpg",
    //     "http://localhost/wordpress/wp-content/uploads/2023/12/service-4.jpg",
    // ];

    // creating objects for cards 

    const cards = [{
        img: "/images/service-1.jpg",

        icon: "/images/type-img1.png",
        link: "http://localhost/wordpress/therapy/couple-therapy/",
        title: "Couple Therapy",
        description: "One-on-one sessions with a licensed therapist to address personal challenges and mental health issues.",
    },
    {
        img: "/images/service-2.jpg",
        icon: "/images/type-img2.png",
        link: "http://localhost/wordpress/therapy/family-counseling/",
        title: "Family Counseling",
        description: "Therapy sessions designed to improve communication and resolve conflicts in relationships.",
    },
    {
        img: "/images/service-3.jpg",
        icon: "/images/type-img3.png",
        link: "http://localhost/wordpress/therapy/anxiety-disorder/",
        title: "Anxiety Disorder",
        description: "Sessions that involve family members to improve dynamics and resolve issues within the family unit.",
    },
    {
        img: "/images/service-4.jpg",

        icon: "/images/type-img4.png",
        link: "http://localhost/wordpress/therapy/group-therapy/",
        title: "Personal Meeting",
        description: "Therapeutic sessions with a group of individuals facing similar challenges, guided by a therapist.",
    },
    ];



    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center mb-4">
    {/* Optional heading or buttons here */}
  </div>

  <div
    ref={containerRef}
    className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
  >
    {/* Scroll Left Button – visible only on md+ */}
    <button
      onClick={() => scroll('left')}
      className="hidden md:block text-[#046652] text-4xl px-2"
    >
      ‹
    </button>

    {cards.map((card, index) => (
      <div
        key={index}
        className="snap-start flex-shrink-0 w-[80%] sm:w-[300px] md:w-[320px] lg:w-[340px] flex justify-center"
      >
        <div className="bg-white rounded-2xl shadow-lg w-full relative">
          {/* Top Image */}
          <figure className="p-4">
            <img className="rounded-2xl w-full h-48 object-cover" src={card.img} alt="" />
          </figure>

          {/* Icon Circle - overlaps */}
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 translate-y-[20%] bg-[#ef7e63] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg">
            <img src={card.icon} alt="" className="w-10 h-10" />
          </div>

          {/* Card Content */}
          <div className="text-center px-4 pt-12 pb-6">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">{card.title}</h5>
            <p className="mb-3 text-sm text-gray-600">{card.description}</p>
            <a
              href={card.link}
              className="inline-flex items-center text-sm font-medium text-[#046652] hover:underline"
            >
              Read more
              <svg
                className="ms-2 w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 14 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ))}

    {/* Scroll Right Button – visible only on md+ */}
    <button
      onClick={() => scroll('right')}
      className="hidden md:block text-[#046652] text-4xl px-2"
    >
      ›
    </button>
  </div>
</div>

    );
}
