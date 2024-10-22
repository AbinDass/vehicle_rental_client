import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../services/api/user/logIn";
import { setUser } from "../../redux/slice/userslice";

const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const isAuth = useSelector((state) => state?.user?.Tokens.accessToken);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await logIn({ email, password });
        console.log(response, "here iam ");
        if (response.data.success === true) {
            dispatch(setUser(response.data));
            if (isAuth) {
                navigate("/");
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            {/* <h2 className="text-2xl font-bold mb-6 text-center">Login</h2> */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Login
            </button>
        </form>
    );
};

export default Loginform;
