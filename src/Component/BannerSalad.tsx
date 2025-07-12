import Image from "next/image";

export default function BannerSalad() {
    return (
        <div className="md:flex mt-8 mb-15 lg:my-0 ">
            <div className="hidden lg:block ml-24">
                <Image
                    src={"/assets/images/line.png"}
                    width={100}
                    height={10}
                    alt="Fresh Salad"
                    className="rounded-full"
                />
            </div>
            <div className=" bg-gray-100 md:p-5 p-2 rounded-md lg:rounded-2xl flex items-center space-x-4 w-max lg:ml-10 ">
                <div className="">
                    <p className="text-green-600 font-semibold">Special Offer</p>
                    <h3 className="md:text-3xl text-lg font-bold">Fresh Salad</h3>
                    <p className="md:text-lg text-sm font-semibold md:my-1">
                        <span className="text-green-600  text-md">Up to </span>
                        <span className="md:text-2xl text-sm font-bold">70%</span> off
                    </p>
                    <button
                        type="button"
                        className="bg-green-700 mt-2 inline-block text-white font-semibold md:px-3 md:py-2 text-[8px] md:text-sm px-1 rounded-full "
                    >
                        CODE : <span className="text-yellow-300">FRESH25</span>
                    </button>
                </div>
                <Image
                    src={"/assets/images/plete-food.png"}
                    width={130}
                    height={100}
                    alt="Fresh Salad"
                    className=" w-14 h-14 md:w-18 md:h-18 lg:w-28 lg:h-28 rounded-full"
                />
            </div>
        </div>
    );
};


