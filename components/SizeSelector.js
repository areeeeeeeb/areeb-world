import React, { useState } from 'react';

const SizeSelector = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleButtonClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="flex flex-row py-1.5 items-start justify-start gap-[10px]">
            {sizes.map((sizeObj) => (
                <button
                    key={sizeObj.size}
                    className={`flex items-center justify-center rounded-xl border-2 border-black ${
                        selectedSize === sizeObj.size ? 'bg-gray-200' : 'bg-white'
                    } text-normal font-bold text-3xl px-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
                    style={{ fontFamily: 'Areeeb', paddingTop: '10px', lineHeight: '0.7' }}
                    onClick={() => {
                        if (sizeObj.available) {
                            handleButtonClick(sizeObj.size);
                        }
                    }}
                    disabled={!sizeObj.available}
                >
                    {sizeObj.size}
                    {!sizeObj.available && ( // Add this condition
                        <span
                            className="absolute w-[3rem] h-11"
                            style={{
                                borderTop: '2px solid black', // Customize the diagonal line style
                                transform: ' translateX(15px) translateY(10px) rotate(-45deg)',
                                pointerEvents: 'none', // Prevent the line from blocking button clicks
                            }}
                        />
                    )}

                </button>
            ))}
        </div>
    );
};

export default SizeSelector;


