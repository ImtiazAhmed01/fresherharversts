import Image from "next/image";

export default function AboutFreshProduct() {
    return (
        <div className="pb-[110px]">
            <div className="container">
                <div className="md:flex items-center">
                    <div className="md:flex-1 relative my-10 md:my-0">
                        <div className="">
                            <Image
                                src={"/assets/images/pata.png"}
                                width={60}
                                height={10}
                                className="absolute md:top-20 md:right-16 right-5 z-11"
                                alt="no support image"
                            />
                        </div>
                        <Image
                            src={"/assets/images/man.png"}
                            width={500}
                            height={500}
                            className=""
                            alt="no image"
                        />
                    </div>
                    <div className="md:flex-1">
                        <div className=" ">
                            <h3 className="bg-fh-gray-50 inline-block  px-2 rounded-sm text-fh-green font-semibold  text-xl  ">
                                About us
                            </h3>
                            <h2 className="text-fh-block md:text-5xl text-3xl font-bold my-4">
                                About Fresh Harvest
                            </h2>
                            <p className="text-fh-gray-100 lg:max-w-md  mb-5">
                                Welcome to Fresh Harvest, your premier destination for
                                high-quality and fresh produce. We are passionate about
                                providing you with the finest fruits, vegetables, and salad
                                ingredients to nourish your body and delight your taste buds.
                                With a commitment to excellence, sustainability, and customer
                                satisfaction, Fresh Harvest is here to revolutionize your
                                grocery shopping experience.
                            </p>
                            <div>
                                <button className="btn border py-4 px-8  text-lg font-medium text-fh-primary border-fh-primary btn-outline">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


