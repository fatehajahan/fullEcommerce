import React from 'react'
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { FaSquarePinterest } from 'react-icons/fa6'

const Contact = () => {
    return (
        <div className='md:py-[100px] py-[60px]'>
            <div className="font-[Poppins] bg-white text-black">
                <div className="w-full mx-auto py-16 text-center">
                    <p className="uppercase text-sm tracking-widest">get in touch</p>
                    <h1 className="text-4xl font-semibold mt-2">Contact</h1>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 border-t border-gray-300 pt-8">
                    {/* Left Side */}
                    <div className="px-6 md:px-0">
                        <h2 className="text-lg font-semibold">CONTACT DETAILS</h2>
                        <p className="mt-4">P: +1 234 567 890</p>
                        <p>E: contact@info.com</p>
                        <p>A: 123 Fifth Avenue, New York, NY 10160</p>

                        <h2 className="text-lg font-semibold mt-6">FOLLOW US</h2>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="p-2 border rounded-full"><FaFacebook /></a>
                            <a href="#" className="p-2 border rounded-full"><FaInstagram /></a>
                            <a href="#" className="p-2 border rounded-full"><FaYoutube /></a>
                            <a href="#" className="p-2 border rounded-full"><FaSquarePinterest /></a>
                            <a href="#" className="p-2 border rounded-full"><FaTwitterSquare /></a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="px-6 md:px-0">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="First" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">&nbsp;</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Last" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Message <span className="text-red-500">*</span></label>
                                <textarea className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
                            </div>
                            <button className="bg-black text-white py-2 px-6 rounded-md cursor-pointer hover:bg-[#373737]">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact