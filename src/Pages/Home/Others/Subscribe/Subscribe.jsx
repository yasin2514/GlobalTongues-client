import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";

const Subscribe = () => {
    return (
        <div className="subscribe-bg py-20 text-white">
            <SectionTItle heading="Subscribe to Our Newsletter" subHeading="GO AT YOUR OWN PACE">
            </SectionTItle>
            <p className="text-center mt-5">Global Tongues: Dhaka's language school for global communication. Learn foreign languages <br /> with expert instructors and expand your horizons."</p>

            <div className="flex items-center w-1/2 mx-auto mt-10">
                <input type="text" placeholder="Enter Your Email" className="input text-black input-bordered input-primary rounded-r-none w-full" />
                <button className="btn btn-primary rounded-l-none">Subscribe Now</button>
            </div>

        </div>
    );
};

export default Subscribe;