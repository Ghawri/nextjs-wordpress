
'use client';

import Image from "next/image";
import Navbar from "@/components/navbar";
import CardCarousel from "@/components/cardcarousel";
import ProjectCards from "@/components/projectCards";
import CounterCard from "@/components/counter";
import HowItWork from "@/components/howitwork";
import TeamMembers from "@/components/teammembers";
import Articles from "@/components/articles";


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from "@/components/Testimonials";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {

  const headingRef = useRef(null);


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





  // counter icons
  const cards = [
    {
      target: 2150,
      title: "Psychologists",
      icon: "/images/Psycologist-icon.png",
    },
    {
      target: 1250,
      title: "Branches",
      icon: "/images/Branches-icon.png",
    },
    {
      target: 3550,
      title: "Patients",
      icon: "/images/Patients-icon.png",
    },
    {
      target: 2350,
      title: "Achievements",
      icon: "/images/Achievements-icon.png",
    },
  ];



  return (
    <div>
      <div className="top-main tinted-bg">
        <Navbar />

        {/* Social Media Icons – Hide on small, show on md+ */}
        <div className="social-icons hidden md:flex fixed top-1/3 left-4 z-10 flex-col text-white space-y-4">
          <button aria-label="facebook" className="focus:outline-none">
            {/* Facebook Icon */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </button>
          <button aria-label="twitter" className="focus:outline-none">
            {/* Twitter Icon */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 19c11 0 17-9.1 17-17 0-.2 0-.4 0-.6A12.1 12.1 0 0027 4.3..." />
            </svg>
          </button>
          <button aria-label="instagram" className="focus:outline-none">
            {/* Instagram Icon */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37a4 4 0 11-5.3-5.3" />
              <circle cx="17.5" cy="6.5" r="0.5" />
            </svg>
          </button>
        </div>

        {/* Main Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between py-12 min-h-[90vh] gap-0 md:gap-10">


          {/* Text Section */}
          <section className="text-section text-white w-full md:max-w-xl flex flex-col space-y-5 text-center md:text-left -mt-12 sm:-mt-20 md:mt-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm font-medium">
              <div className="h-px w-8 bg-white opacity-60"></div>
              <span>Perfect Solutions for Your Mind</span>
            </div>

            <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              We Will Help You to<br /> Understand & Solve<br /> The Problems
            </h1>

            <p className="text-sm opacity-90">
              Doidunt eget semper nec ruam sed hendrerit morbi aeu feliseao augue pellentesue veniam morbi acer.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
             <a href="https://designingmedia.com/medunit/contact-us/" className="inline-block bg-[#ef7e63] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#d35e3c] transition duration-300">
  Book Appointment
</a>
              <a
  href="https://designingmedia.com/medunit/services/"
  className="inline-block bg-white text-[#046652] px-6 py-3 rounded-md font-semibold hover:bg-[#d7e7e4] transition duration-300"
>
  Read More
</a>

            </div>
          </section>


          {/* Image Section */}

          <div className="hidden md:flex relative image-section w-full flex-col items-center space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:items-start">
            {/* Main Center Image – absolute only on md+ */}
            <div className="relative md:absolute md:top-1/2 md:left-[55%] md:translate-x-[-25%] md:translate-y-[-50%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden drop-shadow-xl border border-white border-opacity-20 bg-white mb-6 md:mb-0">
              <img
                src="/images/banner-image-1.jpg"
                alt="Male therapist talking to patient"
                className="object-cover w-full h-full"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>

            {/* Side Images */}
            <div className="flex flex-col space-y-6">
              <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-3xl overflow-hidden drop-shadow-lg border border-white border-opacity-10">
                <img
                  src="/images/banner-img-2.jpg"
                  alt="Therapist and patient"
                  className="object-cover w-full h-full"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div className="w-[260px] h-[240px] sm:w-[300px] sm:h-[280px] rounded-3xl overflow-hidden drop-shadow-lg border border-white border-opacity-10">
                <img
                  src="/images/banner-img-3.jpg"
                  alt="Older couple therapy"
                  className="object-cover w-full h-full"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            </div>

          </div>






        </div>

        {/* Decorative Squares - only visible on desktop */}
        <div className="pointer-events-none hidden md:block absolute top-32 right-60 w-20 h-20 bg-white rounded-lg opacity-80 drop-shadow-lg"></div>
        <div className="pointer-events-none hidden md:block absolute bottom-32 right-[150px] w-16 h-16 bg-[#ef7e63] rounded-lg drop-shadow-lg"></div>
      </div>


      <section className="bg-[#FBF7F3] pt-12 pb-16 sm:pt-16 sm:pb-20">
        {/* Services Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[#ef7e63] text-base sm:text-lg font-semibold mb-2">
              Services We Provide
            </h2>
            <h2
              ref={headingRef}
              className=" animate-heading text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-gray-800 leading-snug"
            >
              Professional Psychology Therapy Services <br className="hidden sm:block" />
              You Can Choose
            </h2>
          </div>

          {/* Responsive Carousel Component */}
          <div className="relative">
            <CardCarousel />
          </div>
        </div>
      </section>


      {/* about section placed here */}




      {/* <section className=" about-us flex flex-row items-center  mx-auto my-30">
        <div className="image flex justify-center items-center  ml-110 mr-0">
          <figure>
            <img src="http://localhost/wordpress/wp-content/uploads/2023/12/About-section-img.jpg" alt="About Us" className="rounded-3xl" />
          </figure>


        </div>
        <div className=" rounded-xl border border-white p-2 bg-white translate-x-[-150%] translate-y-[80%] mr-[-300px]">

          <figure>
            <img src="http://localhost/wordpress/wp-content/uploads/2023/12/About-section-img2.jpg" alt="About Us" className="rounded-xl" />
          </figure>
        </div>
        <div className=" rounded-full border border-white p-0 bg-white translate-x-[-570%] translate-y-[190%] mr-[-300px]">

          <figure>
            <img src="http://localhost/wordpress/wp-content/uploads/2023/12/play-icon.png" alt="About Us" className="rounded-full" />
          </figure>
        </div>

        <div className="text-area ml-49">
          <p className="subtitle text-[#ef7e63] font-semibold">About Us</p>
          <h2 className="text-[47px]">Solving Problems That<br /> are Beyond your Control</h2>
          <p className="description text-[20px] ">
            Quis nostrud exercitation ullamco laboris nisi aut aliquio <br /> modo consequat ruis aute irure dolor in <br />reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <br /><br />
          <ul className="features" aria-label="List of therapy services offered">
            <li>Psychodynamic Therapy</li>
            <li>Free Consultants</li>
            <li>Couple Problem Therapy</li>
            <li>Metal Satisfactions</li>
          </ul>
          <button className="read-more" type="button" href="https://designingmedia.com/medunit/about-us/">
            Read More
          </button>
        </div>

      </section> */}


      <section className="about-us flex flex-col lg:flex-row items-center justify-center px-4 py-10 space-y-10 lg:space-y-0 lg:space-x-10 max-w-7xl mx-auto mt-[7vh]">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Main Image */}
          <figure>
            <img
              src="/images/About-section-img.jpg"
              alt="About Us"
              className="rounded-3xl w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </figure>

          {/* Floating Image */}
          <div className="absolute bottom-[-20px] left-[-20px]  w-32 md:w-40 lg:w-48">
            <img
              src="/images/About-section-img2.jpg"
              alt="About Us 2"
              className="rounded-xl border-7 border-white shadow-lg"
            />
          </div>

          {/* Play Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[34vh] -translate-y-[-20vh] w-16 md:w-20 lg:w-24">
            <img
              src="/images/play-icon.png"
              alt="Play Icon"
              className="rounded-full border border-white shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-area max-w-xl text-center lg:text-left">
          <p className="text-[#ef7e63] font-semibold text-lg">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-[47px] font-bold text-gray-800 mt-2">
            Solving Problems That<br /> are Beyond your Control
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 mt-4">
            Quis nostrud exercitation ullamco laboris nisi aut aliquio <br className="hidden md:block" />modo consequat ruis aute irure dolor in <br className="hidden md:block" />reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <ul className="features grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8 pl-0 list-none">
            <li className="text-base text-gray-700 font-medium flex items-center gap-2 before:content-['✓'] before:text-[#ee8663] before:font-bold before:mr-2 before:text-[1.2rem] before:leading-none">
              Psychodynamic Therapy
            </li>
            <li className="text-base text-gray-700 font-medium flex items-center gap-2 before:content-['✓'] before:text-[#ee8663] before:font-bold before:mr-2 before:text-[1.2rem] before:leading-none">
              Free Consultants
            </li>
            <li className="text-base text-gray-700 font-medium flex items-center gap-2 before:content-['✓'] before:text-[#ee8663] before:font-bold before:mr-2 before:text-[1.2rem] before:leading-none">
              Couple Problem Therapy
            </li>
            <li className="text-base text-gray-700 font-medium flex items-center gap-2 before:content-['✓'] before:text-[#ee8663] before:font-bold before:mr-2 before:text-[1.2rem] before:leading-none">
              Mental Satisfactions
            </li>
          </ul>

          <a
            href="https://designingmedia.com/medunit/about-us/"
            className="inline-block mt-6 px-6 py-2 bg-[#ef7e63] text-white font-semibold rounded-lg shadow hover:bg-[#e96d54] transition duration-300"
          >
            Read More
          </a>
        </div>
      </section>





      {/* Book with us section */}
      {/* 
      <div className="book-with-us flex flex-row items-center my-[35vh] h-[500%] ">
        <div className="bg-[#EE8961] w-1/2  h-100 flex flex-row items-center">
          <img src="http://localhost/wordpress/wp-content/uploads/2023/12/Book-with-us-bg-icon.png" alt="Book with us icon" className="" />
          <div className="ml-10"><h2 className="text-center text-white font-semibold">Book With Us Now</h2>
            <h2 className="text-center text-white text-[40px]  font-sans text-gray-800">Get an Appointment</h2>
            <p className="text-white"> Molestiae non recusandae itaque earum rerum sarien.</p></div>



        </div>

        <div className=" w-1/2  flex justify-center h-100 ">
          <img src="http://localhost/wordpress/wp-content/uploads/2023/12/Book-with-us-bg-img.jpg" className="object-cover w-full h-full"></img>
        </div>

      </div> */}



      <div className="book-with-us flex flex-col lg:flex-row w-full  h-[40vh] min-h-[50vh] lg:mt-10   ">
  {/* Left Section - Orange Box */}
  <div className="w-full lg:w-1/2 bg-[#EE8961] flex items-center justify-center px-6 py-10">
    <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 max-w-xl">
      {/* Icon */}
      
      <img
        src="/images/Book-with-us-bg-icon.png"
        alt="Book with us icon"
        className="w-28 sm:w-36 md:w-44 object-contain"
      />

      {/* Text */}
      <div className="text-area">
        <h2 className="text-white font-semibold text-lg md:text-xl">Book With Us Now</h2>
        <h2 className="text-white text-3xl md:text-4xl font-sans font-bold mt-2">
          Get an Appointment
        </h2>
        <p className="text-white mt-4 text-sm md:text-base leading-relaxed">
          Molestiae non recusandae itaque earum rerum sarien.
        </p>
      </div>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="w-full lg:w-1/2 h-[250px] lg:h-auto">
    <img
      src="/images/Book-with-us-bg-img.jpg"
      alt="Book with us background"
      className="object-cover w-full h-full"
    />
  </div>
</div>




      {/* latest projects section */}
      {/* <div className="latest-projects bg-[#FBF7F3] h-[110vh]  pt-4 relative">
        <div className="text-center absolute top-0 left-0 mt-30 mb-20">

          <div >
            <h2 className="text-[#ef7e63] font-semibold">Latest Projects</h2>
            <h2 className="text-[50px] mb-4  font-sans text-gray-800">Explore Our Latest Case Studies</h2>
          </div>
          <ProjectCards />

        </div>

      </div> */}

       <div className="latest-projects bg-[#FBF7F3] mt-[25vh]  px-4 py-10 lg:py-24">

        <div ref={headingRef} className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[#ef7e63] font-semibold text-lg md:text-xl">Latest Projects</h2>
          <h2  className=" animate-heading text-[28px] md:text-[36px] lg:text-[50px] font-sans font-bold text-gray-800 mb-8">
            Explore Our Latest Case Studies
          </h2>

          <ProjectCards />
        </div>
      </div>



      {/* counter number section */}

      {/* <div className="tinted-counter bg-[url('http://localhost/wordpress/wp-content/uploads/2023/12/bg-image.jpg')] mt-[30vh] ">
        <div className="counters-web flex flex-row justify-evenly items-center w-full max-w-7xl mx-auto py-8">
          {cards.map((card, index) => (
            <CounterCard
              key={index}
              target={card.target}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>


      </div> */}


      <div className="tinted-counter bg-[url('/images/bg-image.jpg')] bg-cover bg-center ]">
  <div className="counters-web flex flex-col md:flex-row justify-evenly items-center w-full max-w-7xl mx-auto py-8 px-4 space-y-6 md:space-y-0">
    {cards.map((card, index) => (
      <CounterCard
        key={index}
        target={card.target}
        title={card.title}
        icon={card.icon}
      />
    ))}
  </div>
</div>




      {/* how it work section */}



      

        <HowItWork />


      

      {/* team members */}

      {/* <div className="team-members  bg-[#FBF7F3] h-[90vh] mt-30  ">
        <div className="text-center pt-30 mb-20">


          <h2 className="text-[#ef7e63] mx-auto font-semibold">Team Members</h2>
          <h2 className="text-[50px] mb-4  font-sans text-gray-800">Explore Our Latest Case Studies</h2>

        </div>
        <TeamMembers />



      </div> */}

      <div className="team-members bg-[#FBF7F3] py-20 px-4">
  <div className="text-center mb-10">
    <h2 className="text-[#ef7e63] font-semibold text-base sm:text-lg">Team Members</h2>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-800 mt-2">
     Our Proffesional Team
    </h2>
  </div>

  {/* Render Team Members */}
  <TeamMembers />
</div>


{/* Testimonials */}



<section className="Testimonials">

    <Testimonials/>

</section>



<section className="Articles-Tips">
   <div className="latest-projects bg-[#FBF7F3] mt-[30vh] py-16 px-4 lg:py-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[#ef7e63] font-semibold text-lg md:text-xl">Articles & Tips</h2>
          <h2
      ref={headingRef}
      className="animate-heading text-[28px] md:text-[36px] lg:text-[50px] font-sans font-bold text-gray-800 mb-8"
    >
      Latest News & Blogs
    </h2>
         <Articles/>
        </div>
      </div>


</section>











    </div >
  );
}
