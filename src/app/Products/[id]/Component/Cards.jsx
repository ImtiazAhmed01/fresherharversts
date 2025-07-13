"use client";
// import { ProductContext } from "@/contextApi/prodcutContext";
import Link from "next/link";
import { useContext } from "react";
// import toast from "react-hot-toast";
import { ProductContext } from "@/ContextApi/ProductContext"

const CardProduct = ({ product }) => {
    const { cartAdd, setCartAdd } = useContext(ProductContext);
    let { productName, images, price } = product || {};

    const handleAddProduct = (productItem) => {
        console.log(productItem);
        let query = cartAdd.find((cart) => cart.id === productItem.id);
        if (!query) {
            setCartAdd([...cartAdd, productItem]);
        } else {
            toast.error("all ready added your Product", { duration: 4000 });
        }
    };

    console.log(cartAdd);

    return (
        <div className="card group cursor-pointer bg-base-100 md:pt-3 pt-2 rounded-xl shadow-sm mb-2 md:p-3 p-2 py-0">
            <figure className=" p-10 bg-fh-gray-20 rounded-xl">
                <img
                    src={images}
                    alt="product"
                    className="rounded-xl h-[40] md:h-[100] group-hover:scale-125 transition duration-300 ease-in-out"
                />
            </figure>
            <div className="card-body px-0 pb-1 items-center mt-[-10px] text-center mb-0">
                <h2 className=" text-lg font-medium">{productName}</h2>
                <p className="text-fh-gray-100 text-lg">${price}/kg</p>
                <div className="card-actions w-full">
                    <button
                        onClick={() => handleAddProduct(product)}
                        className="btn btn-sm md:btn-md hover:bg-fh-primary duration-300 ease-in-out  btn-block border border-fh-gray-50"
                    >
                        Add To Cart
                    </button>
                    <Link
                        href={`/products/${product.id}`}
                        className="text-center text-fh-primary text-md font-medium w-full underline"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
