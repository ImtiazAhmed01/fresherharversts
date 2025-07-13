"use client";

import React from "react";
import Image from "next/image";

const Offer: React.FC = () => {
    return (
        <div className="bg-gray-100 py-[90px] lg:px-16">
            <div className="container">
                <div className="md:flex items-center">

                    <div className="md:w-3/4">
                        <div className="text-center md:text-left">
                            <h3 className=" inline-block px-2 rounded-sm bg-[#749B3F]/10 text-[#749B3F] font-semibold md:text-xl">
                                Special Offer
                            </h3>
                            <h2 className="text-block text-5xl md:text-6xl font-bold my-4">
                                Seasonal Fruit Bundle
                            </h2>
                            <h4 className="text-block text-4xl max-w-md font-semibold mb-5">
                                Discount up to <span className="text-primary">80% OFF</span>
                            </h4>


                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 bg-white border border-gray-50 rounded-box">
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 15 } as React.CSSProperties}>15</span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-white border border-gray-50 rounded-box">
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 10 } as React.CSSProperties}>10</span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-white border border-gray-50 rounded-box">
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 24 } as React.CSSProperties}>24</span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-white border border-gray-50 rounded-box">
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": 59 } as React.CSSProperties}>59</span>
                                    </span>
                                    sec
                                </div>
                            </div>

                            <button className="btn rounded-4xl text-2xl mt-6 font-semibold text-white py-6 bg-green-700">
                                CODE: <span className="text-yellow-400">FRESH28</span>
                            </button>
                        </div>
                    </div>


                    <div className="hidden md:block relative">
                        <div>
                            <Image
                                src="/assets/images/pata.png"
                                width={60}
                                height={10}
                                className="absolute top-[-50px] rotate-180 left-[-60px] z-11"
                                alt="decorative leaf"
                            />
                        </div>
                        <Image
                            src="/assets/images/seasonal.png"
                            width={500}
                            height={500}
                            className="mt-16 ml-[-100px]"
                            alt="seasonal fruit"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
