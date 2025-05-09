import React, { useState } from 'react'
import product1 from '../../assets/broughtpageOrange/product1.jpg'
import product2 from '../../assets/broughtpageOrange/product2.jpg'
import product3 from '../../assets/broughtpageOrange/product3.jpg'
import product4 from '../../assets/broughtpageOrange/product4.jpg'

import extraproduct1 from '../../assets/broughtpageOrange/extraproduct1.jpg'
import extraproduct2 from '../../assets/broughtpageOrange/extraproduct2.jpg'
import extraproduct3 from '../../assets/broughtpageOrange/extraproduct3.jpg'
import extraproduct4 from '../../assets/broughtpageOrange/extraproduct4.jpg'

import { FaCcDiscover, FaCcMastercard, FaCcPaypal, FaCcVisa, FaCheckCircle, FaStar } from 'react-icons/fa'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'
import { SiAmericanexpress } from 'react-icons/si'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import { Link } from 'react-router-dom'
import Footer from '../../components/Home/Footer/Footer'

const BroughtPage = () => {
  const images = [product1, product2, product3, product4];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="md:py-[150px] py-[30px] md:flex items-center">
            <div className="px-4 md:w-1/2">
              <div className="flex gap-6 items-center">
                {/* Thumbnail Images */}
                <div className="flex flex-col gap-4">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className={`md:w-[100px] md:h-[100px] w-[140px] object-cover border rounded-md cursor-pointer ${selectedImage == img ? "border-black" : "border-gray-300"
                        }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>

                {/* Main Image Display */}
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="w-[450px] h-[450px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="text-left md:w-1/2 flex flex-col gap-y-[15px] md:px-0 px-[20px]">
              <div className="flex items-center justify-between">
                <p className="font-cormot md:text-[30px] text-[25px]">Cool Blue Perfume</p>
                <div className="flex gap-x-[20px] ">
                  <FaCircleArrowLeft className="text-[25px] cursor-pointer hover:text-[#878787] transition duration-300" />
                  <FaCircleArrowRight className="text-[25px] cursor-pointer hover:text-[#878787] transition duration-300" />
                </div>
              </div>
              <div className="flex flex-col gap-y-[15px]">
                <p className="text-[25px] text-[#5B5B5B] font-bold font-urbanist">$225.00 <span className="text-[15px] text-[#818181]">+Free Shipping</span></p>
                <p className="font-urbanist text-[15px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab fuga ea at quibusdam, temporibus soluta ipsum omnis eaque distinctio!</p>
              </div>

              <div className="flex text-[15px] gap-x-[20px] items-center">
                <div className=" flex items-center">
                  <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">-</p>
                  <p className="border px-[15px]">1</p>
                  <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">+</p>
                </div>

                <div className="w-[400px] bg-black text-white text-center py-[4px] cursor-pointer hover:bg-transparent hover:text-black font-bold transition duration-500">
                  <p>Add to Cart</p>
                </div>
              </div>

              <div className="mx-auto mt-[15px] border w-full py-[20px] relative text-[#000]">
                <p className="absolute top-[-13px] md:left-[31%] left-[17%] px-[25px] font-urbanist bg-white">Guaranteed Safe Checkout</p>
                <div className="flex items-center justify-center gap-x-[35px] text-[55px] md:px-0 px-[20px]">
                  <FaCcVisa />
                  <FaCcMastercard />
                  <SiAmericanexpress />
                  <FaCcDiscover />
                  <FaCcPaypal />
                </div>
              </div>

              <div className="text-[#000]">
                <p className="text-[15px] flex items-center gap-x-[15px]">
                  <FaCheckCircle />
                  No-Risk Money Back Guarantee!
                </p>

                <p className="text-[15px] flex items-center gap-x-[15px]">
                  <FaCheckCircle />
                  No Hassle Refunds
                </p>

                <p className="text-[15px] flex items-center gap-x-[15px]">
                  <FaCheckCircle />
                  Secure Payments
                </p>
              </div>
            </div>
          </div>

          <div className='md:px-0 px-[20px]'>
            <ReviewForm />
          </div>

          <div className='md:px-0 px-[20px]'>
            <h2 className="font-cormot text-[35px] py-[20px]">Related Products</h2>
            <div className="md:flex justify-between gap-x-[30px] pb-[80px]">
              <div className="md:my-0 my-[50px]">
                <Link to="/broughtproduct" className="product1 cursor-pointer">
                  <img src={extraproduct1} alt="" className="" />
                  <div className='pt-[15px]'>
                    <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                    <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Parfume</p>
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

              <div className="md:my-0 my-[50px]">
                <Link to="/broughtproduct" className="product1 cursor-pointer">
                  <img src={extraproduct2} alt="" />
                  <div className='pt-[15px]'>
                    <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                    <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Parfume</p>
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

              <div className="md:my-0 my-[50px]">
                <Link to="/broughtproduct" className="product1 cursor-pointer">
                  <img src={extraproduct3} alt="" />
                  <div className='pt-[15px]'>
                    <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                    <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Parfume</p>
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

              <div className="md:my-0 my-[50px]">
                <Link to="/broughtproduct" className="product1 cursor-pointer">
                  <img src={extraproduct4} alt="" />
                  <div className='pt-[15px]'>
                    <p className='text-[#9D9D9D] text-[15px]'>Exclusive</p>
                    <p className='font-cormot text-black text-[25px] font-semibold'>Cool Blue Parfume</p>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BroughtPage