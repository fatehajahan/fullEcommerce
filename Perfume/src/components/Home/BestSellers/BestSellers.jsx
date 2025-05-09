import React from 'react'
import product1 from '../../../assets/homepage/product1.jpg'
import product2 from '../../../assets/homepage/product2.jpg'
import product3 from '../../../assets/homepage/product3.jpg'
import product4 from '../../../assets/homepage/product4.jpg'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BestSellers = () => {
    return (
        <div className='md:py-[80px]'>
            <div className="container">
                <div>
                    <p className="font-cormot text-base uppercase tracking-wide text-black pt-[50px] text-center font-medium">
                        Check out our
                    </p>
                    <h3 className='font-cormot md:text-[68px] text-[30px] text-center py-[20px]'>Best Sellers</h3>
                </div>

                <div className='md:flex justify-between items-center gap-x-[20px] mx-auto max-w-[1320px] px-4'>
                    <div className='md:my-0 my-[30px]'>
                        <Link to="/bluePerfume" className="product1 cursor-pointer">
                            <img src={product1} alt="" className='w-[534px] md:w-auto'/>
                            <div className='pt-[15px]'>
                                <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                                <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Perfume</p>
                                <div className='flex gap-x-[10px]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='pt-[10px] text-[20px] font-urbanist font-bold'>
                                    $220
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className='md:my-0 my-[50px]'>
                        <Link to="/orangePerfume" className="product2 cursor-pointer relative">
                            <div className='absolute top-[30px] left-[30px] bg-white py-[5px] w-[50px] text-center rounded-4xl'><p className='font-urbanist font-bold'>Sale!!</p></div>
                            <img src={product2} alt="" className='w-[534px] md:w-auto'/>
                            <div className='pt-[15px]'>
                                <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                                <p className='font-cormot text-black text-[25px] font-semibold'>Bright Light by Yana</p>
                                <div className='flex gap-x-[10px]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='pt-[10px] text-[20px] font-urbanist font-bold'>
                                    $425
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="product3 cursor-pointer md:my-0 my-[50px]">
                        <img src={product3} alt="" className='w-[534px] md:w-auto'/>
                        <div className='pt-[15px]'>
                            <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                            <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Perfume</p>
                            <div className='flex gap-x-[10px]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='flex items-center gap-x-[15px]'>
                                <s className='pt-[10px] text-[20px] font-urbanist line-through font-bold text-gray-400'>
                                    $225
                                </s>
                                <p className='pt-[10px] text-[20px] font-urbanist font-bold text-black'>
                                    $185
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="product4 cursor-pointer md:my-0 my-[50px]">
                        <img src={product4} alt="" className='w-[534px] md:w-auto'/>
                        <div className='pt-[15px]'>
                            <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                            <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Perfume</p>
                            <div className='flex gap-x-[10px]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className='pt-[10px] text-[20px] font-urbanist font-bold'>
                                $300
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers