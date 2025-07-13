import Card from "./[id]/Component/Card";

interface ProductType {
    id: string;
    productName: string;
    images: string[]; // Assuming it's an array
    price: number;
    description?: string;
    stock?: number;
    categoryId?: string;
    [key: string]: any; // Allow additional dynamic fields
}

interface APIResponse {
    success: boolean;
    message: string;
    data: ProductType[];
}

const Page = async () => {
    const res = await fetch(`http://localhost:3001/api/v1/products`, {
        cache: "no-store",
    });

    const data: APIResponse = await res.json();

    return (
        <div className="mb-20 mt-8">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {data.data.map((product) => (
                        <Card product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
