import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {

    const starsRef = useRef(null);
    const blobContainerRef = useRef(null);

    useEffect(() => {
        // Create twinkling stars
        const createStars = () => {
            const starsContainer = starsRef.current;
            if (!starsContainer) return;

            for (let i = 0; i < 30; i++) {
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

        // Create floating blobs
        const createBlobs = () => {
            const blobContainer = blobContainerRef.current;
            if (!blobContainer) return;

            for (let i = 0; i < 2; i++) {
                const blob = document.createElement('div');
                blob.className = 'blob';
                
                // Random size
                const size = Math.random() * 300 + 200;
                blob.style.width = `${size}px`;
                blob.style.height = `${size}px`;
                
                // Random position
                blob.style.left = `${Math.random() * 100}%`;
                blob.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration
                blob.style.setProperty('--duration', `${Math.random() * 10 + 10}s`);
                
                blobContainer.appendChild(blob);
            }
        };

        createStars();
        createBlobs();

        return () => {
            if (starsRef.current) starsRef.current.innerHTML = '';
            if (blobContainerRef.current) blobContainerRef.current.innerHTML = '';
        };
    }, []);

    return (
        <>
            <div ref={starsRef} className="stars relative -z-50" />
            {/* <div ref={blobContainerRef} className="blob-container relative -z-10" /> */}
        </>
    );
};

export default InteractiveBackground;
