import React from 'react'

const Aboutus = ({sections}) => {
  return (
    
      <div className="about-us flex flex-col lg:flex-row items-center justify-center px-4 py-10 space-y-10 lg:space-y-0 lg:space-x-10 max-w-7xl mx-auto mt-[7vh]">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Main Image */}
          <figure>
            <img
              src={sections[2]?.images?.[0]}
              alt="About Us"
              className="rounded-3xl w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </figure>

          {/* Floating Image */}
          <div className="absolute bottom-[-20px] left-[-20px]  w-32 md:w-40 lg:w-48">
            <img
              src={sections[2]?.images?.[1]}
              alt="About Us 2"
              className="rounded-xl border-7 border-white shadow-lg"
            />
          </div>

          {/* Play Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[34vh] -translate-y-[-20vh] w-16 md:w-20 lg:w-24">
            <img
              src={sections[2]?.images?.[2]}
              alt="Play Icon"
              className="rounded-full border border-white shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-area max-w-xl text-center lg:text-left">
          <p className="text-[#ef7e63] font-semibold text-lg"> {sections[2]?.text?.[0]}</p>
          <h2 className="text-3xl md:text-4xl lg:text-[47px] font-bold text-gray-800 mt-2">
          {sections[2]?.text?.[1]}
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 mt-4">
           {sections[2]?.text?.[2]}
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
            className="inline-block mt-6 px-6 py-2 bg-[#ef7e63] transition-transform duration-400 hover:-translate-y-2 text-white font-semibold rounded-lg shadow hover:bg-[#e96d54] transition duration-300"
          >
            {sections[2]?.text?.[3]}<br/>
            
          </a>
        </div>
      </div>
  )
}

export default Aboutus