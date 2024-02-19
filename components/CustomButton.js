import React from 'react';
import PropTypes from 'prop-types'; // Optional, for type-checking

const CustomButton = ({ buttonText, link }) => {
    // Handler function for the click event
    const handleClick = () => {
        // Navigate to the provided link
        window.location.href = link;
    };

    return (
        <button
            className="rounded-xl bg-white border-2 sm:border-4 border-black font-bold
                       text-4xl sm:text-5xl md:text-6xl lg:text-8xl
                       pt-4 sm:pt-6 md:pt-7 lg:pt-10  px-2
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            style={{ fontFamily: 'Areeeb', lineHeight: '0.7' }}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
};

// PropTypes for type-checking (optional)
CustomButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default CustomButton;
