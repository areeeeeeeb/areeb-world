import React from 'react';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MovingCloud = ({ size, speed, zIndex = 2, className }) => {
    const getRandomValue = (min, max) => Math.random() * (max - min) + min;
    // use provided size or generate random width between 250 and 600
    const width = size || getRandomValue(250, 600);
    // use provided speed or calculate duration inversely proportional to width
    const duration = speed ? Math.abs(speed) : (-0.1 * width + 70);
    // if speed is provided, use its sign to determine direction, otherwise random
    const moveRight = speed !== undefined ? speed > 0 : Math.random() < 0.5;

    return (
        <div
            className={
                cn(
                    "absolute w-screen right-0 left-0 -translate-y-64 pointer-events-none max-w-[100vw] overflow-x-hidden",
                    className
                )
            }
            style={{ zIndex }}
        >
            <motion.div
                initial={moveRight ? { x: -width } : { x: '100vw' }}
                animate={moveRight ? { x: '100vw' } : { x: -width }}
                transition={{ ease: 'linear', duration: duration, repeat: Infinity }}
            >
                <Image src="/cloud-2.png" alt="Cloud" width={width} height={width / 2} />
            </motion.div>
        </div>

    );
};

export default MovingCloud;
