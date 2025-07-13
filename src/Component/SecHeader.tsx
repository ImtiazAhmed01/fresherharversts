interface SectionHeaderProps {
    subTitle: string;
    title: string;
    description: string;
}

const SecHeader = ({ subTitle, title, description }: SectionHeaderProps) => {
    return (
        <div className="text-center">
            <h3 className="bg-[#749B3F]/10 text-[#749B3F] inline-block px-2 rounded-sm text-green font-semibold md:text-xl">
                {subTitle}
            </h3>
            <h2 className="text-block text-3xl lg:text-5xl font-bold my-2">
                {title}
            </h2>
            <p className=" max-w-md mx-auto">{description}</p>
        </div>
    );
};

export default SecHeader;
