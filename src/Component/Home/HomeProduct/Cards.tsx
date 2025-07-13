import Link from "next/link";

interface ProductType {
    id: string;
    _id: string;
    productName: string;
    images: string[];
    price: number;
}

interface ProductCardProps {
    product: ProductType;
}

const Cards = ({ product }: ProductCardProps) => {
    const { productName, images, price } = product;

    return (
        <div className="card group cursor-pointer bg-base-100 md:pt-3 pt-2 rounded-xl shadow-sm mb-2 md:p-3 p-2 py-0">
            <figure className="p-10 bg-fh-gray-20 rounded-xl">
                <img
                    src={images?.[0] || "/placeholder.png"}
                    alt={productName}
                    className="rounded-xl h-[100px] md:h-[140px] group-hover:scale-125 transition duration-300 ease-in-out object-contain"
                />
            </figure>
            <div className="card-body px-0 pb-1 items-center mt-[-10px] text-center mb-0">
                <h2 className="text-lg font-medium">{productName}</h2>
                <p className="text-gray-100 text-lg">${price}/kg</p>
                <div className="card-actions w-full">
                    <Link
                        href={`/api/v1/products/${product._id}`}
                        className="btn btn-sm md:btn-md btn-outline btn-block hover:bg-orange-600 hover:text-white"
                    >
                        Add To Cart
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Cards;
