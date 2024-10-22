import React from "react";

const Brandslider = () => {
    const brands = [
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
        {
            name: `maruthi`,
            image: `https://www.v3cars.com/media/content/141133ferrari.webp`,
        },
    ];
    return (
        <>
            <div className="p-8  bg-common-blue shadow-lg text-center capitalize">
                <h1 className="text-4xl font-bold text-white mb-4">Top available Brands</h1>
                <p className="text-lg text-gray-300">go through the brands</p>
            </div>
            <div
                id="Slider"
                className=" flex gap-5 mb-5 py-10 overflow-x-scroll grab scroll whitespace-nowrap scroll-smooth rounded-lg p-10"
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="brand_card bg-black/20 min-w-[200px] md:min-w-[200px] md:max-w-[200px] flex flex-col justify-center items-center  rounded-xl space-y-5"
                    >
                        <div className="card_image">
                            <img
                                src={brand.image}
                                alt="/"
                                className="rounded min-w-[200px] md:min-w-[200px] md:max-w-[200px]"
                            />
                        </div>
                        {/* <div className="card_content flex flex-col justify-center items-center text-white  font-medium text-xl w-[200px]">
        
                                                <div className="flex gap-2">
                                                    <h1 className="text-white font-headings"> {brand.name}</h1>
                                                </div>
                                            
                                        </div> */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Brandslider;
