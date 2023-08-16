import React from 'react'
import Link from 'next/link';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { Logo } from '@/components/index';
import CartMan from "@/components/CartMan";
import Cart from '/components/Cart';
import { useRouter } from 'next/router';
import {useState} from "react";

const Header = () => {
    const { totalPrice, cartCount } = useShoppingCart();
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const [isCartOpen, setIsCartOpen] = useState(false);
    const openCart = () => {
        setIsCartOpen(true);
    };
    const closeCart = () => {
        setIsCartOpen(false);
    };


    return (
        <header className="header bg-sky py-3">
            <Cart isOpen={isCartOpen} onClose={closeCart} />
            <div className="flex justify-center w-full">
                <Logo/>
            </div>
            <ul className="flex justify-center  space-x-8 -mt-2">
                <li>
                    <div className="flex space-x-2">

                        <Link href="/" className="flex sm:inline-block mt-3 sm:py-0 text-2xl md:text-3xl text-black hover:font-bold" style={{verticalAlign: 'baseline',}}>
                            SHOP
                        </Link>
                        {isHomePage && (
                            <div
                                className="flex-shrink-0 mb-2 sm:hidden"
                                style={{ width: '40px', height: '40px' }}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    if (isCartOpen) {
                                        closeCart();
                                    } else {
                                        openCart();
                                    }
                                }}
                            >
                                <CartMan />
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <Link href="/games" className="flex text-black mt-3 sm:py-0 text-2xl md:text-3xl  hover:font-bold" >GAMES</Link>
                </li>
                <li>
                    <Link href="/about" className="flex text-black mt-3 sm:py-0 text-2xl md:text-3xl  hover:font-bold" >ABOUT</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;

