import { useEffect, useState, useRef } from 'react';

const KeyboardMan = () => {
    const notTypingSrc = '/keyboard-man/no-type.png';
    const typingSrc = '/keyboard-man/type.png';
    const defaultHandSrc = '/keyboard-man/mouse-hand.png';
    const clickedHandSrc = '/keyboard-man/clicked-hand.png';

    const [manSrc, setManSrc] = useState(notTypingSrc);
    const [handSrc, setHandSrc] = useState(defaultHandSrc);
    const [handPosition, setHandPosition] = useState({ x: 20, y: -10 });

    // constraints for the hand movement
    const minX = -10; // minimum x position
    const maxX = 20;  // maximum x position
    const minY = -30; // minimum y position
    const maxY = 30;  // maximum y position

    const lastTouch = useRef({ x: 0, y: 0 }); // To store the last touch position

    useEffect(() => {
        // typing handlers
        const handleKeyDown = () => setManSrc(typingSrc);
        const handleKeyUp = () => setManSrc(notTypingSrc);

        // click handlers
        const handlePointerDown = () => setHandSrc(clickedHandSrc);
        const handlePointerUp = () => setHandSrc(defaultHandSrc);

        // mouse movement handlers
        const handleMouseMove = (event) => {
            const moveX = Math.max(minX, Math.min(maxX, handPosition.x - event.movementY * 0.3));
            const moveY = Math.max(minY, Math.min(maxY, handPosition.y + event.movementX * 0.2));
            setHandPosition({ x: moveX, y: moveY });
        };
        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const moveX = Math.max(minX, Math.min(maxX - 20, handPosition.x - (touch.screenY - lastTouch.current.y) * 0.2));
                const moveY = Math.max(minY + 20, Math.min(maxY - 20, handPosition.y + (touch.screenX - lastTouch.current.x) * 0.2));
                setHandPosition({ x: moveX, y: moveY });
                lastTouch.current = { x: touch.screenX, y: touch.screenY };
            }
        };

        // event listeners
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('mousedown', handlePointerDown);
        window.addEventListener('mouseup', handlePointerUp);
        window.addEventListener('touchstart', handlePointerDown);
        window.addEventListener('touchend', handlePointerUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        // cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('mousedown', handlePointerDown);
            window.removeEventListener('mouseup', handlePointerUp);
            window.removeEventListener('touchstart', handlePointerDown);
            window.removeEventListener('touchend', handlePointerUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [handPosition]);

    return (
        <div className="relative min-w-0 min-h-0">
            <img
                src={manSrc}
                draggable="false"
                className="relative z-30 w-full h-auto  max-w-full max-h-full object-contain"
            />
            <img
                src={handSrc}
                className="absolute w-1/2 z-10 "
                draggable="false"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(${-100 + handPosition.x}%), calc(${-70 + handPosition.y}%))`
                }}
            />
        </div>
    );
};

export default KeyboardMan;


