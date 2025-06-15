import React, { useState, useRef } from 'react';

const ZoomImage = ({ src }) => {
    const [backgroundPos, setBackgroundPos] = useState('center');
    const [isZoomed, setIsZoomed] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            className="w-full sm:w-4/5 md:w-[57%] lg:w-1/2 xl:w-[100%] h-[300px] sm:h-[450px] md:h-[400px] bg-no-repeat bg-cover border rounded-md overflow-hidden transition-all duration-300 ease-in-out"
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: isZoomed ? '200%' : 'cover',
                backgroundPosition: backgroundPos,
                transition: 'background-size 0.3s ease, background-position 0.3s ease',
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
            }}
        >
            {!isZoomed && (
                <img
                    src={src}
                    alt="Zoomable"
                    className="w-full h-full object-cover block sm:hidden"
                />
            )}
        </div>
    );
};

export default ZoomImage;
