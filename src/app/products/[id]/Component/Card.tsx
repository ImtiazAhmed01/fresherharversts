"use client";
import { ProductContext } from "@/ContextApi/ProductContext";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";

interface ProductType {
    _id: string;
    id: string;
    productName: string;
    images: string[];
    price: number;
    stock?: number;
    description?: string;
    categoryId?: string;
}

interface CardProductProps {
    product: ProductType;
}

const Card = ({ product }: CardProductProps) => {
    const { cartAdd, setCartAdd } = useContext(ProductContext);
    const { productName, images, price } = product;

    const handleAddProduct = (productItem: ProductType) => {
        const alreadyAdded = cartAdd.find((cart: ProductType) => cart._id === productItem._id);
        if (!alreadyAdded) {
            setCartAdd([...cartAdd, productItem]);
        } else {
            toast.error("Already added your product", { duration: 4000 });
        }
    };

    return (
        <div className="card group cursor-pointer bg-base-100 md:pt-3 pt-2 rounded-xl shadow-sm mb-2 md:p-3 p-2 py-0">
            <figure className="p-10 bg-fh-gray-20 rounded-xl">
                <img
                    src={images?.[0] || "/placeholder.png"}
                    alt={productName}
                    className="rounded-xl h-[100px] group-hover:scale-125 transition duration-300 ease-in-out object-contain"
                />
            </figure>
            <div className="card-body px-0 pb-1 items-center mt-[-10px] text-center mb-0">
                <h2 className="text-lg font-medium">{productName}</h2>
                <p className="text-fh-gray-100 text-lg">${price}/kg</p>
                <div className="card-actions w-full">
                    <button
                        onClick={() => handleAddProduct(product)}
                        className="btn btn-sm md:btn-md hover:bg-fh-primary duration-300 ease-in-out btn-block border border-fh-gray-50"
                    >
                        Add To Cart
                    </button>
                    <Link
                        href={`/api/v1/products/${product._id}`}
                        className="text-center text-fh-primary text-md font-medium w-full underline"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
