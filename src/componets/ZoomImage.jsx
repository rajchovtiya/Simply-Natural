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
