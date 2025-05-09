import React, { useState } from 'react'
import axios from 'axios';

const CreateCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")

    const handleCreateCategory = () => {
        console.log(categoryName)
        console.log(categoryDescription)
        setCategoryDescription("")
        setCategoryName("")
        const data = {
            categoryName,
            categoryDescription
        };
        axios.post("http://localhost:3000/api/v1/category/createcategory", data)
            .then((res) => alert("Category Created Successfully"))
            .catch((err) => alert("Category Creation Failed"));
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[50px]'>Create a New Category</h1>
            <div>
                {/* category name */}
                <label htmlFor="categoryName">Category's Name</label>
                <input onChange={(e) => setCategoryName(e.target.value)} type="text" className='border border-[#4a4a4a] py-[10px] px-[15px] w-full mb-[26px]' />

                {/* category Description */}
                <label htmlFor="categoryDescription">Category's Description</label>
                <textarea onChange={(e) => setCategoryDescription(e.target.value)} type="text" className='border border-[#4a4a4a] py-[10px] px-[15px] w-full mb-[26px] ' />
            </div>

            <div onClick={handleCreateCategory} className='bg-amber-700 py-[20px] text-center cursor-pointer px-[9px] rounded-md text-white font-urbanist font-bold hover:bg-amber-500 hover:text-black transition duration-500'>
                <button>Create a New Category</button>
            </div>
        </div>
    )
}

export default CreateCategory