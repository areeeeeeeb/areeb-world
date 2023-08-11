import React, { useState, useEffect } from 'react';

const CartMan = ({ adding }) => {
    const images = [
        "/cart/1.png", //1
        "/cart/2.png", //2
        "/cart/3.png", //3
        "/cart/4.png", //4
        "/cart/1.png", //5
        "/cart/2.png", //6
        "/cart/3.png", //7
        "/cart/4.png", //8
        "/cart/incart.png" //9
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const imageHeight = windowHeight / 8;
        let newIndex = Math.floor(scrollY / imageHeight);

        // Ensure newIndex stays within the valid index range
        while (newIndex >= 8) {
            newIndex -= 8;
        }

        while (newIndex < 0) {
            newIndex += 8;
        }

        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        // Change the index based on the adding state
        if (adding) {
            setCurrentIndex(8); // Change this index to whatever image index you want
        }
    }, [adding]);

        return <img src={images[currentIndex]} alt="cart" className="cart flex"/>;
};

export default CartMan;