import React from 'react'
import productImg from '../../assets/broughtpageBlue/product1.jpg'

const ViewCart = () => {

    return (
        <div className="container mx-auto py-[150px] px-4">
            <h1 className="text-4xl font-serif text-center mb-8">Cart</h1>

            <div className="flex flex-col md:flex-row gap-8">

                
                <div className="w-full md:w-2/3 border border-gray-300">

                    <table className="w-full text-left hidden md:table">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4 font-semibold">Product</th>
                                <th className="p-4 font-semibold">Price</th>
                                <th className="p-4 font-semibold">Quantity</th>
                                <th className="p-4 font-semibold">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 flex items-center gap-4">
                                    <button className="text-gray-500 hover:text-red-500">X</button>
                                    <img src={productImg} className="w-16 h-16 object-cover border" />
                                    <span className="font-medium">Bright Light by Yana</span>
                                </td>
                                <td className="p-4 font-bold">$425.00</td>
                                <td className="p-4">
                                    <div className="flex text-[15px]">
                                        <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition">-</p>
                                        <p className="border px-[15px]">1</p>
                                        <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition">+</p>
                                    </div>
                                </td>
                                <td className="p-4 font-bold">$425.00</td>
                            </tr>
                        </tbody>
                    </table>

                    
                    <div className="md:hidden border-t border-gray-300">
                        <div className="border-b p-4">
                            <div className="flex justify-between items-start mb-4">
                                <img src={productImg} className="w-20 h-20 object-cover border mx-auto" />
                                <button className="text-gray-500 hover:text-red-500 text-xl">×</button>
                            </div>
                            <table className="w-full text-sm">
                                <tbody className="space-y-2">
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold w-[30%]">Product:</td>
                                        <td className="py-2 text-right">Bright Light by Yana</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Price:</td>
                                        <td className="py-2 text-right">$425.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 font-semibold">Quantity:</td>
                                        <td className="py-2 text-right">
                                            <div className="flex justify-end text-sm">
                                                <button className="border px-3 hover:bg-black hover:text-white transition">-</button>
                                                <span className="border px-3">1</span>
                                                <button className="border px-3 hover:bg-black hover:text-white transition">+</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Subtotal:</td>
                                        <td className="py-2 text-right">$425.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                
                <div className="w-full  md:w-1/3 border border-gray-300 p-6">
                    <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
                    <div className="flex justify-between border-b py-2">
                        <span>Subtotal:</span>
                        <span>$425.00</span>
                    </div>
                    <div className="flex justify-between border-b py-2 font-bold">
                        <span>Total:</span>
                        <span>$425.00</span>
                    </div>
                    <p className="mt-4 text-sm">Have a coupon?</p>
                    <button className="mt-4 bg-black text-white px-6 py-3 w-full text-center uppercase font-semibold cursor-pointer">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewCart