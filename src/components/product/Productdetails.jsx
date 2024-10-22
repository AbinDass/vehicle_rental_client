import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
const Productdetails = () => {
    const { id } = useParams();
    const allProduct = useSelector((state) => state?.vehicle?.data);
    console.log(allProduct, `detail`);
    const product = allProduct.find((product) => product._id === id);

    const [mainImage, setMainImage] = useState(product?.image);

    const changeImage = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto py-6">
                <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg p-4">
                    <div className="flex flex-col items-center md:w-1/2">
                        <img
                            id="main-image"
                            src={mainImage}
                            alt="Main Product"
                            className="w-full h-72 object-cover mb-4 rounded"
                        />
                        <div className="flex gap-2 flex-wrap justify-center">
                            {product.image.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => changeImage(image)}
                                    className="w-12 h-12 object-cover cursor-pointer border-2 border-transparent hover:border-blue-500 rounded"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-4">
                        <ReactPlayer url={product?.youtubeShorsts} className="w-full rounded-lg mb-4" controls={true} />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <h1 className="text-2xl font-bold">{product?.model}</h1>
                <p className="text-lg mt-2">${product?.price}</p>
                <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                        <p>Year:</p>
                        <p>{product?.manufacture_year}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Color:</p>
                        <p>{product?.color}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Brand:</p>
                        <p>{product?.brand}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Fuel Type:</p>
                        <p>{product?.fuel_type}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Transmission:</p>
                        <p>{product?.transmission}</p>
                    </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-2 w-full">
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300 w-full md:w-auto">
                        Add to Wishlist
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 w-full md:w-auto">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Productdetails;
