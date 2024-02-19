import React, { useEffect, useState, useRef } from 'react';

const KeyboardMan = () => {
    const defaultSrc = '/keyboard-man/no-type.png';
    const switchSrc = '/keyboard-man/type.png';
    const defaultHandSrc = '/keyboard-man/mouse-hand.png';
    const clickedHandSrc = '/keyboard-man/clicked-hand.png';

    const [currentSrc, setCurrentSrc] = useState(defaultSrc);
    const [handSrc, setHandSrc] = useState(defaultHandSrc);
    const [handPosition, setHandPosition] = useState({ x: 40, y: -20 });

    // Constraints for the hand movement
    const minX = -48; // minimum x position
    const maxX = 65;  // maximum x position
    const minY = -70; // minimum y position
    const maxY = 50;  // maximum y position

    // Ref for the div whose height affects hand movement speed
    const divRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = () => setCurrentSrc(switchSrc);
        const handleKeyUp = () => setCurrentSrc(defaultSrc);
        const handleMouseDown = () => setHandSrc(clickedHandSrc);
        const handleMouseUp = () => setHandSrc(defaultHandSrc);

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const handleMouseMove = (event) => {
            // Calculate movement, but much less than the mouse movement
            const moveX = Math.max(minX, Math.min(maxX, handPosition.x - event.movementY * 0.3));
            const moveY = Math.max(minY, Math.min(maxY, handPosition.y + event.movementX * 0.2));

            setHandPosition({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handPosition]);

    return (
        <div className="flex flex-col">
            <img
                src={handSrc}
                className="w-1/2 z-10"
                draggable="false"
                style={{transform: `translate(${handPosition.x}px, ${handPosition.y}px) translateY(220%) ` }}
            />
            <img
                src={currentSrc}
                alt="Switchable Image"
                draggable="false"
                className="z-20"
            />
        </div>
    );
};

export default KeyboardMan;

