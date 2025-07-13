import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = () => {
    return (
        <div>
            <div className="card px-5 group cursor-pointer bg-base-100 pt-3 border-none mb-2  py-0">
                <figure className="rounded-xl">
                    <img
                        src={"/assets/images/blog.jpg"}
                        alt="no image"
                        className="rounded-xl group-hover:scale-125 transition duration-300 ease-in-out"
                    />
                </figure>
                <div className=" py-6 px-0 pb-4 items-center text-left mt-[-10px]  mb-0">
                    <p className="text-fh-gray-100 text-lg">May 23, 2024</p>
                    <h2 className=" text-lg font-medium">
                        Exploring Seasonal Delights: A Guide to What's Fresh Right Now
                    </h2>
                    <div className="card-actions w-full mt-2">
                        <Link
                            href={""}
                            className=" underline text-orange-600 text-lg font-semibold flex gap-3 items-center"
                        >
                            Read More <FaArrowRightLong className="mt-1  text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
