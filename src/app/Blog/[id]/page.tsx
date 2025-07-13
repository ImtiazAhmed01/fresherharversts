import Review from "./component/Review";
// import View from "./components/View";
import View from "./component/View";
import BlogCard from "./component/BlogCard";

const page = async () => {
    let res = await fetch(`http://localhost:3001/api/v1/products`);
    let { data } = await res.json();
    let RelatedData = data.slice(0, 4);

    return (
        <div className="mt-10">
            <View />
            <Review />
            <BlogCard RelatedData={RelatedData} />
        </div>
    );
};

export default page;
