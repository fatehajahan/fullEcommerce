import React from 'react'
import discovery1 from '../../../assets/homepage/discovery1.jpg'
import discovery2 from '../../../assets/homepage/discovery2.jpg'
import discovery3 from '../../../assets/homepage/discovery3.jpg'

const Discovery = () => {
    return (
        <div className='md:pb-[30px] md:py-0 py-[50px] md:mx-0 mx-[20px]'>
            <div className="container">
                <div className='md:flex justify-between gap-x-[20px]'>
                    <div className=''>
                        <div className='md:flex gap-x-[20px]'>
                            <img src={discovery1} alt="" className='md:w-[300px] w-[317px] h-[260px] object-cover md:mx-0 mx-auto' />
                            <img src={discovery2} alt="" className='md:w-[300px] w-[317px] h-[260px] object-cover md:mx-0 mx-auto' />
                        </div>
                        <div className="text-center mx-auto md:pt-[50px] md:py-0 py-[50px]">
                            <div className="w-12 h-0.5 bg-black mx-auto mb-4"></div>
                            <p className="text-lg text-gray-800 font-cormot text-[35px] md:w-[400px] mx-auto">
                                the new fragrance that will surprise you every day
                            </p>
                            <button className="font-cormot text-white bg-black py-2 px-6 md:w-[190px] text-center cursor-pointer hover:bg-transparent hover:text-black border border-black transition duration-500 font-bold mt-6 tracking-wide">
                                DISCOVER
                            </button>
                        </div>
                    </div>

                    <div>
                        <img src={discovery3} alt="" className='w-[680px] h-[600px] object-cover md:block hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discovery