import Link from "next/link";
import React from "react";

interface Product {
    id: string;
    productName: string;
    images: string;
    price: number;
    categoryId?: string;
}

interface Props {
    product: Product;
}

export default function ProdCard({ product }: Props) {
    const { productName, images, price } = product;

    return (
        <div className="card group cursor-pointer bg-base-100 md:pt-3 pt-2 rounded-xl shadow-sm mb-2 md:p-3 p-2 py-0">
            <figure className="p-10 bg-fh-gray-20 rounded-xl">
                <img
                    src={images}
                    alt={productName}
                    className="rounded-xl h-[40px] md:h-[100px] group-hover:scale-125 transition duration-300 ease-in-out"
                />
            </figure>
            <div className="card-body px-0 pb-1 items-center mt-[-10px] text-center mb-0">
                <h2 className="text-lg font-medium">{productName}</h2>
                <p className="text-fh-gray-100 text-lg">${price}/kg</p>
                <div className="card-actions w-full">
                    <Link
                        href={""}
                        className="btn btn-sm md:btn- group-hover:bg-fh-primary duration-300 ease-in-out btn-block border border-fh-gray-50"
                    >
                        Add To Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}


