import React from 'react';
import { useState } from "react";

const TeamMembers = () => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="team-member flex flex-wrap justify-center gap-10 mt-20 px-4">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center group relative w-full sm:w-[45%] md:w-[22%] overflow-hidden"
          onClick={() => toggleOverlay(index)} // tap to toggle on mobile
        >
          {/* Image */}
          <div className="w-full h-auto">
            <img
              src={
                [
                  "/images/doctor-img3.jpg",
                  "/images/home-03-team-img.jpg",
                  "/images/team-home-03.jpg",
                  "/images/doctor-img3.jpg",
                ][index]
              }
              alt={`Member ${index + 1}`}
              className="rounded-2xl shadow w-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div
            className={`absolute top-0 left-0 h-[35vh] w-full bg-white pt-4 px-4 rounded-2xl shadow z-10
              transition-all duration-700 ease-in-out
              ${
                activeIndex === index
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              }`}
          >
            <h2 className="text-base font-semibold text-gray-800">
              Nuis aute irure dolor reprehenderit
            </h2>
            <div className="button mt-6 p-2 flex justify-center">
              <button
                type="button"
                className="text-white bg-[#257568] h-12 w-40 hover:bg-[#1e5d53] focus:ring-4 
                focus:ring-[#257568] font-medium rounded-lg text-sm px-5 
                flex items-center justify-center"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="name text-[18px] mt-6 z-20 font-semibold">Member {index + 1}</div>
          <div className="role text-sm z-20 text-gray-600">Role {index + 1}</div>
        </div>
      ))}
    </div>
  );
}
export default TeamMembers