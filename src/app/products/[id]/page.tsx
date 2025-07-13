import Review from "./Component/Review";
import View from "./Component/View";
import RelProduct from "./Component/RelProduct";

interface PageProps {
    params: {
        id: string;
    };
}

interface ProductType {
    _id: string;
    productName: string;
    images: string[];
    price: number;
    description: string;
    stock: number;
    details?: string;
    categoryId?: string;
}

interface APIResponse {
    success: boolean;
    message: string;
    data: ProductType[];
}

const Page = async ({ params }: PageProps) => {
    const { id } = params;

    // Fetch single product
    const productRes = await fetch(`http://localhost:3001/api/v1/products/${id}`, {
        cache: "no-store",
    });

    const productJson = await productRes.json();

    console.log("📦 Fetched Product Response JSON:", productJson);

    if (!productJson.success || !productJson.data) {
        console.error(" Failed to fetch product details!");
        return <div>Failed to load product</div>;
    }

    const singleProduct: ProductType = productJson.data;

    console.log(" Parsed Product Object:", singleProduct);

    const res = await fetch(`http://localhost:3001/api/v1/products`, {
        cache: "no-store",
    });

    const relatedJson: APIResponse = await res.json();

    console.log("Related Products Response JSON:", relatedJson);

    const RelatedData = relatedJson.data
        .filter((p) => p._id !== id)
        .slice(0, 4)
        .map((p) => ({
            ...p,
            id: p._id,
        }))

    console.log(" Final RelatedData to pass:", RelatedData);

    return (
        <div className="mt-10">
            <View
                details={{
                    id: singleProduct._id,
                    productName: singleProduct.productName,
                    description: singleProduct.description,
                    stock: singleProduct.stock,
                    images: singleProduct.images,
                    price: singleProduct.price,
                    categoryId: singleProduct.categoryId,
                }}
            />
            <Review />
            <RelProduct RelatedData={RelatedData} />
        </div>
    );
};

export default Page;
