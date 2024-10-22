import { useState } from "react";
import { signUp } from "../../services/api/user/signUp";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userslice";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    const isAuth = useSelector((state) => state?.user?.Tokens.accessToken);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmpassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await signUp(formData);
            dispatch(setUser(response.data));
            if (isAuth) {
                alert(`entered`)
                navigate("/");
            }
        } catch (error) {
            console.error("There was an error signing up!", error);
        }
    };
    return (
        <form className="w-full max-w-sm mx-auto " onSubmit={handleSubmit}>
            {/* <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2> */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Signup
            </button>
        </form>
    );
};

export default Signupform;
