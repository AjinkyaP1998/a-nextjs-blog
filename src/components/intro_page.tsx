'use client'

import React from 'react';
import Image from 'next/image';

function IntroPage() {
    return (
        <div className="intro-page">
            <div className="flex items-center justify-center w-full">
                <div className="w-1/2 flex items-center justify-center">
                    <div className="text-center" >
                        <h1 className="intro-page-text">
                            Journey through the History of Global Politics. Uncover key events, alliances, and conflicts that have shaped our world. 
                            See how past decisions echo in today&apos;s international landscape...
                        </h1>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center p-5">
                    <div className="intro-image-container">
                        <Image
                            src="/intro_image.webp"
                            alt="Introduction Image"
                            layout="responsive"
                            width={5}
                            height={4}
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroPage;
