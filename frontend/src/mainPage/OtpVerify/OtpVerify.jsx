import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const OtpVerify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("")
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/authentication/lastUser")
            .then((res) => setUserData(res.data.data))
    }, [])

    const handleOtp = () => {
        console.log("otp :", otp)
        console.log(userData)
        axios.post("http://localhost:3000/api/v1/authentication/otpVerify", { email: userData.email, otp: otp })
            .then((res) => {
                toast.success("email varified")
                setTimeout(() => {
                    navigate("/login")
                }, 5000)
            }).catch((error) => {
                alert(error)
                toast.error("verification failed")
                console.log(error)
            })
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
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
            <div className='flex flex-col gap-y-[30px] mt-[20px]'>
                <h1 className='font-urbanist text-[35px] text-center'>Verify You Email Id</h1>
                {/* email */}
                <input
                    defaultValue={userData.email} name='email' type="email" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Your Email' />

                {/* otp */}
                <input
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp} name='otp' type="number" className='border border-[#f0c5d9] bg-gray-200 py-[6px] px-[15px] w-full md:placeholder:text-[14px] placeholder:text-[12.5px]' placeholder='Your Otp' />

                <div>
                    <button
                        onClick={handleOtp}
                        className='bg-[#c2155b] w-[150px] text-center py-[5px] mx-auto cursor-pointer font-urbanist font-bold text-white hover:bg-transparent hover:text-black transition duration-500'>verify</button>
                </div>
            </div>
        </div>
    )
}

export default OtpVerify