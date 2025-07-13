import SecHeader from "@/Component/SecHeader";
import Image from "next/image";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div className="mb-28">
            <div className="container relative">
                <div className="hidden md:block">
                    <Image
                        src={"/assets/pata.png"}
                        width={60}
                        height={10}
                        className="absolute top-5 right-25 z-11"
                        alt="no image"
                    />
                </div>
                <SecHeader
                    subTitle={"Our Blog"}
                    title={"Fresh Harvest Blog"}
                    description={
                        "Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
                    }
                />
            </div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mt-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
