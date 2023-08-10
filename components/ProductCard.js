import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { formatCurrency } from '@/lib/utils';

const ProductCard = ({ id, image, name, shortDescription, price, currency }) => {
    // State variables
    const [isHovered, setIsHovered] = useState(false);

    // Return the component
    return (
        <Link href={`/products/${id}`} className="product-card p-2 bg-white group border-black border-2">
            <div
                className={`relative w-full group cursor-pointer`}
                style={{ paddingBottom: "100%" }} // 1:1 aspect ratio (change the value for different ratios)
            >
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                />
            </div>
            <div className="mt-2">
                <p className="font-semibold text-xl sm:text-2xl uppercase leading-5">{name}</p>
                <div className="flex items-center justify-between space-x-0">
                    <p className="text-md sm:text-lg font-normal leading-4">
                        {shortDescription}
                    </p>
                    <p className="text-lg font-semibold" style={{ verticalAlign: "middle"}}>
                        {formatCurrency(price, currency)}
                    </p>
                </div>
            </div>

        </Link>
    );
};

// Default props for ProductCard component
ProductCard.defaultProps = {
    id: '', // Default product id
    image: '', // Default image URL
    name: 'Default Product', // Default product name
    shortDescription: 'No description available', // Default short description
    price: 0, // Default price
    currency: 'USD', // Default currency
};

export default ProductCard;