const SectionTItle = ({ heading,subHeading }) => {
    return (
        <div className="text-center mt-10 space-y-2">
            <h3 className="text-4xl font-bold">{heading}</h3>
            <p className="text-green-600">--{subHeading}--</p>
        </div>
    );
};

export default SectionTItle;