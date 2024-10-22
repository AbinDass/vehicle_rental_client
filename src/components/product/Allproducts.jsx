import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { allVehicles } from "../../services/api/product/vehicle";
import { useDispatch, useSelector } from "react-redux";
import { setVehicle } from "../../redux/slice/vehicleSlice";
import Addfilters from "./Addfilters";

const Allproducts = () => {
    const [showFilter, setShowfilter] = useState(false);
    const dispatch = useDispatch();
    const allProduct = useSelector((state) => state?.vehicle?.data);
    async function getAllVehicles() {
        const response = await allVehicles();
        return response;
    }

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await getAllVehicles();
                dispatch(setVehicle(response.data.list));
            } catch (error) {}
        };
        fetchVehicles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="p-8 bg-common-blue shadow-lg text-center capitalize">
                <h1 className="text-4xl font-bold text-white mb-4">see the available vehicles</h1>
                <p className="text-lg text-gray-300">
                    Explore our products and services to learn more about what we offer.
                </p>
            </div>
            <div>
                <div className="flex justify-end p-10">
                    <button onClick={() => setShowfilter(!showFilter)}> add filters </button>
                </div>
                {showFilter ? (
                    <div>
                        <Addfilters />
                    </div>
                ) : null}
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                    {allProduct?.map((product) => (
                        <Productcard key={product._id} product={product} />
                    ))}
                </div>
            </div>
            <div>see more</div>
        </>
    );
};

export default Allproducts;
