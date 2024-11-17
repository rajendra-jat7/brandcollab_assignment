import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const ProductSection = () => {
    const [products, setProducts] = useState([{ id: 1, description: '' }]);

    const addProduct = () => {
        setProducts([...products, { id: products.length + 1, description: '' }]);
    };

    return (
        <div className="p-4 bg-white rounded-lg">
            <h3 className="text-lg font-bold">Let's Collaborate</h3>
            <button onClick={addProduct} className="text-white bg-black rounded-lg p-2 mt-2">+ Add Product</button>
            {products.map((product, index) => (
                <div key={product.id} className="mt-4">
                    <div className='flex justify-between items-center'>
                        <h4 className="text-md font-semibold">Product #{index + 1}</h4>
                        <FontAwesomeIcon icon={faPen} className='text-gray-600 hover:text-gray-700 cursor-pointer' />
                    </div>
                    <div className="relative mt-2">
                        <textarea
                            className="w-full h-24 resize-none p-2 border rounded mt-2"
                            placeholder="Explain here......"
                            value={product.description}
                        />
                        <span className="absolute bottom-3 right-3 text-gray-500 text-sm font-bold pointer-events-none">
                            USD 350
                        </span>
                    </div>
                    <div className="mt-2 text-right">
                        <button className="text-white font-medium bg-blue-500 p-2 rounded">Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSection;
