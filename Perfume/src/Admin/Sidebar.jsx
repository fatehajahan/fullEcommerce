import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='w-[20%] bg-[linear-gradient(90deg,#AE8625,#F7EF8A,#D2AC47,#EDC967)] py-[20px] flex flex-col items-center '>
            <h1 className='font-urbanist text-[30px] font-bold'>Inessa Admin Panel</h1>

            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                    E-Commerce
                </button>

                {isOpen && (
                    <div className="z-10 mt-2 w-[300px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 font-urbanist ">
                        <div className="py-1">
                            <Link to="/createcategory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[18px]">
                                Create Category
                            </Link>
                            <Link to="/categorylist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[18px]">
                                Category List
                            </Link>
                            <Link to="/createsubcategory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[18px]">
                                Create SubCategory
                            </Link>
                            <Link to="/createproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-[18px]">
                                Create Product
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar