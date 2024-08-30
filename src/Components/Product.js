import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-hot-toast";
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';

const Product = ({ product, cartProducts, setCartProducts }) => {

    const addToCart = () => {
        setCartProducts([...cartProducts, product]);
        toast.success("Added to cart");
    }

    const removeFromCart = () => {
        setCartProducts(cartProducts.filter((item) => item.id !== product.id));
        toast.error("Removed from cart");
    }

    const isInCart = cartProducts.some((item) => item.id === product.id);

    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out'>
            <Link to={`/product/${product.id}`}>
                <div className='relative w-full h-56'>
                    <img
                        className='object-fit w-full h-full rounded-t-lg'
                        src={product.image}
                        alt={product.title}
                    />
                </div>
            </Link>
            <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800 mb-2'>{product.title}</h2>
                <p className='text-gray-600 mb-4 truncate'>{product.description}</p>
                <p className='text-lg font-bold text-gray-900 mb-4'>${product.price.toFixed(2)}</p>
                <button
                    onClick={isInCart ? removeFromCart : addToCart}
                    className={`w-full py-2 px-4 rounded-lg flex items-center justify-center text-white ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} transition-transform transform hover:scale-105`}
                >
                    {isInCart ? (
                        <>
                            <FaTrashAlt className='mr-2' />
                            Remove From Cart
                        </>
                    ) : (
                        <>
                            <FaCartPlus className='mr-2' />
                            Add to Cart
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Product










