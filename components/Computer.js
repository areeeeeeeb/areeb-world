import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Computer = () => {
    const inputRef = useRef(null); // Create a ref for the input element
    const router = useRouter();

    // Function to format the current date and time
    const formatDateTime = () => {
        const now = new Date();
        return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n`;
    };

    // Initialize the inputValue state with the formatted date and time
    const [inputValue, setInputValue] = useState(formatDateTime() + '@areeb-world ~ % ');

    const handleInputChange = (event) => {
        let newValue = event.target.value;

        // Ensure the base prompt is always there even if the user deletes everything
        if (!newValue.includes('@areeb-world ~ % ')) {
            newValue = '@areeb-world ~ % ';
        }

        // Navigate to specific routes if the last command was 'shop', 'work', or 'design'
        if (newValue.endsWith('shop\n')) {
            router.push('/shop'); // Navigate to /shop
        } else if (newValue.endsWith('work\n')) {
            router.push('/work'); // Navigate to /work
        } else if (newValue.endsWith('design\n')) {
            router.push('/design'); // Navigate to /design
        }

        if (newValue.endsWith('\n')) {
            newValue += '@areeb-world ~ % ';
        }

        setInputValue(newValue); // Update the input value
    };


    useEffect(() => {
        // Set cursor position to the end of the text
        const setPositionAtEnd = () => {
            const valueLength = inputValue.length;
            if (inputRef.current) {
                inputRef.current.focus();
                inputRef.current.setSelectionRange(valueLength, valueLength);
            }
        };

        // Focus and set cursor position when the component mounts
        setPositionAtEnd();

        // Re-apply when inputValue changes, to ensure cursor stays at end if needed
        // This line can be adjusted based on desired behavior
        // useEffect dependency array ensures this effect only runs when inputValue changes
    }, [inputValue]);

    useEffect(() => {
        // Function to focus the input element
        const focusInput = () => {
            if (inputRef.current && document.activeElement !== inputRef.current) {
                inputRef.current.focus();
            }
        };

        // Add event listeners for focusing input
        document.addEventListener('click', focusInput);
        document.addEventListener('focusin', focusInput);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('click', focusInput);
            document.removeEventListener('focusin', focusInput);
        };
    }, []);

    return (
        <div className="relative">
            {/* Background image */}
            <img
                src="/keyboard-man/computer-no-screen.png"
                alt="compumuter"
                className="absolute w-full h-auto z-40"
            />
            <img
                src="/keyboard-man/computer.png"
                alt="computer"
                className="w-full h-auto"
            />

            {/* Text input overlay */}
            <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                className="textarea-terminal absolute top-1/2 left-1/2 transform translate-x-[-68%] translate-y-[-87%] w-7/12 h-[41%] p-2 focus:outline-none bg-transparent overflow-hidden"
                autoFocus
            ></textarea>
        </div>
    );
};

export default Computer;

