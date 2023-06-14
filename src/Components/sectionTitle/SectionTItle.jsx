const SectionTItle = ({ heading,subHeading }) => {
    return (
        <div className="text-center space-y-2"  data-aos="flip-up">
            <h3 className="text-4xl font-bold">{heading}</h3>
            <p className="text-green-600 "> {subHeading}</p>
        </div>
    );
};

export default SectionTItle;