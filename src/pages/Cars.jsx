import React from "react";
import Productcard from "../components/product/Productcard";
import { useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";

const Cars = () => {
    const allProduct = useSelector((state) => state?.vehicle?.data);
    const cars = allProduct?.filter((vehicle) => vehicle.vehicleType === "car");
    return (
      <>
      <div className="py-3">
      <Navbar />
      </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cars?.map((product) => (
                    <Productcard key={product._id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
};

export default Cars;
