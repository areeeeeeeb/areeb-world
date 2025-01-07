import React, { useState } from 'react';

const ImageViewer = ({ images = ["/error.png"] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const showArrows = images.length > 1;

    return (
        <div className="flex flex-row space-x-2 justify-center items-center w-full sm:w-5/6 lg:w-1/2">

            <div
                className={`w-10 h-10 cursor-pointer ${!showArrows ? 'invisible' : ''}`}
                onClick={prevImage}
            >
                <img
                    src="/left.png"
                    alt="Previous"
                    layout="fill"
                    className="object-contain"
                />
            </div>

            <div className="w-11/12 border-2 border-black bg-white">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="object-fill"
                />
            </div>

            <div
                className={`w-10 h-10 object-cover cursor-pointer ${!showArrows ? 'invisible' : ''}`}
                onClick={nextImage}
            >
                <img src="/right.png" alt="Next" />
            </div>
        </div>
    );
};

export default ImageViewer;