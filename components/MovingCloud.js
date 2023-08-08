import React from 'react';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';

const MovingCloud = () => {
    // Function to generate random values for width and height
    const getRandomValue = (min, max) => Math.random() * (max - min) + min;

    // Generate random width between 100 and 300
    const width = getRandomValue(250, 600);

    // Calculate duration inversely proportional to width
    const duration = -0.1 * width + 70;

    const moveRight = Math.random() < 0.5;

    return (
        <div
            className="absolute w-screen right-0 left-0 -translate-y-64 pointer-events-none overflow-x-hidden"
            style={{ zIndex: 2 }}
        >
            <motion.div
                initial={moveRight ? { x: 0-width } : { x: '110%' }}
                animate={moveRight ? { x: '110%'} : { x: 0-width }}
                transition={{ ease: 'linear', duration: duration, repeat: Infinity }}
            >
                {/* Use the random width for the image size */}
                <Image src="/cloud-2.png" alt="Cloud" width={width} height={width / 2} />
            </motion.div>
        </div>

    );
};

export default MovingCloud;
