import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ product, onAddToWishlist, onAddToCart }) => {
    return (
        <div className=" flex flex-col justify-center items-center  max-w-xs mx-auto bg-gray-400 bg-opacity-10 backdrop-blur-md  rounded-lg shadow-lg overflow-hidden p-6">
            <img src={product?.image[0]} alt={product?.name} className=" h-48 w-60 object-cover rounded-lg" />
            <div className="mt-4 cursor-pointer">
                <h3 className="text-lg font-semibold ">{product?.model}</h3>
                <p className=" mt-2">${product?.price}</p>
                <div className=" flex justify-around">
                    <p className=" mt-2">{product?.manufacture_year}</p>
                    <p className=" mt-2">{product?.color}</p>
                </div>
                <div className=" flex justify-around">
                    <p className=" mt-2">{product?.brand}</p>
                    <p className=" mt-2">{product?.fuel_type}</p>
                </div>
                <div className=" flex justify-around">
                    <p className=" mt-2">{product?.transmission}</p>
                    <p className=" mt-2">{product?.fuel_type}</p>
                </div>
            </div>

            <div className="mt-4 flex gap-2 justify-between">
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
                    onClick={() => onAddToWishlist(product?.id)}
                >
                    Add to Wishlist
                </button>
                <Link
                    to={`/product/${product._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Productcard;
