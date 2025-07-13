
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Category from "./Category";
// import SectionHeader from "../SecHeader";
// import ProdCard from "./ProdCard";
// import { CategoryDataFetch } from "@/lib/CategoryDataFetch"
// // import SectionHeader from "./SectionHeader";
// // import ProductCard from "./ProductCard";
// // import { CategoryDataFetch } from "@/utils/api"; // imported from JS file


// interface Product {
//     id: string;
//     productName: string;
//     images: string;
//     price: number;
//     categoryId: string;
// }

// interface CategoryType {
//     id: string;
//     categoryName: string;
//     createdAt: string;
//     updatedAt: string;
// }

// interface Props {
//     product: Product[];
// }

// const HomeProducts: React.FC<Props> = ({ product }) => {
//     const [categories, setCategories] = useState<CategoryType[]>([]);
//     const [active, setActive] = useState<string | null>(null);
//     const [filtered, setFiltered] = useState<Product[]>([]);

//     const defaultProduct = product.slice(0, 8);

//     useEffect(() => {
//         const fetch = async () => {
//             const data = await CategoryDataFetch();
//             setCategories(data);
//         };

//         fetch();
//     }, []);

//     const handleCategory = (id: string | null) => {
//         setActive(id);

//         if (id) {
//             const filteredItems = product.filter((p) => p.categoryId === id);
//             setFiltered(filteredItems);
//         } else {
//             setFiltered(defaultProduct);
//         }
//     };

//     return (
//         <section className="mt-[130px] relative">
//             <div className="container relative">
//                 <Image
//                     src="/assets/pata.png"
//                     width={60}
//                     height={10}
//                     alt="Leaf"
//                     className="absolute top-[-100px] md:right-30 right-5 z-11"
//                 />
//                 <Image
//                     src="/assets/pata.png"
//                     width={60}
//                     height={10}
//                     alt="Leaf"
//                     className="absolute top-[-50px] md:left-25 z-11 rotate-45"
//                 />

//                 <SectionHeader
//                     subTitle="Our Products"
//                     title="Our Fresh Products"
//                     description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
//                 />

//                 <Category
//                     data={categories}
//                     handleCategory={handleCategory}
//                     active={active}
//                 />

//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                     {(active ? filtered : defaultProduct).map((p) => (
//                         <ProdCard key={p.id} product={p} />
//                     ))}
//                 </div>

//                 <div className="text-center mt-6">
//                     <Link
//                         href="/products"
//                         className="btn border text-lg py-4 px-8 font-medium text-fh-primary border-fh-primary btn-outline"
//                     >
//                         See All Products
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HomeProducts;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Category from "./Category";
// import SectionHeader from "../SecHeader";
// import Cards from "@/app/Products/[id]/Component/Cards";

// interface CategoryType {
//     id: string;
//     categoryName: string;
//     createdAt: string;
//     updatedAt: string;
// }

// interface ProductType {
//     id: string;
//     productName: string;
//     images: string[];
//     price: number;
//     categoryId: string;
// }

// interface Props {
//     data: CategoryType[];
//     product: ProductType[];
// }

// export default function HomeProducts({ data, product }: Props) {
//     let [active, setActive] = useState<string | null>(null);
//     let [category, setCategory] = useState<ProductType[]>([]); // State for filtered products
//     console.log("Categories:", data);

//     // Default to all products (no slicing to 8 for now to show all)
//     const defaultProduct = product;

//     // Category-wise filtering logic (commented out as requested)
//     // const handleCategory = (id: string | null) => {
//     //     setActive(id);
//     //     if (id) {
//     //         const filtered = product.filter((p) => p.categoryId === id);
//     //         setCategory(filtered);
//     //     } else {
//     //         setCategory(defaultProduct);
//     //     }
//     // };

//     return (
//         <section className="mt-[130px] relative">
//             <div className="container relative">
//                 <Image
//                     src="/assets/pata.png"
//                     width={60}
//                     height={10}
//                     alt="Leaf"
//                     className="absolute top-[-100px] md:right-30 right-5 z-10"
//                 />
//                 <Image
//                     src="/assets/pata.png"
//                     width={60}
//                     height={10}
//                     alt="Leaf"
//                     className="absolute top-[-50px] md:left-25 z-10 rotate-45"
//                 />

//                 <SectionHeader
//                     subTitle="Our Products"
//                     title="Our Fresh Products"
//                     description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
//                 />

//                 <Category data={data} handleCategory={() => { }} active={active} /> {/* Empty handler since filtering is commented */}

//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                     {/* Display all products initially */}
//                     {defaultProduct.map((product) => (
//                         <Cards key={product.id} product={product} />
//                     ))}
//                 </div>

//                 <div className="text-center mt-6">
//                     <Link
//                         href="/products"
//                         className="btn border text-lg py-4 px-8 font-medium text-fh-primary border-fh-primary btn-outline"
//                     >
//                         See All Products
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/CategoryDataFetch';
import SectionHeader from '../SecHeader';

type Product = {
    id: number;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
};

export default function HomeProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                console.log("Products fetched:", data);
                setProducts(data);
            } catch (err: any) {
                console.error('Product fetch failed:', err.message);
                setError('Failed to load products: ' + err.message);
            }
        };

        loadProducts();
    }, []);

    if (error) return <div className="text-red-500 p-6">{error}</div>;

    return (
        <div>
            <div className='text-center'>
                {/* <h3 className='bg-gray-50 text-[#749B3F] lg:px-96'>Our Products</h3>
                <h1>Our Fresh Product</h1>
                <p>We pride ourselves on offering a wide variety of fresh and flavorful fruits, <br />
                    vegetables, and salad ingredients</p> */}
                <SectionHeader></SectionHeader>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl p-4 shadow hover:shadow-md transition"
                    >
                        <img
                            src={product.images[0]}
                            alt={product.productName}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mt-2">{product.productName}</h2>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
