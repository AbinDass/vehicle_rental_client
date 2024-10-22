import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/slice/userslice";
const MiniNavbar = () => {
    const isAuth = useSelector((state) => state?.user?.Tokens.accessToken);
    const userIs = useSelector((state) => state?.user?.data[0]?.name);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(removeUser());
    };
    return (
        <div className="bg-common-blue w- flex justify-center md:justify-end  items-center gap-5 h-12  text-white md:px-10 capitalize">
            {!isAuth ? (
                <Link to="/auth">
                    <div className="flex items-center gap-2">
                        <AiOutlineLogin /> login
                    </div>
                </Link>
            ) : (
                <Link to="/auth">
                    <div className="flex items-center gap-2" onClick={() => logOut()}>
                        <AiOutlineLogout /> logout
                    </div>
                </Link>
            )}
            {!isAuth ? (
                <Link to="/auth">
                    <div className="flex items-center gap-2">
                        <FaUser /> signup
                    </div>
                </Link>
            ) : (
                <div className="flex items-center gap-2">
                    <FaUser /> {userIs}
                </div>
            )}
        </div>
    );
};

export default MiniNavbar;
