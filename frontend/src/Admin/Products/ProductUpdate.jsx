import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        fragrance: '',
        category: '',
        subCategory: '',
        discount: '',
        image: null,
    });
    
    //for options
    const [categoryies, setCategories] = useState([])
    const [subCategoryies, setSubCategoryies] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))

    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/subcategory/getallsubcategory")
            .then((res) => setSubCategoryies(res.data.data))
    }, [])

    const handleChange = () => {

    }

    
    const handleUpdateProduct = () => {
        console.log('dzd')
        const data = {
            categoryName: newCategoryName,
            categoryDescription: newCategoryDescription,
        };

        axios
            .patch(`http://localhost:3000/api/v1/category/updatesinglecategory/${id}`, data)
    }
    return (

        <div className='flex flex-col justify-between items-center'>
            <h1 className="text-3xl font-bold mb-6">Update Category No. <span className="text-amber-700">{id}</span></h1>
            <div>
                {/* inputs to Update a product's information */}

                <div className="max-w-5xl mx-auto px-4 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Create Product</h2>
                    <p className="text-gray-500 mb-6">
                        Nice to meet you! Enter your details to register.
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <div>
                            <label className="block font-semibold mb-1">
                                Product's Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={handleChange}
                                name='name'
                                type="text"
                                placeholder="Product's Name"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        {/* Product Category */}
                        <div>
                            <label className="block font-semibold mb-1">
                                Product's Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                // value={form.category}
                                // onChange={(e) => setForm({ ...form, category: e.target.value })}
                                name='category'
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400">
                                <option value="">Select Category</option>
                                {
                                    categoryies.map((category) => (
                                        <option key={category.categoryName} value={category.categoryName}>{category.categoryName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* Product Description */}
                        <div>
                            <label className="block font-semibold mb-1">
                                Product's Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                onChange={handleChange}
                                name='description'
                                placeholder="Product's Description"
                                className="w-full h-24 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            ></textarea>
                        </div>

                        {/* Product Subcategory */}
                        <div>
                            <label className="block font-semibold mb-1">Product's Subcategory</label>
                            <select
                                // value={form.subCategory}
                                name='subCategory'
                                // onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400">
                                <option value="">Select Subcategory</option>
                                {
                                    subCategoryies.map((subcategory) => (
                                        <option key={subcategory.subCategoryName} value={subcategory.subCategoryName}>{subcategory.subCategoryName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* Product Discount */}
                        <div>
                            <label className="block font-semibold mb-1">Product's Discount</label>
                            <input
                                onChange={handleChange}
                                name='discount'
                                type="text"
                                placeholder="Product's Discount"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        {/* Product Image */}
                        <div>
                            <label className="block font-semibold mb-1">Product's Image</label>
                            <input
                                onChange={handleChange}
                                type="file"
                                name='image'
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        {/* Product Price */}
                        <div>
                            <label className="block font-semibold mb-1">
                                Price <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={handleChange}
                                name='price'
                                type="text"
                                placeholder="Product's Price"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>

                        {/* Product Fragrance */}
                        <div>
                            <label className="block font-semibold mb-1">Product's Fragrance</label>
                            <input
                                onChange={handleChange}
                                name='fragrance'
                                type="text"
                                placeholder="Product's Fragrance"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>
                    </form>

                    {/* Submit Button */}
                    <div
                        onClick={handleUpdateProduct}
                        className="mt-8">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
                        >
                            CREATE PRODUCT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdate