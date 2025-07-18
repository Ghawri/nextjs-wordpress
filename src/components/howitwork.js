import React from 'react'


const HowItWork = ({posts,sections}) => {



    return (
       
        <div className="how-it-work">
  <div className="container flex flex-col md:flex-row mx-auto mt-20 mb-20 px-4 md:px-0 items-center justify-center gap-10">
    
    {/* Image Section */}
    <div className="image w-full md:w-1/2 mb-6 md:mb-0">
      <img
        src={sections[6]?.images?.[0]}
        alt="How it works"
        className="rounded-3xl  w-full max-w-md mx-auto"
      />
    </div>

    {/* Text Section */}
    <div className="text-area w-full md:w-1/2 flex flex-col h-full self-start space-y-6">
      <div className="title text-[#ef7e63] font-semibold uppercase text-center md:text-left">
        <h2>{sections[6]?.text?.[0]}</h2>
      </div>

      <div className="sub-title text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left mb-4 leading-snug">
        <h2>{sections[6]?.text?.[1]}</h2>
      </div>

      {/* Step 1 */}
      <div className="item1 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src={sections[6]?.images?.[1]}
            className="w-8 h-8 transition-transform duration-400 hover:-translate-y-2 sm:w-10 sm:h-10 object-contain"
            alt="Step 1"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">{sections[6]?.text?.[2]}</h2>
          <p className="text-sm sm:text-base">{sections[6]?.text?.[3]}</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="item2 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src={sections[6]?.images?.[2]}
            className="w-8 h-8 transition-transform duration-400 hover:-translate-y-2 sm:w-10 sm:h-10 object-contain"
            alt="Step 2"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">{sections[6]?.text?.[4]}</h2>
          <p className="text-sm sm:text-base">{sections[6]?.text?.[5]}</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="item3 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src={sections[6]?.images?.[3]}
            className="w-8 h-8 transition-transform duration-400 hover:-translate-y-2 sm:w-10 sm:h-10 object-contain"
            alt="Step 3"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">{sections[6]?.text?.[6]}</h2>
          <p className="text-sm sm:text-base">{sections[6]?.text?.[7]}</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center md:text-left">
        <button
          type="button"
          className="text-white bg-[#257568] hover:bg-[#1f5e55] transition-transform duration-400 hover:-translate-y-2 focus:ring-4 focus:ring-[#257568] font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
        >
          {sections[6]?.text?.[8]}
        </button>
      </div>
    </div>
  </div>
</div>

    )
}

export default HowItWork