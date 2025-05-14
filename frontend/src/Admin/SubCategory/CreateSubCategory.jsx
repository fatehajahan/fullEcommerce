import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CreateSubCategory = () => {
    const [categoryies, setCategories] = useState([])
    const [subCategoryName, setSubCategoryName] = useState("")
    const [subCategoryDescription, setsubCategoryDescription] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))

    }, [])

    const handleCreateCategory = () => {
        console.log(subCategoryName)
        console.log(subCategoryDescription)
        setsubCategoryDescription("")
        setSubCategoryName("")
        setCategory("")
        const data = {
            subCategoryName,
            subCategoryDescription,
            category
        };
        axios.post("http://localhost:3000/api/v1/subcategory/createsubcategory", data)
            .then((res) => alert("SubCategory Created Successfully"))
            .catch((err) => alert("SubCategory Creation Failed"));
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[50px]'>Create a New Sub Category</h1>
                <div>
                    {/* category name */}
                    <label htmlFor="subCategoryName">SubCategory's Name</label>
                    <input onChange={(e) => setSubCategoryName(e.target.value)} type="text" className='border border-[#4a4a4a] py-[10px] px-[15px] w-full mb-[26px]' />

                    {/* category Description */}
                    <label htmlFor="subCategoryDescription">SubCategory's Description</label>
                    <textarea onChange={(e) => setsubCategoryDescription(e.target.value)} type="text" className='border border-[#4a4a4a] py-[10px] px-[15px] w-full mb-[26px] ' />

                    <div>
                        <label className="block font-semibold mb-1">
                            Product's Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                        >
                            <option value="">Select a category</option>
                            {categoryies.map((cat, index) => (
                                <option value={cat.categoryName} key={index}>
                                    {cat.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div onClick={handleCreateCategory} className='bg-amber-700 py-[20px] text-center cursor-pointer px-[9px] rounded-md text-white font-urbanist font-bold hover:bg-amber-500 hover:text-black transition duration-500 mt-[30px]'>
                    <button >Create a New Sub Category</button>
                </div>
            </div>
        </div>
    )
}

export default CreateSubCategory