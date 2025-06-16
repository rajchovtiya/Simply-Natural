import React, { useState } from 'react';
import useCartActions from '../logic/Cartlogic';

const ZoomImage = ({ src }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const { backgroundPos, handleMouseMove, containerRef } = useCartActions()


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
