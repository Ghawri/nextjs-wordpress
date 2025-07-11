import React from 'react'

const HowItWork = () => {
    return (
        // <div className='how-it-work '>

        //     <div className='container flex flex-row mx-auto mt-40 mb-40  items-center justify-center '>
        //         <div className='image mr-20 '>
        //             <img src='http://localhost/wordpress/wp-content/uploads/2023/12/How-it-work-img.png' className='rounded-3xl'/>
        //         </div>
        //         <div className='text-area h-full self-start'>

        //             <div className='title text-[#ef7e63] font-semibold '> <h2>how it works</h2></div>
        //             <div className='sub-title text-[40px] mb-5'><h2>Professional Psychology <br/> Therapy You Can Choose</h2></div>
                  
        //             <div className='item1 flex flex-row mb-10'>
        //                 <div className='item1-icon flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-20 h-20'>
        //                     <img src='http://localhost/wordpress/wp-content/uploads/2023/12/how-it-works-icon-1.png' className=' w-10 h-10 object-contain' />
        //                 </div>
        //                 <div className='item1-text ml-4'>
        //                     <h2 className='text-[24px] '>Talk to Us First</h2>
        //                     <h3>Nuis aute irure dolor reprehenderit in <br/>volutae velit esse fugiat.</h3>
        //                 </div>

        //             </div>

        //             <div className='item2 flex flex-row mb-10'>
        //                 <div className='item2-icon flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-20 h-20'>
        //                     <img src='http://localhost/wordpress/wp-content/uploads/2023/12/how-it-works-icon-2.png' className=' w-10 h-10 object-contain'/> 
        //                 </div>
        //                 <div className='item2-text  ml-4'>
        //                     <h2  className='text-[24px] '>Book an Appointment</h2>
        //                     <h3>Blandit fauce bus perce viverra sem rutrum <br/>aeu vulputate came.</h3>
        //                 </div>
        //             </div>


        //             <div className='item3 flex flex-row mb-7'>
        //                 <div className='item3-icon flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-20 h-20'>
        //                     <img src='http://localhost/wordpress/wp-content/uploads/2023/12/how-it-works-icon-3.png' className=' w-10 h-10 object-contain'/>
        //                 </div>
        //                 <div className='item3-text  ml-4'>
        //                     <h2  className='text-[24px] '>Come Sit With Us</h2>
        //                     <h3>Maiores alias consequatur aut perferendis dolor reus<br/> asperiores repellat.</h3>
        //                 </div>
        //             </div>

        //             <div className='button self-end mt-20 '>
        //                 <button type="button" className="text-white bg-[#257568] h-15 w-50 hover:bg-[#257568] focus:ring-4 
        //                 focus:ring-[#257568] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#257568] 
        //                 dark:hover:bg-[#257568] focus:outline-none dark:focus:ring-[#257568]">Book Appointment</button>
        //             </div>


        //         </div>


        //     </div>

        // </div>

        <div className="how-it-work">
  <div className="container flex flex-col md:flex-row mx-auto mt-20 mb-20 px-4 md:px-0 items-center justify-center gap-10">
    
    {/* Image Section */}
    <div className="image w-full md:w-1/2 mb-6 md:mb-0">
      <img
        src="/images/How-it-work-img.png"
        alt="How it works"
        className="rounded-3xl w-full max-w-md mx-auto"
      />
    </div>

    {/* Text Section */}
    <div className="text-area w-full md:w-1/2 flex flex-col h-full self-start space-y-6">
      <div className="title text-[#ef7e63] font-semibold uppercase text-center md:text-left">
        <h2>How it works</h2>
      </div>

      <div className="sub-title text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left mb-4 leading-snug">
        <h2>Professional Psychology<br />Therapy You Can Choose</h2>
      </div>

      {/* Step 1 */}
      <div className="item1 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src="/images/how-it-works-icon-1.png"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            alt="Step 1"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">Talk to Us First</h2>
          <p className="text-sm sm:text-base">Nuis aute irure dolor reprehenderit in voluptate velit esse fugiat.</p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="item2 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src="/images/how-it-works-icon-2.png"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            alt="Step 2"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">Book an Appointment</h2>
          <p className="text-sm sm:text-base">Blandit faucibus perce viverra sem rutrum aeu vulputate came.</p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="item3 flex flex-row items-start">
        <div className="flex items-center justify-center border-2 border-dashed border-orange-500 rounded-full w-16 h-16 sm:w-20 sm:h-20">
          <img
            src="/images/how-it-works-icon-3.png"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            alt="Step 3"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold">Come Sit With Us</h2>
          <p className="text-sm sm:text-base">Maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center md:text-left">
        <button
          type="button"
          className="text-white bg-[#257568] hover:bg-[#1f5e55] focus:ring-4 focus:ring-[#257568] font-medium rounded-lg text-sm px-6 py-3 transition duration-300"
        >
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</div>

    )
}

export default HowItWork