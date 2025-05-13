import React from 'react'
import shop from '../../../assets/homepage/shop.png'

const ShopNow = () => {
    return (
        <div className='md:py-[100px] select-none'>
            <div className="container">
                <div className='bg-shop bg-cover bg-no-repeat bg-center md:h-screen flex justify-center md:bg-fixed relative'>
                    <div className="container py-[97px] md:text-left text-center z-40">
                        <p className='text-white text-[18px] font-cormot'>eau de toilette</p>
                        <p className='text-white md:text-[55px] text-[30px] md:w-[400px]  font-cormot'>PERFUME REFLECTIVE EDITION</p>
                        <p className='text-white md:w-[250px] text-[13px] font-urbanist'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        <button className="font-cormot text-black bg-white py-2 px-6 md:w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-white border border-white transition duration-500 font-bold mt-6 tracking-wide">
                            SHOP NOW
                        </button>
                    </div>
                    <img src={shop} alt="" className='w-[299px] absolute bottom-[-30px] md:flex justify-center hidden' />
                </div>
            </div>
        </div>
    )
}

export default ShopNow