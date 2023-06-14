import Banner from "../Others/Banner/Banner";
import FreeEvents from "../Others/FreeEvents/FreeEvents";
import LevelUp from "../Others/Levelup/LevelUp";
import PopularClass from "../Others/PopularClass/PopularClass";
import PopularInstructor from "../Others/PopularInstrctor/PopularInstructor";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <PopularClass></PopularClass>
            <LevelUp></LevelUp>
            <PopularInstructor></PopularInstructor>
            <FreeEvents></FreeEvents>
        </div>
    );
};

export default Home;