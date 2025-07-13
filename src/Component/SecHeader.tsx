interface SectionHeaderProps {
    subTitle: string;
    title: string;
    description: string;
}

const SectionHeader = ({ subTitle, title, description }: SectionHeaderProps) => {
    return (
        <div className="text-center">
            <h3 className="bg-fh-gray-50 inline-block px-2 rounded-sm text-fh-green font-semibold md:text-xl">
                {subTitle}
            </h3>
            <h2 className="text-fh-block text-3xl lg:text-5xl font-bold my-2">
                {title}
            </h2>
            <p className="text-fh-gray-100 max-w-md mx-auto">{description}</p>
        </div>
    );
};

export default SectionHeader;
