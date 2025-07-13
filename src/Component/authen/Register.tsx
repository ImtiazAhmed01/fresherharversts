"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import Social from "./Social";

interface RegisterResponse {
    success: boolean;
    message: string;
    data: any;
}

const Register = () => {
    const router = useRouter();
    const [fullName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const payload = { fullName, email, password };

        try {
            const res = await axios.post<RegisterResponse>(
                `http://localhost:3001/api/v1/users/register`,
                payload
            );

            const data = res.data;

            if (data.success) {
                setLoading(false);


                document.cookie = `user=${encodeURIComponent(
                    JSON.stringify(data.data)
                )}; path=/; max-age=${60 * 60 * 24 * 7}`;

                const registerModal = document.getElementById(
                    "register"
                ) as HTMLDialogElement | null;
                registerModal?.close();

                toast.success("Successfully registered!", { duration: 3000 });

                setPassword("");
                setUserName("");
                setEmail("");

                window.location.reload();
                router.push("/");
            }
        } catch (error) {
            setLoading(false);
            toast.error("Authentication failed");
        }
    };

    return (
        <div className="flex items-center justify-center p-2">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                            value={fullName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md transition duration-200"
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>
                </form>

                <div className="relative flex items-center my-3">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">
                        Or Sign in with
                    </span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                <Social />

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            onClick={() => {
                                const registerModal = document.getElementById(
                                    "register"
                                ) as HTMLDialogElement | null;
                                const loginModal = document.getElementById(
                                    "login"
                                ) as HTMLDialogElement | null;
                                registerModal?.close();
                                loginModal?.showModal();
                            }}
                            className="text-fh-primary underline hover:underline cursor-pointer"
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
