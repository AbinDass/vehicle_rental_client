import React from "react";
import Navbar from "../components/layout/Navbar";
import Imageslider from "../components/common/Imageslider";
import Searchbar from "../components/common/Searchbar";
import Allproducts from "../components/product/Allproducts";
import Brandslider from "../components/product/Brandslider";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";
// import MiniNavbar from "../components/layout/MiniNavbar";

const Homepage = () => {
    let img1 = `https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg`;
    let img2 = `https://static.toiimg.com/photo/80387978.cms`;
    let img3 = `https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/658e5b5ebba32-xiaomi-su7-ev-to-take-on-tesla-293837105-16x9.jpg?size=948:533`;
    const images = [img1, img2, img3];
    const content = `check our newly added collections`
    return (
        <div>
            {/* <MiniNavbar /> */}
            <div className="h-full md:h-28  bg-common-white sm:flex justify-center sm:justify-between items-center px-20">
                {" "}
                <div className="w-full">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC-mStIH729T9Wp3qELzLrK0YcNpQk7KCco2vPP9JpA&s"
                        alt="/logo"
                        className="h-16 md:h-24"
                    />
                </div>
                <div className="w-full flex justify-center py-5 md:py-0">
                    <Searchbar />
                </div>
                <div className="w-full flex justify-end">
                    <button className="bg-common-blue text-white capitalize font-medium rounded w-32 h-10">
                        need help ?
                    </button>
                </div>
            </div>
            <Navbar />
            <Imageslider images={images} content={content} />
            <Allproducts />
            <Brandslider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Homepage;
