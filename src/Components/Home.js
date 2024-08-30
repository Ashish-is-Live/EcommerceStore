import React from 'react'
import Product from './Product'

const Home = ({ allProducts, cartProducts, setCartProducts }) => {
    return (
        <div className='bg-gray-100 min-h-screen py-8'>
            <div className='max-w-7xl mx-auto px-4'>
                <h1 className='text-4xl font-bold mb-8 text-center text-gray-900'>Our Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {allProducts.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            setCartProducts={setCartProducts}
                            cartProducts={cartProducts}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home



