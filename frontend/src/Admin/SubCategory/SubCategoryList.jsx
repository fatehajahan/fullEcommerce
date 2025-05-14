import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SubCategoryList = () => {
    const [subCategories, setSubCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/subcategory/getallsubcategory")
            .then((res) => setSubCategories(res.data.data))
    }, [])
    console.log(subCategories)

    const TABLE_ROWS = subCategories

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/v1/subcategory/deletesubcategory/${id}`)
            .then((res) => {
                console.log(res.data)
                setSubCategories(subCategories.filter((subcategory) => subcategory._id !== id))
                toast.success("SubCategory Deleted Successfully")
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
                                {/* <th className="px-6 py-4">Update</th> */}
                                <th className="px-6 py-4">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {TABLE_ROWS.map(({ _id, subCategoryName, subCategoryDescription }, index) => (
                                <tr key={subCategoryName} className="border-b">
                                    <td className="px-6 py-4">{index + 1}.</td>
                                    <td className="px-6 py-4">{subCategoryName}</td>
                                    <td className="px-6 py-4">{subCategoryDescription}</td>
                                    {/* <td className="px-6 py-4 text-blue-500 cursor-pointer">
                                        <Link to={`/updatecategory/${_id}`}>
                                            Update
                                        </Link>
                                    </td> */}
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

export default SubCategoryList