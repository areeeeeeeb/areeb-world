import React, { useState, useEffect } from 'react';

const CartMan = () => {
    const images = [
        "/cart/1.png",
        "/cart/1.png",
        "/cart/2.png",
        "/cart/3.png",
        "/cart/3.png",
        "/cart/4.png",
        "/cart/1.png",
        "/cart/1.png",
        "/cart/2.png",
        "/cart/3.png",
        "/cart/3.png",
        "/cart/4.png",
        "/cart/1.png",
        "/cart/1.png",
        "/cart/2.png",
        "/cart/3.png",
        "/cart/3.png",
        "/cart/4.png",
        "/cart/1.png",
        "/cart/1.png",
        "/cart/2.png",
        "/cart/3.png",
        "/cart/3.png",
        "/cart/4.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const imageHeight = windowHeight / images.length;
        let newIndex = Math.floor(scrollY / imageHeight);

        // Ensure newIndex stays within the valid index range
        while (newIndex >= images.length) {
            newIndex -= images.length;
        }

        while (newIndex < 0) {
            newIndex += images.length;
        }

        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

        return <img src={images[currentIndex]} alt="cart" className="cart flex"/>;
};

export default CartMan;