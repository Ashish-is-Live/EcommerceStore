import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const CartProduct = ({ product, setCartProducts, cartProducts }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col p-4 w-full max-w-sm mx-auto border border-gray-200'>
            <div className='relative w-full h-48 mb-4'>
                <img
                    className='object-fit w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105'
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <div className='flex flex-col flex-1'>
                <h2 className='text-xl font-semibold mb-2 text-gray-800'>{product.title}</h2>
                <p className='text-gray-600 mb-4 truncate'>{product.description}</p>
                <p className='text-xl font-bold text-gray-900 mb-4'>${product.price.toFixed(2)}</p>
                <button
                    onClick={() => setCartProducts(cartProducts.filter(p => p.id !== product.id))}
                    className='bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-red-600 transition-transform transform hover:scale-105'
                >
                    <FaTrashAlt className='mr-2' />
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartProduct


