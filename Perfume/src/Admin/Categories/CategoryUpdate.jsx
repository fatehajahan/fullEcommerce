// CategoryUpdate.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  const updateCategory = () => {
    if (!newCategoryName || !newCategoryDescription) {
      alert("Please fill in all fields");
      return;
    }

    const data = {
      categoryName: newCategoryName,
      categoryDescription: newCategoryDescription,
    };

    axios
      .patch(`http://localhost:3000/api/v1/category/updatesinglecategory/${id}`, data)
      .then((res) => {
        alert('Category Updated Successfully');
        setNewCategoryDescription('');
        setNewCategoryName('');
        navigate('/categorylist');
      })
      .catch((err) => {
        console.error(err);
        alert('Category Update Failed');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Update Category No. <span className="text-amber-700">{id}</span></h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <label htmlFor="categoryName" className="block mb-2 font-medium text-gray-700">
          Category's Name
        </label>
        <input
          id="categoryName"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          type="text"
          className="border border-gray-400 py-2 px-4 w-full mb-4 rounded"
          placeholder="Enter new category name"
        />

        <label htmlFor="categoryDescription" className="block mb-2 font-medium text-gray-700">
          Category's Description
        </label>
        <textarea
          id="categoryDescription"
          value={newCategoryDescription}
          onChange={(e) => setNewCategoryDescription(e.target.value)}
          className="border border-gray-400 py-2 px-4 w-full mb-6 rounded h-24"
          placeholder="Enter new category description"
        />

        <button
          onClick={updateCategory}
          className="w-full bg-amber-700 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Update Category
        </button>
      </div>
    </div>
  );
};

export default CategoryUpdate;
