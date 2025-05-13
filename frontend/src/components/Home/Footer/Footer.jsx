import React from 'react'
import logo from '../../../assets/homepage/logo2.png'

const Footer = () => {
    return (
        <div className='bg-black pt-[80px] text-white select-none md:px-0 px-[20px]'>
            <div className="container">
                <div className='md:flex'>
                    <div className="left md:w-1/3">
                        <img src={logo} alt="" className=''/>
                        <p className='md:w-[280px] text-[14px] font-urbanist pt-[43px]  md:text-left text-justify'>Lorem ipsum dolor sit amet, conseoriosam, dolore a, earum qui excepturi, Dolorem officiis natus nemo nam beatae incidunt mollitia!</p>
                    </div>

                    <div className="left md:w-1/3 md:py-0 py-[30px] ">
                        <p className='font-cormot font-bold md:text-base text-[20px]'>customer care</p>
                        <div className='font-cormot '>
                            <p className='md:w-[280px] text-[14px] font-urbanist md:pt-[43px] pt-[15px]'>Need help? We're always here for you, and ready to help.</p>
                            <div className='pt-[28px]'>
                                <p>Email:info@gmail.com</p>
                                <p>Phone:+1234567890</p>
                                <p>Address:123 Fifth Aveneu, New Yourk, NY 10160</p>
                            </div>
                        </div>
                    </div>

                    <div className="left md:w-1/3 md:py-0 py-[30px]">
                        <p className='font-cormot font-bold md:text-base text-[20px]'>follow us</p>
                        <div className='md:pt-[43px] pt-[20px] font-cormot'>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>YouTube</p>
                            <p>Pinterest</p>
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div className="left md:w-1/3 md:py-0 py-[30px]">
                        <p className='font-cormot font-bold md:text-base text-[20px]'>useful links</p>
                        <div className='md:pt-[43px] pt-[20px] font-cormot'>
                            <p>Returns & Exchange</p>
                            <p>FAQ</p>
                            <p>Shipping Information</p>
                            <p>Affiliates</p>
                            <p>Wholesale</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[30px] text-center md:border border-[#ffffff8a] mt-[40px] font-cormot md:text-base text-[12px]'>
                <p>Copyright © 2025 Innesa Perfumes | Powered by Innesa Perfumes</p>
            </div>
        </div>
    )
}

export default Footer