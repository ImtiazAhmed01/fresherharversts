"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
// import Stores from "@/Component/Stores"

export default function Footer() {
    const pathname = usePathname();
    if (pathname.includes("dashboard")) return null;

    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="max-w-8xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            width={170}
                            height={80}
                            alt="Fresh Harvests logo"
                        />
                    </Link>
                    <h5 className="mt-8 font-semibold text-lg">Download App:</h5>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 space-y-3 sm:space-y-0">
                        <Image
                            width={130}
                            height={40}
                            src="/assets/images/apple.png"
                            alt="App Store"
                        />
                        <Image
                            width={130}
                            height={40}
                            src="/assets/images/google.png"
                            alt="Google Play"
                        />
                        {/* <Stores></Stores> */}
                    </div>
                </div>
                <div>
                    <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-green-700">Home</Link></li>
                        <li><Link href="/shop" className="hover:text-green-700">Shop</Link></li>
                        <li><Link href="/about" className="hover:text-green-700">About</Link></li>
                        <li><Link href="/blog" className="hover:text-green-700">Detail Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-xl font-semibold mb-4">Account</h6>
                    <ul className="space-y-2">
                        <li><Link href="/favorites" className="hover:text-green-700">Favorites</Link></li>
                        <li><Link href="/cart" className="hover:text-green-700">Cart</Link></li>
                        <li><Link href="/signin" className="hover:text-green-700">Sign In</Link></li>
                        <li><Link href="/register" className="hover:text-green-700">Register</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-xl font-semibold mb-4">Contact Us</h6>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <IoIosCall className="text-green-600 text-xl" />
                            <span>1234 5678 90</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoMailOutline className="text-green-600 text-xl" />
                            <span>Freshharvests@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoLocationOutline className="text-green-600 text-xl" />
                            <span>Tanjung Sari Street, Pontianak, Indonesia</span>
                        </li>
                    </ul>

                    <h6 className="font-semibold text-lg mt-6">Accepted Payments:</h6>
                    <div className="flex gap-4 mt-3">
                        <Image
                            src="/assets/images/paymentLogo/pay1.png"
                            width={95}
                            height={67}
                            alt="Visa"
                            className="h-16"
                        />
                        <Image
                            src="/assets/images/paymentLogo/pay2.png"
                            width={95}
                            height={60}
                            alt="MasterCard"
                            className="h-16"
                        />
                        <Image
                            src="/assets/images/paymentLogo/pay3.png"
                            width={95}
                            height={65}
                            alt="bKash"
                            className="h-16"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Fresh Harvests — All rights reserved by Banana Studio</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="w-10 h-10 bg-green-700 text-white rounded-full flex justify-center items-center"
                        >
                            <FaTwitter className="text-xl" />
                        </Link>
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            className="w-10 h-10 bg-green-700 text-white rounded-full flex justify-center items-center"
                        >
                            <FaFacebookF className="text-xl" />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="w-10 h-10 bg-green-700 text-white rounded-full flex justify-center items-center"
                        >
                            <FaInstagram className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
