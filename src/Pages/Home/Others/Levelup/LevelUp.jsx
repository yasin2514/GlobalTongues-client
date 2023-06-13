import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import img from '../../../../assets/levelup.jpg'
import img1 from '../../../../assets/levelup2.jpeg'
import img2 from '../../../../assets/levelup3.jpg'
import { FaQuoteLeft } from "react-icons/fa";
const LevelUp = () => {
    return (
        <div className="bg-[#F5F7F9] flex items-center gap-32 p-10">
            <div className="w-1/2 relative">
                <div className="w-11/12">
                    <img src={img2} alt="" className="w-full" />
                </div>
                <div className="w-2/3 absolute -right-20 -bottom-28  bg-opacity-95 bg-blue-800 h-72 p-10 text-white rounded-br-[100px] text-xl">
                    <FaQuoteLeft className="text-4xl"></FaQuoteLeft>
                    <p className="mt-5">The limits of my language mean the limits of my world.One language sets you in a corridor for life.Language is the road map of a culture. </p>
                </div>
            </div>
            <div className="w-1/2 space-y-12">
                <SectionTItle heading="Level Up you language Skills" subHeading="Enrolled our class">
                </SectionTItle>
                <p className="text-xl font-semibold">Every square inch of our unique facility is designed to improve learning, fun and safety for every child and parent who joins the global tongues Academy family.
                </p>
                <p className="xl">You feel it the moment you walk in. Something else. It's more than just vivid colors that inspire kids. More than a curriculum designed not only to teach children to language, but also to build their character through guided play. More than a thrill-free language pool. There is more. Something unexpected. Something that drives Swim Academy school beyond the usual.</p>

                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};

export default LevelUp;