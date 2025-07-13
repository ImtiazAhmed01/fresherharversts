// "use client";

// import { Heart, ShoppingCart, Star } from "lucide-react";
// import { useState } from "react";

// interface ProductDetails {
//     id: string;
//     productName: string;
//     description: string;
//     stock: number;
//     images: string[]; // ✅ FIXED: should be an array
//     price: number;
//     categoryId?: string;
// }

// interface ViewProps {
//     details: {
//         data: ProductDetails;
//     };
// }

// const View = ({ details }: ViewProps) => {
//     const { description, stock, images, price, productName } = details.data;

//     const [quantity, setQuantity] = useState<number>(1);

//     const handleQuantity = (action: "inc" | "dec") => {
//         setQuantity((prev) => (action === "inc" ? prev + 1 : Math.max(1, prev - 1)));
//     };

//     return (
//         <div className="container my-8 mt-20">
//             <div className="flex flex-col md:flex-row p-6 max-w-4xl mx-auto">
//                 {/* Product Image */}
//                 <div className="flex-1 border border-fh-gray-50 rounded-xl p-5 flex justify-center items-center">
//                     <img
//                         src={images?.[0]} // ✅ show first image if exists
//                         alt={productName}
//                         className="rounded-xl w-full object-contain"
//                     />
//                 </div>

//                 {/* Product Details */}
//                 <div className="flex-1 mt-6 md:mt-0 md:ml-8">
//                     <span className="text-lg bg-fh-gray-20 text-fh-green px-2 py-1 rounded-lg font-medium">
//                         Fruits
//                     </span>

//                     <h2 className="text-5xl font-bold mt-2">{productName}</h2>

//                     <div className="flex items-center text-[#FFB848] mt-3">
//                         {[...Array(5)].map((_, i) => (
//                             <Star key={i} size={18} fill="currentColor" />
//                         ))}
//                         <span className="text-sm text-gray-600 ml-2">(5 reviews)</span>
//                     </div>

//                     <p className="text-xl font-semibold text-red-600 mt-3">${price}/kg</p>

//                     <p className="text-gray-600 mt-4 text-sm">{description}</p>

//                     {/* Quantity and Actions */}
//                     <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                         <div className="flex items-center">
//                             <span className="text-lg font-medium">Quantity</span>
//                             <div className="join mx-2">
//                                 <button
//                                     className="join-item btn text-xl font-bold"
//                                     onClick={() => handleQuantity("dec")}
//                                 >
//                                     -
//                                 </button>
//                                 <button className="join-item btn">{quantity}</button>
//                                 <button
//                                     className="join-item btn text-xl font-bold"
//                                     onClick={() => handleQuantity("inc")}
//                                 >
//                                     +
//                                 </button>
//                             </div>
//                             <span className="text-sm text-gray-600">/kg</span>
//                         </div>
//                     </div>

//                     <div className="sm:flex gap-5 mt-10">
//                         <button className="flex items-center justify-center gap-2 text-lg w-full sm:w-auto mb-4 sm:mb-0 font-medium px-4 py-2 bg-fh-gray-50 text-gray-700 rounded-lg hover:bg-gray-300">
//                             <Heart size={18} /> Save as favorite
//                         </button>

//                         <button className="flex items-center justify-center gap-2 text-lg w-full sm:w-auto font-medium px-5 py-2 bg-fh-primary text-white rounded-lg hover:bg-orange-600">
//                             <ShoppingCart size={18} /> Add to cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default View;
"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export interface ProductDetails {
    id: string;
    productName: string;
    description: string;
    stock: number;
    images: string[];
    price: number;
    categoryId?: string;
}

interface ViewProps {
    details: ProductDetails;
}

const View = ({ details }: ViewProps) => {
    const { description, stock, images, price, productName } = details;

    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantity = (action: "inc" | "dec") => {
        setQuantity((prev) => (action === "inc" ? prev + 1 : Math.max(1, prev - 1)));
    };

    return (
        <div className="container my-8 mt-20">
            <div className="flex flex-col md:flex-row p-6 max-w-4xl mx-auto">
                {/* Product Image */}
                <div className="flex-1 border border-fh-gray-50 rounded-xl p-5 flex justify-center items-center">
                    <img
                        src={images?.[0]}
                        alt={productName}
                        className="rounded-xl w-full object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1 mt-6 md:mt-0 md:ml-8">
                    <span className="text-lg bg-fh-gray-20 text-fh-green px-2 py-1 rounded-lg font-medium">
                        Fruits
                    </span>

                    <h2 className="text-5xl font-bold mt-2">{productName}</h2>

                    <div className="flex items-center text-[#FFB848] mt-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">(5 reviews)</span>
                    </div>

                    <p className="text-xl font-semibold text-red-600 mt-3">${price}/kg</p>

                    <p className="text-gray-600 mt-4 text-sm">{description}</p>

                    {/* Quantity and Actions */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center">
                            <span className="text-lg font-medium">Quantity</span>
                            <div className="join mx-2">
                                <button
                                    className="join-item btn text-xl font-bold"
                                    onClick={() => handleQuantity("dec")}
                                >
                                    -
                                </button>
                                <button className="join-item btn">{quantity}</button>
                                <button
                                    className="join-item btn text-xl font-bold"
                                    onClick={() => handleQuantity("inc")}
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-sm text-gray-600">/kg</span>
                        </div>
                    </div>

                    <div className="sm:flex gap-5 mt-10">
                        <button className="flex items-center justify-center gap-2 text-lg w-full sm:w-auto mb-4 sm:mb-0 font-medium px-4 py-2 bg-fh-gray-50 text-gray-700 rounded-lg hover:bg-gray-300">
                            <Heart size={18} /> Save as favorite
                        </button>

                        <button className="flex items-center justify-center gap-2 text-lg w-full sm:w-auto font-medium px-5 py-2 bg-fh-primary text-white rounded-lg hover:bg-orange-600">
                            <ShoppingCart size={18} /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
