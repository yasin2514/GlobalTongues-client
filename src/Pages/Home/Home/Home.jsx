import PageTitle from "../../../Components/PageTitle/PageTitle";
import Apply from "../Others/Apply/Apply";
import Banner from "../Others/Banner/Banner";
import Choose from "../Others/Choose/Choose";
import FreeEvents from "../Others/FreeEvents/FreeEvents";
import LevelUp from "../Others/Levelup/LevelUp";
import PopularClass from "../Others/PopularClass/PopularClass";
import PopularInstructor from "../Others/PopularInstrctor/PopularInstructor";
import Satisfaction from "../Others/Satisfaction/Satisfaction";
import Subscribe from "../Others/Subscribe/subscribe";

const Home = () => {
    return (
        <div className="space-y-24 overflow-hidden">
            <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <LevelUp></LevelUp>
            <PopularInstructor></PopularInstructor>
            <Choose></Choose>
            <Satisfaction></Satisfaction>
            <FreeEvents></FreeEvents>
            <Apply></Apply>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;