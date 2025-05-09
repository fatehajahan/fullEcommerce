import React from 'react'
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div className='bg-banner bg-cover bg-no-repeat bg-center md:pt-[100px] md:pb-[80px] h-screen flex items-center md:justify-center md:bg-fixed'>
                <div className="container">
                    <p className='font-cormot font-bold text-[16px] md:text-left text-center'>Member's days</p>
                    <h1 className='font-cormot md:text-left text-center md:text-[88px] text-[30px] md:w-[670px] uppercase md:leading-[123.2px] animate__animated animate__fadeInLeft py-[50px]'>Your exclusive sitewide offer awaits</h1>
                    <div className='font-cormot text-white bg-black py-2 px-6 w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-black border border-black transition duration-500 font-bold mt-6 tracking-wide md:mx-0 mx-auto'>SIGNUP NOW</div>
                </div>
            </div>
        </div>
    )
}

export default Banner