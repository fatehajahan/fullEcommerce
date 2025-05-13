import React from "react";
import cartPerfume from '../../assets/broughtpageBlue/product1.jpg'
import { Link } from "react-router-dom";

const AddCart = ({ cartOpen, setCartOpen }) => {
    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 flex flex-col justify-between  ${cartOpen ? "translate-x-0 " : "translate-x-full "} z-50`} >
            <div>
                <div className="p-5 flex justify-between items-center border-b ">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <div className="text-red-500 text-lg cursor-pointer" onClick={() => setCartOpen(false)} >  X  </div>
                </div>
                <div className="p-5">
                    <div className="flex gap-x-[20px]">
                        <img src={cartPerfume} alt="" className="w-[60px] h-[60px]" />

                        <div>
                            <p>Cool Blue Perfume</p>
                            <div className="flex text-[15px]">
                                <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">-</p>
                                <p className="border px-[15px]">1</p>
                                <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">+</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[30px]">
                        <p>No items in cart.</p>
                    </div>
                </div>
            </div>


            <div className="p-6 flex flex-col gap-y-[20px]">
                <div className="flex justify-between items-center">
                    <p className="font-urbanist font-bold">Subtotal :</p>
                    <p className="font-urbanist font-bold">$225.00</p>
                </div>

                <div className="flex flex-col gap-y-[20px]">
                    <div className="bg-black w-full text-white text-center py-[5px] cursor-pointer hover:bg-transparent hover:text-black transition duration-500">
                        <Link to="/mycart" className="font-urbanist font-bold text-[15px]" onClick={() => setCartOpen(false)}>VIEW CART</Link>
                    </div>

                    <div className="bg-black w-full text-white text-center py-[5px] cursor-pointer hover:bg-transparent hover:text-black transition duration-500">
                        <p className="font-urbanist font-bold text-[15px]">CHECKOUT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;