import React, { useState } from 'react'
import reg from '../../assets/registration/registration.png'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const Registration = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        console.log(userData, "userdata")
        axios.post("http://localhost:3000/api/v1/authentication/registration", userData)
            .then((res) => {
                toast.success(res.data.message)
                console.log('reg done')
                setTimeout(() => {
                    navigate("/verification")
                }, 5000)
            }).catch((error) => {
                alert(error)
                toast.error("registration failed")
                console.log(error)
            })
    }
    return (
        <div className='md:flex items-center overflow-hidden h-screen bg-[linear-gradient(90deg,#AE8625,#F7EF8A,#D2AC47,#EDC967)]'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="md:w-[70%] flex flex-col items-center justify-center md:my-0 my-[60px]">
                <div className='bg-white md:w-[60%] py-[70px] px-[40px] rounded-2xl'>
                    <div className='text-center'>
                        <p className='font-cormot md:text-[20px] text-[13px] font-bold'>Let's Start a New Journey..!</p>
                        <p className='font-cormot md:text-[50px] text-[30px] font-bold text-[#c2155b]'>Sign Up</p>
                    </div>

                    <div className='flex flex-col gap-y-[30px] mt-[20px]'>
                        {/* first name */}
                        <input onChange={handleChange} name='firstName' autoFocus={true} type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Your First Name' />
                        {/* last name */}
                        <input onChange={handleChange} name='lastName' type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Your Last Name' />
                        {/* email */}
                        <input onChange={handleChange} name='email' type="email" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Your Email' />
                        {/* password */}
                        <input onChange={handleChange} name='password' type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Create a password' />
                    </div>

                    <div className="submitBtn mt-[30px] text-center">
                        <Link>
                            <button onClick={handleSubmit} className='bg-[#c2155b] w-[150px] text-center py-[5px] mx-auto cursor-pointer font-urbanist font-bold text-white hover:bg-transparent hover:text-black transition duration-500'>Sign Up</button>
                        </Link>

                        <div className='pt-[20px]'>
                            <Link to="/login" className='font-urbanist'>Already Have An Account? <span className='text-[#c2155b] font-bold'>Log In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[40%]">
                <img src={reg} alt="" className='md:block hidden' />
            </div>
        </div>
    )
}

export default Registration