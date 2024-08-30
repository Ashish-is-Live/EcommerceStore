import React, { useState, useEffect } from "react";
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductDetail from './Components/ProductDetail';
import { FadeLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";

const App = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/");
            const products = await response.json();
            setAllProducts(products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <NavBar />

            <main className='min-h-screen bg-gray-100'>
                {allProducts.length > 0 ? (
                    <Routes>
                        <Route 
                            path="/" 
                            element={<Home 
                                allProducts={allProducts} 
                                setCartProducts={setCartProducts} 
                                cartProducts={cartProducts} 
                            />} 
                        />
                        <Route 
                            path="/cart" 
                            element={<Cart 
                                cartProducts={cartProducts} 
                                setCartProducts={setCartProducts} 
                            />} 
                        />
                        <Route 
                            path="/product/:id" 
                            element={<ProductDetail 
                                allProducts={allProducts} 
                                cartProducts={cartProducts} 
                                setCartProducts={setCartProducts} 
                            />} 
                        />
                    </Routes>
                ) : (
                    <div className='flex items-center justify-center min-h-screen'>
                        <FadeLoader />
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;


