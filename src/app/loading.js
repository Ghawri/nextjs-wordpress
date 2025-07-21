import React from 'react';

const Loading = () => {
    return (
        <div className="fixed f inset-0 z-50 bg-[#156C5F] bg-opacity-80 flex flex-col items-center justify-center">
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
            <div><h2 className='text-white font-semibold text-2xl'>Welcome to Medunit...</h2></div>
        </div>
    );
};

export default Loading;
