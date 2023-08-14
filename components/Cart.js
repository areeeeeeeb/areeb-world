import React from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartState } from '/atoms/cartState';
import CartList from '/components/CartList';
import { formatCurrency } from '@/lib/utils';

    const Cart = ({ isOpen }) => {
    const [cartItem, setCartItem] = useRecoilState(cartState);

    const handleDecreaseQty = (item) => {
        if (item.quantity > 1) {
            const updatedCart = cartItem.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            );
            setCartItem(updatedCart);
        } else {
            const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id);
            setCartItem(updatedCart);
        }
    };


    const handleIncreaseQty = (item) => {
        const updatedCart = cartItem.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItem(updatedCart);
    };

    const totalPrice = () => {
        let total = 0;
        cartItem.forEach((item) => (total += item.price * item.quantity));
        return total;
    };

    const createCheckoutSession = async () => {
        console.log('createCheckoutSession called');
        axios
        .post('/api/checkout_sessions', { cartItem })
        .then((res) => {
            console.log(res);
            window.location = res.data.sessionURL;
        })
        .catch((err) => console.log(err));
    };

    return (
        <>
            {/* Backdrop element */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-20 z-40"></div>}

            <div
                className={`fixed top-0 right-0 h-screen w-full md:w-3/4 lg:w-1/3 border-black bg-sky transition-transform duration-300 transform z-[50] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='h-full flex flex-col'>
                    <div className='p-2 py-4 mt-2 text-5xl border-black text-center uppercase'>
                        Your Cart
                    </div>
                    <div className='flex-grow overflow-y-auto'>
                        {cartItem.length <= 0 ? (
                            <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
                        ) : (
                            cartItem.map((item) => (
                                <CartList
                                    key={item.id}
                                    data={item}
                                    handleDecreaseQty={() => handleDecreaseQty(item)}
                                    handleIncreaseQty={() => handleIncreaseQty(item)}
                                />
                            ))
                        )}
                    </div>
                    {cartItem.length > 0 && (
                        <div className='p-4'>
                            <h2 className='text-right text-3xl font-bold'>Total: {formatCurrency(totalPrice())}</h2>
                            <button
                                className='w-full bg-rose-400 text-white py-2 px-4 mt-4 rounded text-3xl'
                                onClick={createCheckoutSession}
                            >
                                Checkout!
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
