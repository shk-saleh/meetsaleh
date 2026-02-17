import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {

    const starsRef = useRef(null);
    const blobContainerRef = useRef(null);

    useEffect(() => {
        // Create twinkling stars
        const createStars = () => {
            const starsContainer = starsRef.current;
            if (!starsContainer) return;

            for (let i = 0; i < 12; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random position
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Random size
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Random animation duration
                star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
                
                starsContainer.appendChild(star);
            }
        };

        createStars();

        return () => {
            if (starsRef.current) starsRef.current.innerHTML = '';
        };
    }, []);

    return (
        <>
            <div ref={starsRef} className="stars relative z-0" />
        </>
    );
};

export default InteractiveBackground;
