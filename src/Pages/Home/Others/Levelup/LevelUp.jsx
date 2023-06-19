import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import img2 from '../../../../assets/levelup3.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from "react";

const LevelUp = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="md:flex w-full items-center gap-32 py-20 px-5 md:px-20 bg-blue-50 dark:bg-body">
            <div className="w-full md:1/2 border relative mb-20" data-aos="flip-left" data-aos-duration="1000">
                <div className="w-full hidden md:block">
                    <img src={img2} alt="" className="w-full" />
                </div>
                <div className="w-full md:w-2/3 md:absolute md:-right-20 md:-bottom-28  bg-opacity-95 bg-blue-800  p-5 px-7 text-white rounded-br-[100px] text-xl text-center">
                    <FaQuoteLeft className="text-4xl"></FaQuoteLeft>
                    <p className="mt-5 pb-5">The limits of my language mean the limits of my world.One language sets you in a corridor for life.Language is the road map of a culture. </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0 space-y-12 mb-20" data-aos="zoom-in-down" data-aos-duration="1000">
                <SectionTItle heading="Level Up you language Skills" subHeading="Enrolled our class">
                </SectionTItle>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className="space-y-10">
                    <p className="text-xl font-semibold">Every square inch of our unique facility is designed to improve learning, fun and safety for every child and parent who joins the global tongues Academy family.
                    </p>
                    <p className="">You feel it the moment you walk in. Something else. It's more than just vivid colors that inspire kids. More than a curriculum designed not only to teach children to language, but also to build their character through guided play. More than a thrill-free language pool. There is more. Something unexpected. Something that drives Swim Academy school beyond the usual.</p>

                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default LevelUp;