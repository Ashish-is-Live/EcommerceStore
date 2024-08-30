// import React from 'react'
// import CartProduct from './CartProduct'
// import { NavLink } from 'react-router-dom'

// const Cart = ({ cartProducts, setCartProducts }) => {
//     let totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0)
//     totalPrice = Math.abs(totalPrice)
//     return (
//         <div>
//             <div className='w-[1200px] mx-auto'>

//                 {cartProducts.length > 0 ? <div>
//                     <div className='flex flex-wrap  w-11/12 justify-between gap-y-[30px] items-center'>
//                         {

//                             (cartProducts.map((product) =>

//                                 <CartProduct product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></CartProduct>

//                             ))
//                         }


//                     </div>
//                     <div>{
//                         'Total Price: $' +
//                         totalPrice
//                     }</div>
//                 </div> : (
//                     <div>
//                         <p>Cart is Empty</p>
//                         <NavLink to="/">Back To Home</NavLink>
//                     </div>


//                 )







//                 }




//             </div>

//         </div>
//     )
// }

// export default Cart
import React from 'react'
import CartProduct from './CartProduct'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

const Cart = ({ cartProducts, setCartProducts }) => {
    let totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);
    totalPrice = Math.abs(totalPrice).toFixed(2); // Format total price

    return (
        <div className='bg-gray-100 min-h-screen py-8'>
            <div className='container mx-auto px-4'>
                <h1 className='text-3xl font-bold mb-6 text-center text-gray-900'>
                    <FaShoppingCart className='inline-block mr-2 text-green-500' />
                    Your Cart
                </h1>
                {cartProducts.length > 0 ? (
                    <div className='bg-white shadow-lg rounded-lg p-6'>
                        <div className='flex flex-col gap-6'>
                            {cartProducts.map((product) => (
                                <CartProduct 
                                    key={product.id} 
                                    product={product} 
                                    cartProducts={cartProducts} 
                                    setCartProducts={setCartProducts} 
                                />
                            ))}
                        </div>
                        <div className='mt-6 flex justify-between items-center'>
                            <p className='text-lg font-bold text-gray-800'>Total Price: ${totalPrice}</p>
                            <button
                                onClick={() => setCartProducts([])}
                                className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition'
                            >
                                <FaTrashAlt className='inline-block mr-2' />
                                Clear Cart
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='text-lg text-gray-600 mb-4'>Your cart is currently empty.</p>
                        <NavLink 
                            to="/" 
                            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'
                        >
                            Back to Home
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart


