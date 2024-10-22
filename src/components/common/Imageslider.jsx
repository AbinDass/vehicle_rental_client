import React, { useState } from "react";

const ImageSlider = ({ images, content }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[500px] p-10 box-border bg-common-white rounded-lg">
            <div className="overflow-hidden relative w-full h-full rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="absolute rounded-lg inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center capitalize">
                    <div className="text-white text-center p-10">
                        <h1 className="text-4xl font-bold">{content}</h1>
                        <p className="mt-2 text-xl">choose best collection of cars </p>
                    </div>
                </div>
            </div>
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
            >
                &#10094;
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;
