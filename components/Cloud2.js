import React from 'react';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';

const Cloud2 = ({ size = 300, speed = 50 }) => {
    // Use the `size` parameter to set the width directly
    const width = size;

    // Use the `speed` parameter directly to control the duration of the animation
    const duration = speed;

    const moveRight = Math.random() < 0.5;

    return (
        <div
            className="absolute w-screen right-0 left-0 -translate-y-64 pointer-events-none overflow-x-hidden"
            style={{ zIndex: 2 }}
        >
            <motion.div
                initial={moveRight ? { x: 0 - width } : { x: '110%' }}
                animate={moveRight ? { x: '110%'} : { x: 0 - width }}
                transition={{ ease: 'linear', duration: duration, repeat: Infinity }}
            >
                {/* Use the specified `size` for the image width and calculate the height to maintain aspect ratio */}
                <Image src="/cloud-2.png" alt="Cloud" width={width} height={width / 2} />
            </motion.div>
        </div>
    );
};

export default Cloud2;
