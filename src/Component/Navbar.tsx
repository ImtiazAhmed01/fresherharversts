'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const isActive = (path: string) =>
        activePath === path ? "border-b-2 border-[#749B3F]" : "";


    return (
        <nav
            className="w-ful bg-cover"
            style={{ backgroundImage: "url('https://i.ibb.co/JWNqpJNJ/navbar1.png')" }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href={"/"}>
                        <Image
                            src="/assets/images/logo-icon.png"
                            alt="Logo"
                            width={6}
                            height={6}
                        />
                    </Link>
                    <span className="text-xl font-bold text-gray-800">Fresh Harvests</span>
                </div>


                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="mt-3">
                        <a href="/" className={`hover:text-[#749B3F] ${isActive("/")}`}>
                            Home
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/about" className={`hover:text-[#749B3F] ${isActive("/about")}`}>
                            About
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/portfolio" className={`hover:text-[#749B3F] ${isActive("/portfolio")}`}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mt-3">
                        <a href="/blog" className={`hover:text-[#749B3F]  ${isActive("/blog")}`}>
                            Blog
                        </a>
                    </li>
                </ul>


                <div className="flex -mr-44 items-center gap-5 z-10">
                    <Link href="/favorites" className="flex items-center gap-1 text-gray-600 hover:text-green-700">
                        <img src="https://img.icons8.com/ios-filled/24/like--v1.png" className="w-5 h-5" />
                        <span className="hidden md:inline">Favorites</span>
                    </Link>

                    <Link href="/cart" className="relative flex items-center gap-1 text-gray-600 hover:text-green-700">
                        <img src="https://img.icons8.com/ios-filled/24/shopping-cart.png" className="w-5 h-5" />
                        <span className="hidden md:inline">Cart</span>

                    </Link>

                    <Link href="/signin">
                        <button className="px-4 py-1 border border-white b-white text-white font-medium rounded-md hover:bg-green-50">
                            Sign in
                        </button>
                    </Link>


                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2}
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>


            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-3 text-gray-700">
                        <li><Link href="/" className={`hover:text-green-700 ${isActive("/")}`}>Home</Link></li>
                        <li><Link href="/shop" className={`hover:text-green-700 ${isActive("/shop")}`}>Shop</Link></li>
                        <li><Link href="/about" className={`hover:text-green-700 ${isActive("/about")}`}>About us</Link></li>
                        <li><Link href="/blog" className={`hover:text-green-700 ${isActive("/blog")}`}>Blog</Link></li>
                        <li><Link href="/favorites" className="hover:text-green-700">Favorites</Link></li>
                        <li><Link href="/cart" className="hover:text-green-700">Cart</Link></li>
                        <li><Link href="/signin" className="hover:text-green-700">Sign in</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
