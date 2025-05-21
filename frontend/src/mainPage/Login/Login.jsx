import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import login from '../../assets/login/login.png'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
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
        axios.post("http://localhost:3000/api/v1/authentication/login", userData)
            .then((res) => {
                toast.success(res.data.message)
                console.log("you've logged in")
                setTimeout(() => {
                    navigate("/")
                }, 5000)
            }).catch((error) => {
                toast.error("login failed")
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
                <div className='bg-white w-[350px] md:w-[60%] py-[70px] px-[40px] rounded-2xl md:mx-0 mx-auto'>
                    <div className='text-center'>
                        <p className='font-Dafoe md:text-[14px] text-[12px] text-[#7b462b] font-bold'>Enchant Your Senses-Shop Fragrance, Shop Elegance!</p>
                        <p className='font-cormot md:text-[50px] text-[30px] font-bold text-[#c6866b]'>Log In</p>
                    </div>

                    {/* inputs */}
                    <div className='flex flex-col gap-y-[30px] mt-[20px]'>
                        <input onChange={handleChange} name='email' type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12px]' placeholder='Give Your Email id' />

                        <input onChange={handleChange} name='password' type="text" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12px]' placeholder='Create a password' />
                    </div>

                    <div onClick={handleSubmit} className="submitBtn mt-[30px] text-center">
                        <Link>
                            <p className='bg-[#c6866b] w-[150px] text-center py-[5px] mx-auto cursor-pointer font-urbanist font-bold hover:bg-transparent hover:text-black text-white transition duration-500'>Log In</p>
                        </Link>

                        <div className='pt-[20px]'>
                            <Link to="/registration" className='font-urbanist md:text-base text-[15px]'>Didn't Registered Yet? What are you waiting for..? <span className='text-[#c6866b] font-bold'>Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='md:w-[50%] flex flex-col items-center justify-center ml-[-250px]'>
                <img src={login} alt="" className='md:block hidden' />
            </div>

        </div>
    )
}

export default Login