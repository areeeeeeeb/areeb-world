import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Computer = () => {
    const inputRef = useRef(null);
    const router = useRouter();

    const formatCurrentDateTime = () => {
        const now = new Date();
        return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n`;
    };

    // initialize the inputValue state with the formatted date and time
    const [inputValue, setInputValue] = useState(formatCurrentDateTime() + '@areeb-world ~ % ');

    // handle input changes
    const handleInputChange = (event) => {
        let newValue = event.target.value;
        // ensure the base prompt is always there even if the user deletes everything
        if (!newValue.includes('@areeb-world ~ % ')) {
            newValue = '@areeb-world ~ % ';
        }
        // command handling
        // navigate to specific routes if the last command ended with 'shop', 'work', or 'design'
        if (newValue.endsWith('shop\n')) {
            router.push('/shop'); // navigate to /shop
        } else if (newValue.endsWith('work\n')) {
            router.push('/work'); // navigate to /work
        } else if (newValue.endsWith('design\n')) {
            router.push('/design'); // navigate to /design
        }
        // ls command
        if (newValue.endsWith('ls\n')) {
            newValue += 'shop\nwork\ndesign\n';
        }
        // append new prompt
        if (newValue.endsWith('\n')) {
            newValue += '@areeb-world ~ % ';
        }
        setInputValue(newValue); // update the input value
    };


    // set cursor position to the end on inputValue change
    useEffect(() => {
        // set cursor position to the end of the text
        const setPositionAtEnd = () => {
            const valueLength = inputValue.length;
            if (inputRef.current) {
                inputRef.current.focus();
                inputRef.current.setSelectionRange(valueLength, valueLength);
            }
        };
        // focus and set cursor position when the component mounts
        setPositionAtEnd();
    }, [inputValue]);

    // handle auto-focus behavior
    useEffect(() => {
        const focusInput = () => {
            if (inputRef.current && document.activeElement !== inputRef.current) {
                inputRef.current.focus();
            }
        };
        const isNotMobile = window.matchMedia('(min-width: 768px)').matches;
        // if not on a mobile device, always focus the input
        // on mobile devices, don't automatically focus, allow for tap-to-focus behavior
        if (isNotMobile) {
            document.addEventListener('click', focusInput);
            document.addEventListener('focusin', focusInput);
            // cleanup event listeners on component unmount
            return () => {
                document.removeEventListener('click', focusInput);
                document.removeEventListener('focusin', focusInput);
            };
        }
    }, []);


    return (
        <div className="relative w-full max-w-full max-h-full" style={{ aspectRatio: '1352 / 1140' }}>
            <img
                src="/keyboard-man/computer.png"
                alt="computer"
                className="w-full h-full object-contain"
                draggable="false"
            />

            {/* text input overlay */}
            <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(event) => {
                    const disabledKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                    if (disabledKeys.includes(event.key)) {
                        event.preventDefault();
                    }
                    if (event.key === 'Backspace') {
                        if (inputValue.endsWith('% ')) {
                            event.preventDefault();
                        }
                    }
                }}
                spellCheck="false"

                className="textarea-terminal absolute top-1/2 left-1/2 -translate-x-[68%] -translate-y-[87%] w-7/12 h-[41%] p-2 focus:outline-none bg-transparent overflow-hidden resize-none"
            ></textarea>
        </div>
      
    );
};

export default Computer;

