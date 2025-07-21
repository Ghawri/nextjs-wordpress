
'use client';


import Navbar from "@/components/navbar";
import CardCarousel from "@/components/cardcarousel";
import ProjectCards from "@/components/projectCards";
import CounterCard from "@/components/counter";
import HowItWork from "@/components/howitwork";
import TeamMembers from "@/components/teammembers";
import Articles from "@/components/articles";
import { useState } from "react";
import { fetchimage } from '@/utiles/fetchimage';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Testimonials from "@/components/Testimonials";

import Aboutus from "@/components/aboutus";
import SocialIcons from "@/components/socialicons";
import Footer from "@/components/footer";
import Loading from "./loading";

gsap.registerPlugin(ScrollTrigger);


// data coming from medunit
export default function Home() {



  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const getData = async () => {
      const data = await fetchimage(3792);
      
      console.log(data)
      if (data) setSections(data);

      setLoading(false)
    };
    getData();
  }, []);




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
      title: sections[5]?.text?.[0],
      icon: sections[5]?.images?.[0],
    },
    {
      target: 1250,
      title: sections[5]?.text?.[1],
      icon: sections[5]?.images?.[1],
    },
    {
      target: 3550,
      title: sections[5]?.text?.[2],
      icon: sections[5]?.images?.[2],
    },
    {
      target: 2350,
      title: sections[5]?.text?.[3],
      icon: sections[5]?.images?.[3],
    },
  ];


 if(loading) return <Loading/>
  return (


    <div>




     



      {/* Social Media Icons – Hide on small, show on md+ */}

      <SocialIcons />


      <div className={`top-main tinted-bg`} style={{ backgroundImage: `url(/images/Home-01-bg.jpg)` }}>
        <Navbar />




        {/* Main Hero Section */}
        <div className="relative z-0  max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between py-12 min-h-[90vh] gap-0 md:gap-10">


          {/* Text Section */}
          <section className="text-section text-white w-full md:max-w-xl flex flex-col space-y-5 text-center md:text-left -mt-12 sm:-mt-20 md:mt-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm font-medium">
              <div className="h-px w-8 bg-white opacity-60"></div>
              <span>{sections[0]?.text?.[0]}</span>
            </div>

            <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              {sections[0]?.text?.[1]}
            </h1>

            <p className="text-sm opacity-90">
              {sections[0]?.text?.[2]}
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="https://designingmedia.com/medunit/contact-us/" className="inline-block bg-[#ef7e63] px-6 py-3 rounded-md transition-transform duration-400 hover:-translate-y-2 text-white font-semibold hover:bg-[#d35e3c] transition duration-300">
                {sections[0]?.text?.[3]}
              </a>
              <a
                href="https://designingmedia.com/medunit/services/"
                className="inline-block bg-white text-[#046652] px-6 py-3 rounded-md transition-transform duration-400 hover:-translate-y-2 font-semibold hover:bg-[#d7e7e4] transition duration-300"
              >
                {sections[0]?.text?.[4]}
              </a>

            </div>
          </section>


          {/* Image Section */}

          <div className="hidden md:flex relative image-section w-[230vh] flex-col items-center space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:items-start">
            {/* Main Center Image – absolute only on md+ */}
            <div className="relative flex flex-col  gap-2">

              <div className="white-box w-[10vh] h-[10vh] rounded-2xl self-end bg-white"></div>


              <div className="image "> <img
                src={sections[0]?.images?.[5]}
                alt="Male therapist talking to patient"
                className="object-cover rounded-3xl w-full h-full"
                onError={(e) => (e.target.style.display = 'none')}
              /> </div>


              <div className="orange-box w-[10vh] h-[10vh] rounded-2xl self-start bg-[#ef7e63]"></div>


            </div>

            {/* Side Images */}
            <div className="flex flex-col space-y-6">
              <div className="w-[200vh] h-[220vh] sm:w-[260px] sm:h-[260px] rounded-3xl overflow-hidden drop-shadow-lg border border-white border-opacity-10">
                <img
                  src={sections[0]?.images?.[7]}
                  alt="Therapist and patient"
                  className="object-cover w-full h-full"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div className="w-[200vh] h-[240px] sm:w-[300px] sm:h-[280px] rounded-3xl overflow-hidden drop-shadow-lg border border-white border-opacity-10">
                <img
                  src={sections[0]?.images?.[8]}
                  alt="Older couple therapy"
                  className="object-cover w-full h-full"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            </div>

          </div>

        </div>
      </div>






      {/* Services Section */}

      <section className="bg-[#FBF7F3] pt-12 pb-16 sm:pt-16 sm:pb-20">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[#ef7e63] text-base sm:text-lg font-semibold mb-2">
              {sections[1]?.text?.[0]}
            </h2>
            <h2
              ref={headingRef}
              className=" animate-heading text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-gray-800 leading-snug"
            >
              {sections[1]?.text?.[1]}
            </h2>
          </div>

          {/* Responsive Carousel Component */}
          <div className="relative">
            <CardCarousel />
          </div>
        </div>
      </section>




      {/* about section placed here */}


      <Aboutus sections={sections} />





      {/* Book with us section */}

      <div className="book-with-us flex flex-col lg:flex-row w-full pt-10  h-[40vh] min-h-[50vh] lg:mt-10   ">
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
              <h2 className="text-white font-semibold text-lg md:text-xl"> {sections[3]?.text?.[0]}</h2>
              <h2 className="text-white text-3xl md:text-4xl font-sans font-bold mt-2">
                {sections[3]?.text?.[1]}
              </h2>
              <p className="text-white mt-4 text-sm md:text-base leading-relaxed">
                {sections[3]?.text?.[2]}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 h-[250px] lg:h-auto">
          <img
            src={sections[3]?.images?.[0]}
            alt="Book with us background"
            className="object-cover w-full h-full"
          />
        </div>
      </div>




      {/* latest projects section */}


      <div className="latest-projects bg-[#FBF7F3] pt-[25vh]  px-4 py-10 lg:py-24">

        <div ref={headingRef} className="max-w-screen-xl bg-[#FBF7F3] mx-auto text-center">
          <h2 className="text-[#ef7e63] font-semibold text-lg md:text-xl">  {sections[4]?.text?.[0]}</h2>
          <h2 className=" animate-heading text-[28px] md:text-[36px] lg:text-[50px] font-sans font-bold text-gray-800 mb-8">
            {sections[4]?.text?.[1]}
          </h2>

          <ProjectCards />
        </div>
      </div>



      {/* counter number section */}




      <div className="tinted-counter  bg-cover bg-center ]"
style={{ backgroundImage: `url(/images/bg-image.jpg)` }}

      >
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

      <HowItWork sections={sections} />





      <div className="team-members bg-[#FBF7F3] py-20 px-4">
        <div className="text-center mb-10">
          <h2 className="text-[#ef7e63] font-semibold text-base sm:text-lg">{sections[7]?.text?.[0]}</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-800 mt-2">
            {sections[7]?.text?.[1]}
          </h2>
        </div>

        {/* Render Team Members */}
        <TeamMembers />
      </div>


      {/* Testimonials */}



      <section className="Testimonials">

        <Testimonials sections={sections} />

      </section>


      {/* articles section */}


      <section className="Articles-Tips">
        <div className="latest-projects bg-[#FBF7F3] mt-[30vh] py-16 px-4 lg:py-24">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-[#ef7e63] font-semibold text-lg md:text-xl">{sections[9]?.text?.[0]}</h2>
            <h2
              ref={headingRef}
              className="animate-heading text-[28px] md:text-[36px] lg:text-[50px] font-sans font-bold text-gray-800 mb-8"
            >
              {sections[9]?.text?.[1]}
            </h2>
            <Articles />
          </div>
        </div>


      </section>


      {/* footer section */}

      <Footer />

    </div >
  );
}
