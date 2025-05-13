import React from 'react'
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { id } = useParams();
    const handleChange = () =>{
        
    }
    return (
        
        <div className='flex flex-col justify-between items-center'>
            <h1 className="text-3xl font-bold mb-6">Update Category No. <span className="text-amber-700">{id}</span></h1>
            <div>
                {/* inputs to Update a product's information */}

                
            </div>
        </div>
    )
}

export default ProductUpdate