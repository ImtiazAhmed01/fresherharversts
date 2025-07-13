"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import Register from "./Register";
import Social from "./Social";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const payload = { email, password };

        try {
            const res = await axios.post(`https://code-commando.com/api/v1/auth/login`, payload);
            const data = res.data;

            if (data.success) {
                setLoading(false);
                // Save token as cookie
                document.cookie = `token=${data.data.token}; path=/;`;

                // Close modal and notify
                const modal = document.getElementById("login") as HTMLDialogElement;
                modal?.close();
                toast.success("Successfully signed in", { duration: 3000 });

                setEmail("");
                setPassword("");
                window.location.reload();
                router.push("/");
            }
        } catch (error) {
            setLoading(false);
            toast.error("Login failed");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center p-2">
                <div className="max-w-md w-full space-y-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
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

                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="h-4 w-4 text-fh-primary focus:ring-fh-primary border border-fh-primary rounded"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className="text-sm text-fh-primary hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full btn bg-orange-600 text-white py-2 px-4 rounded-md transition duration-200"
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </form>

                    <div className="relative flex items-center my-3">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm">Or Sign in with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <Social />

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <button
                                onClick={() => {
                                    const loginModal = document.getElementById("login") as HTMLDialogElement;
                                    const registerModal = document.getElementById("register") as HTMLDialogElement;
                                    loginModal?.close();
                                    registerModal?.showModal();
                                }}
                                className="text-orange-600 underline hover:underline cursor-pointer"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Register Modal */}
            <dialog id="register" className="modal">
                <div className="modal-box max-w-md">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <div className="py-2">
                        <Register />
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SignIn;
