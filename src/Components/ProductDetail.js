import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ProductDetail = ({ allProducts, cartProducts, setCartProducts }) => {
    const { id } = useParams();
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className='text-center text-red-500'>Product not found</div>;
    }

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
        <div className='container mx-auto p-4'>
            <NavLink to="/" className='text-blue-500 flex items-center mb-4'>
                <FaArrowLeft className='mr-2' />
                Back to Products
            </NavLink>
            <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden'>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        className='object-cover w-full h-full rounded-lg'
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className='w-full md:w-1/2 p-4'>
                    <h2 className='text-3xl font-bold mb-2'>{product.title}</h2>
                    <p className='text-gray-600 mb-4'>{product.description}</p>
                    <p className='text-2xl font-semibold text-gray-900 mb-4'>${product.price.toFixed(2)}</p>
                    <button
                        onClick={isInCart ? removeFromCart : addToCart}
                        className={`w-full py-2 px-4 rounded-lg flex items-center justify-center text-white ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} transition-transform transform hover:scale-105`}
                    >
                        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
