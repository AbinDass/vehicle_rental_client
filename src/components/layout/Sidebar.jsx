import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Sidebar = ({isOpen, setIsOpen}) => {
    return (
        <div className="flex">
            <div
                className={`fixed inset-0 bg-common-blue z-50 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col w-64 h-full md:w-1/4`}
            >
                <div onClick={()=> setIsOpen(!isOpen)} className="flex justify-end items-center px-10 py-10 text-white"> <FaRegWindowClose size={30} /> </div>
                <ul className="flex flex-col mt-16 md:mt-0 gap-10 items-start text-white text-lg p-10">
                    <li className="cursor-pointer hover:text-navigationHover">home</li>
                    <li className="cursor-pointer hover:text-navigationHover">cars</li>
                    <li className="cursor-pointer hover:text-navigationHover">bikes</li>
                    <li className="cursor-pointer hover:text-navigationHover">about</li>
                    <li className="cursor-pointer hover:text-navigationHover">contact</li>
                    <li className="cursor-pointer hover:text-navigationHover">wishlist</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
