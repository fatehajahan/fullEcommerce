import React, { useState } from 'react';
import logo from '../../../assets/homepage/logo1.png';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

const Navbar = ({ setCartOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  const [profile, setProfile] = useState(false);

  const toggleMenu = (item) => {
    if (item === "profile") {
      setProfile((item) => !item);
      setDropdown(false);
    } else if (item === "dropdown") {
      setDropdown((item) => !item);
      setProfile(false);
    }
  };

  return (
    <div className='py-[20px] fixed bg-white top-0 left-0 w-full z-50'>
      <div className="container">
        <div className='flex justify-between items-center'>

          <IoIosMenu onClick={() => toggleMenu("dropdown")} className='text-black text-[30px] md:hidden block cursor-pointer ml-[10px]' />

          <Link to="/">
            <div className="middleLogo">
              <img src={logo} alt="" className='cursor-pointer w-[85px] md:hidden block ' onClick={() => {
              setCartOpen(false);
              setDropdown(false);
              setProfile(false);
            }}/>
            </div>
          </Link>

          <div className='flex items-center text-[25px] gap-x-[20px] cursor-pointer md:hidden mr-[10px]'>
            <FaCartArrowDown className='hover:text-[#6a6a6a] transition duration-300' onClick={() => {
              setCartOpen(true);
              setDropdown(false);
              setProfile(false);
            }} />
            <FaCircleUser className='hover:text-[#6a6a6a] transition duration-300' onClick={() => toggleMenu("profile")} />

            {profile && (
              <div className='absolute right-0 md:right-[250px] top-[90px] z-50'>
                <div className='bg-white flex flex-col gap-y-[30px] py-[30px] px-[20px] rounded-lg shadow-lg'>
                  <Link to="/login" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Login</Link>
                  <Link to="/registration" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Registration</Link>
                </div>
              </div>
            )}
          </div>
        </div>


        <div className={`transition duration-300 ${dropdown ? 'translate-x-0' : "md:flex justify-between items-center hidden"}`}>
          <div className="leftNavitems md:flex items-center gap-x-[20px] font-urbanist text-[13px] cursor-pointer">
            <p className='md:pt-0 pt-[11px] md:px-0 px-[15px]' onClick={() => setDropdown(false)}>BUY PERFUMES</p>
            <p className='md:pt-0 pt-[11px] md:px-0 px-[15px]' onClick={() => setDropdown(false)}>EXCLUSIVE</p>
            <p className='md:pt-0 pt-[11px] md:px-0 px-[15px]' onClick={() => setDropdown(false)}>WOMEN</p>
            <p className='md:pt-0 pt-[11px] md:px-0 px-[15px]' onClick={() => setDropdown(false)}>MEN</p>
          </div>

          {/* Logo */}
          <Link to="/">
            <div className="middleLogo">
              <img src={logo} alt="" className='cursor-pointer md:block hidden' />
            </div>
          </Link>

          {/* Desktop Profile & Cart */}
          <div className="rightnavitems md:flex items-center gap-x-[20px] font-urbanist text-[13px] cursor-pointer">
            <p className='md:px-0 px-[15px] md:pt-0 pt-[11px]' onClick={() => setDropdown(false)}>ABOUT</p>
            <div className='md:pt-0 pt-[11px]'>
              <Link to="/contact" className='md:px-0 px-[15px] ' onClick={() => setDropdown(false)}>CONTACT</Link>
            </div>
            <div className='md:flex items-center text-[25px] gap-x-[20px] cursor-pointer hidden relative'>
              <FaCartArrowDown className='hover:text-[#6a6a6a] transition duration-300' onClick={() => {
                setCartOpen(true);
                setDropdown(false);
                setProfile(false);
              }} />
              <FaCircleUser className='hover:text-[#6a6a6a] transition duration-300' onClick={() => toggleMenu("profile")} />

              {profile && (
                <div className='absolute md:right-[10px] md:top-[50px] z-50'>
                  <div className='bg-white flex flex-col gap-y-[30px] py-[30px] px-[20px] rounded-lg shadow-lg'>
                    <Link to="/login" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Login</Link>
                    <Link to="/registration" className='bg-black text-white hover:bg-transparent hover:text-black transition duration-500 px-[15px] text-center'>Registration</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
