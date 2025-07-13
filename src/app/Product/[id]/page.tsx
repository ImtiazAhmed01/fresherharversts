import axios from "axios";
import Review from "./component/Review";
import View from "./component/View";
import RelProduct from "./component/RelProduct";

interface PageProps {
    params: {
        id: string;
    };
}

interface ProductType {
    id: string;
    productName: string;
    images: string[];
    price: number;
    description: string;
    stock: number;
    details: string;
    [key: string]: any;
}

interface APIResponse {
    success: boolean;
    message: string;
    data: ProductType[];
}

const Page = async ({ params }: PageProps) => {
    const { id } = params;

    // Get single product details
    const details = await axios.get<{ data: ProductType }>(
        `http://localhost:3001/api/v1/products/${id}`
    );

    // Fetch related products
    const res = await fetch(`http://localhost:3001/api/v1/products`, {
        cache: "no-store",
    });
    const { data }: APIResponse = await res.json();

    const RelatedData = data.slice(0, 4);

    return (
        <div className="mt-10">

            <View details={{ data: details.data.data }} />
            <Review />
            <RelProduct RelatedData={RelatedData} />
        </div>
    );
};

export default Page;
