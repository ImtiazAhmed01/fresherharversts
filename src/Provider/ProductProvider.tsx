"use client";
import { ProductContext } from "@/ContextApi/ProductContext";
import { ReactNode, useState } from "react";

interface ProductType {
    id: string;
    productName: string;
    images: string[];
}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductProvider = ({ children }: ProductProviderProps) => {
    const [cartAdd, setCartAdd] = useState<ProductType[]>([]);

    const valueProvide = {
        cartAdd,
        setCartAdd,
    };

    return (
        <ProductContext.Provider value={valueProvide}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
