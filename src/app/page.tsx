import BannerSalad from "@/Component/BannerSalad";
import Image from "next/image";
import Stores from "@/Component/Stores"
import { fetchProducts } from "@/lib/CategoryDataFetch";
import Blogs from "@/Component/Blogs/Blogs";

interface CategoryType {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductType {
  id: string;
  productName: string;
  images: string[];
  price: number;
  categoryId: string;
}
export default async function Hero() {
  // let categories = await CategoryDataFetch();
  let products = await fetchProducts()
  return (
    <div>
      <section className="px-12 pb-12 pt-40 relative">
        <div className="">
          <Image
            src={"/assets/images/bannerpic.jpg"}
            width={700}
            height={500}
            className="absolute hidden xl:block top-3 md:right-0"
            alt="no support image"
          />

        </div>
        <div className="hidden lg:block">
          <Image
            src={"/assets/images/pata-top.png"}
            width={60}
            height={10}
            className="absolute top-28 left-0 z-11"
            alt="no support image"
          />
        </div>
        <div className=" container ">
          <div className=" lg:flex">
            <div className="lg:w-3/5">
              <div className="container">
                <h3 className="bg-gray-100 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl ">
                  Welcome to Fresh Harvest
                </h3>
                <h1 className="text-3xl font-bold xl:text-[80px]">
                  Fresh Fruits and Vegetables
                </h1>
                <p className="py-6 max-w-md">
                  At Fresh Harvests, we are passionate about providing you with
                  the freshest and most flavorful fruits and vegetables
                </p>
                <button className="btn rounded-lg  bg-fh-primary text-lg py-5 text-white px-8">
                  shop Now
                </button>
                <BannerSalad />
                <Stores></Stores>
              </div>
            </div>
            <div className="lg:w-2/5 relative ">
              <div className="hidden lg:block">
                <Image
                  src={"/assets/images/pata.png"}
                  width={60}
                  height={10}
                  className="absolut  top-24 left-10 z-11"
                  alt="no support image"
                />
              </div>
              <div className=" ml-8">
                <Image
                  src={"/assets/images/banner-image.png"}
                  width={880}
                  height={700}
                  className="absolute xl:hidden w-[250] md:w-[400] xl:[880] bottom-[-46px] right-[-20px] md:right-[-20px] z-10 "
                  alt="no support image"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </section>
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};


