import PageTitle from "../../../Components/PageTitle/PageTitle";
import Banner from "../Others/Banner/Banner";
import FreeEvents from "../Others/FreeEvents/FreeEvents";
import LevelUp from "../Others/Levelup/LevelUp";
import PopularClass from "../Others/PopularClass/PopularClass";
import PopularInstructor from "../Others/PopularInstrctor/PopularInstructor";
import Subscribe from "../Others/Subscribe/subscribe";

const Home = () => {
    return (
        <div className="space-y-24">
            <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <LevelUp></LevelUp>
            <PopularInstructor></PopularInstructor>
            <FreeEvents></FreeEvents>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;