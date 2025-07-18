import React from 'react'

const Footer = () => {
  return (
   <div className="footer relative bg-[#156C5F]">

        <div className="subscribe-letter absolute left-0 right-0 translate-y-[-7vh] flex justify-center z-[1] px-4">
          <div className="content flex flex-col md:flex-row bg-[#ef7e63] p-6 md:p-10 w-full max-w-6xl justify-between items-center rounded-3xl gap-4">

            <div className="heading text-white font-bold text-[24px] md:text-[30px] text-center md:text-left">
              <h2>Subscribe To Our <br /> Newsletter</h2>
            </div>

            <div className="input-field w-full md:w-auto">
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className="bg-[#ef7e63] border border-white text-white text-sm rounded-lg w-full md:w-[300px] h-[48px] p-3"
                placeholder="Your Email Address"
              />
            </div>

            <div className="button w-full md:w-auto">
              <button className="bg-white text-black w-full md:w-auto px-5 py-3 rounded-xl">Sign Up</button>
            </div>

          </div>
        </div>


        <div className="lower-footer flex flex-col md:flex-row items-center justify-center w-full bg-[#156C5F] relative  py-12">
          <div className="text-content flex flex-col md:flex-row flex-wrap gap-y-10 md:gap-x-8 max-w-7xl mt-[20vh] w-full justify-between">

            {/* Box 1 */}
            <div className="box1 flex flex-col gap-6 md:w-[22%]">
              <div className="logo">
                <img src="/images/header-logo.png" alt="Logo" className="w-[120px]" />
              </div>
              <div className="discription text-white text-sm leading-relaxed">
                <h2>
                  Deleniti aeue corrupti quos dolores quas <br />
                  tias excepturi sint occaecati rupiditate non <br />
                  similique sunt incidunt…
                </h2>
              </div>
              <div className="social-icons flex flex-row gap-4 text-white">
                {/* Icons */}
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
            </div>

            {/* Box 2 */}
            <div className="box2 flex flex-col gap-4 md:w-[18%]">
              <h2 className="text-white text-lg font-semibold">About Us</h2>
              <ul className="space-y-2 text-white text-sm">
                {['Services', 'Pricing', 'Blog', 'About', 'Contact Us'].map((item, index) => (
                  <li key={index} className="group flex items-center gap-2 cursor-pointer">
                    <span className="font-bold group-hover:opacity-60">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3 */}
            <div className="box3 flex flex-col gap-4 md:w-[20%]">
              <h2 className="text-white text-lg font-semibold">Our Services</h2>
              <ul className="space-y-2 text-white text-sm">
                {['Couple Therapy', 'Family Counseling', 'Anxiety Disorder', 'Personal Meeting', 'Group Therapy'].map((item, index) => (
                  <li key={index} className="group flex items-center gap-2 cursor-pointer">
                    <span className="font-bold group-hover:opacity-60">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4 */}
            <div className="box4 flex flex-col gap-4 md:w-[30%]">
              <h2 className="text-white text-lg font-semibold">Contact Info</h2>

              <div className="number flex items-start gap-2 text-white text-sm">
                {/* <svg className="w-5 h-5 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.427 14.768L17.2 13.542..." /></svg> */}
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                </svg>

                <span>+91 1234526702</span>
              </div>

              <div className="mail flex items-start gap-2 text-white text-sm">
                {/* <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg> */}
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd" />
                  <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd" />
                </svg>

                <span>info@medunit.com</span>
              </div>

              <div className="address flex items-start gap-2 text-white text-sm">
                {/* <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg> */}
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                </svg>


                <span>9th floor, Bhutani Alphathum<br />Sector 90, Noida, Uttar Pradesh</span>
              </div>
            </div>

          </div>

          <div className="hidden md:block absolute right-0 bottom-0 opacity-100">
            <img className="w-28 md:w-auto" src="/images/Book-with-us-bg-icon.png" alt="Decor" />
          </div>

        </div>


        <div className="w-full bg-[#156C5F] px-4 py-6">
          <hr className="border-[#ffffff80] mb-4" />
          <div className="text-white text-center">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl">
              © Medunit 2023. All rights reserved.
            </h2>
          </div>
        </div>



      </div>

  )
}

export default Footer