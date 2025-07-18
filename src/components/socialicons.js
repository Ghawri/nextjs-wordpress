import React from 'react'

const SocialIcons = () => {
  return (
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

    
  )
}

export default SocialIcons