import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartState } from '/atoms/cartState';
import CartList from '/components/CartList';
import { formatCurrency } from '@/lib/utils';

const Cart = ({ isOpen, onClose }) => {
    const [cartItem, setCartItem] = useRecoilState(cartState);
    const cartRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

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
            {isOpen && <div className="fixed inset-0 bg-black opacity-20 z-40"></div>}
            <div
                ref={cartRef}
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
                            <>
                                <img
                                    src="/cart/empty.png"
                                    alt="cart"
                                    className={`absolute bottom-36 ${isOpen ? 'translate-x-[-12.3%]' : 'left-0'}`}
                                    onClick={onClose}
                                />
                            </>
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
                                className='w-full bg-rose-400 text-white py-6 px-4 mt-4 mb-16 rounded-lg text-5xl'
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
