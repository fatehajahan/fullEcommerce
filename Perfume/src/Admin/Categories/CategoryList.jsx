import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/category/getallcategory")
            .then((res) => setCategories(res.data.data))
    }, [])
    console.log(categories)
    // const TABLE_HEAD = ["Sr No", "Category Name", "Category Description", "Update", "Delete"];

    const TABLE_ROWS = categories

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/v1/category/deletecategory/${id}`)
            .then((res) => {
                console.log(res.data)
                setCategories(categories.filter((category) => category._id !== id))
                toast.success("Category Deleted Successfully")
            })
    }
    return (
        <div>
            <div className="p-8">
                <h2 className="text-4xl font-bold text-center text-gray-600 mb-6">Categoy List</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-700 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr className="rounded-t-lg">
                                <th className="px-6 py-4">Sr No</th>
                                <th className="px-6 py-4">Category Name</th>
                                <th className="px-6 py-4">Category Description</th>
                                <th className="px-6 py-4">Update</th>
                                <th className="px-6 py-4">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {TABLE_ROWS.map(({ _id, categoryName, categoryDescription }, index) => (
                                <tr key={categoryName} className="border-b">
                                    <td className="px-6 py-4">{index + 1}.</td>
                                    <td className="px-6 py-4">{categoryName}</td>
                                    <td className="px-6 py-4">{categoryDescription}</td>
                                    <td className="px-6 py-4 text-blue-500 cursor-pointer">
                                        <Link to={`/updatecategory/${_id}`}>
                                            Update
                                        </Link>
                                    </td>
                                    <td onClick={() => handleDelete(_id)} className="px-6 py-4 text-red-500 cursor-pointer">Delete</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CategoryList