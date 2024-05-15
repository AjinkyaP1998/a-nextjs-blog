'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function IntroPage() {
    const [opacity, setOpacity] = useState(1);  // Starts fully visible

    // Toggle opacity
    useEffect(() => {
        const intervalId = setInterval(() => {
            setOpacity(prev => (prev === 1 ? 0 : 1));  // Toggle between 0 and 1
        }, 6000); // Change opacity every 6 seconds to allow 1 second for full visibility

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="intro-page">
            <div className="relative w-full h-full mx-auto flex">
                <div className="w-1/2 flex items-center justify-center h-full">
                    <div>
                        <h1 className="intro-page-text">
                            Journey through the History of Global Politics. Uncover key events, alliances, and conflicts that have shaped our world. 
                            See how past decisions echo in today&apos;s international landscape...
                        </h1>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="intro-image-container">
                        <Image
                            src="/intro_image.webp"
                            alt="Dark Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="intro-image-fade"
                            style={{ opacity: opacity }}
                        />
                        <Image
                            src="/intro_image.webp"
                            alt="Bright Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="intro-image-fade"
                            style={{ opacity: 1 - opacity }}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="intro-text absolute top-1/3 left-0 right-0 text-center text-black text-6xl font-bold tracking-wide">
                <h1 className="font-serif" style={{ fontFamily: '"Times New Roman", serif' }}>Welcome to the GeoBlog!<br />Explore the world through geopolitics.</h1>
            </div> */}
        </div>
    );
}

export default IntroPage;
