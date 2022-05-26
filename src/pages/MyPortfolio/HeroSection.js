import React from 'react';

const HeroSection = () => {
    return (
        <div id="hero" className="flex items-center justify-center flex-col py-20">
        <div className="text-center">
            <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-primary  font-semibold">
                Hi, This is Ashraf
            </h1>
            <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
            You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development.
            </p>
            <a
                href="#works"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:text-md "
            >
                See Works
            </a>
        </div>
    </div>
    );
};

export default HeroSection;