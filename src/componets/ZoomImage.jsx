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
            className="w-[100%] h-[400px] bg-no-repeat bg-cover border overflow-hidden"
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: isZoomed ? '200%' : 'cover',
                backgroundPosition: backgroundPos,
            }}
        >
            {!isZoomed && <img src={src} alt="Product" className="  object-cover" />}
        </div>
    );
};
export default ZoomImage;
