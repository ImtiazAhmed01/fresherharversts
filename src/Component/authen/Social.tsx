import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";

const Social: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition duration-200"
                >
                    <span className="font-bold text-lg text-red-500 mr-2">
                        <FcGoogle />
                    </span>
                    Google
                </button>

                <button
                    type="button"
                    className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition duration-200"
                >
                    <span className="font-bold text-lg text-blue-600 mr-2">
                        <FaFacebookF />
                    </span>
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default Social;
