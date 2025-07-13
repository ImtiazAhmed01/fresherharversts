"use client";

interface CategoryType {
    id: string;
    categoryName: string;
}

interface CateProps {
    data: CategoryType[];
    handleCategory: (id: string | null) => void;
    active: string | null;
}

const Cate = ({ data, handleCategory, active }: CateProps) => {
    return (
        <div>
            <ul className="flex sm:gap-6 gap-2 justify-center mt-4 flex-wrap">
                <li>
                    <button
                        onClick={() => handleCategory(null)}
                        className={`btn btn-sm md:btn-md border ${active === null
                            ? "bg-[#749B3F] text-white "
                            : "bg-white text-gray-300"
                            }`}
                    >
                        All
                    </button>
                </li>
                {data.map((category) => (
                    <li key={category.id}>
                        <button
                            onClick={() => handleCategory(category.id)}
                            className={`btn btn-sm md:btn-md border ${active === category.id
                                ? "bg-[#749B3F] text-white "
                                : "bg-white text-gray-300"
                                }`}
                        >
                            {category.categoryName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cate;

