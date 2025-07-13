const Cate = ({ data, handleCategory, active }) => {
    return (
        <div>
            <ul className="flex sm:gap-6 gap-2 justify-center mt-4">
                {data.map((categories) => (
                    <li key={categories?.id}>
                        <button
                            onClick={() => handleCategory(categories.id)}
                            className={`btn btn-sm md:btn-md  ${categories.id === active ? "bg-fh-green text-white" : ""
                                }`}
                        >
                            {categories?.categoryName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cate;
