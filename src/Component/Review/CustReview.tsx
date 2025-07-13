"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import SecHeader from "../SecHeader";

const CustReview: React.FC = () => {
    return (
        <div className="my-20 bg-white">
            <div className="relative container mx-auto px-4">
                <div>
                    <Image
                        src="/assets/images/pata.png" // Updated to a leaf image
                        width={40}
                        height={40}
                        className="absolute top-[-20px] left-0 z-10"
                        alt="Leaf decoration"
                    />
                </div>

                <div>
                    <Image
                        src="/assets/images/pata.png" // Updated to a leaf image
                        width={40}
                        height={40}
                        className="absolute top-[-20px] right-0 z-10"
                        alt="Leaf decoration"
                    />
                </div>

                {/* Section Header */}
                <SecHeader
                    subTitle="Testimonial"
                    title="What Our Customers Say"
                    description="Don’t just take our word for it—here’s what some of our customers have to say about their experience with Fresh Harvest"
                />

                {/* Testimonial Section */}
                <div className="mt-10 flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        {/* Avatar */}
                        <div className="w-1/3 flex justify-center">
                            <Image
                                src="/assets/images/reviewer.png"
                                width={200}
                                height={200}
                                className="rounded-full object-cover"
                                alt="Customer"
                            />
                        </div>

                        {/* Testimonial */}
                        <div className="w-2/3 md:pl-10">
                            <div className="bg-gray-100 p-6 rounded-xl max-w-md">
                                <p className="text-gray-700">
                                    "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                                </p>
                                <h4 className="mt-4 text-lg font-medium text-gray-900">
                                    Jane Doe - Professional chef
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustReview;