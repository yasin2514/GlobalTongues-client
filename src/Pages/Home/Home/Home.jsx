import Banner from "../Others/Banner/Banner";
import FreeEvents from "../Others/FreeEvents/FreeEvents";
import PopularClass from "../Others/PopularClass/PopularClass";
import PopularInstructor from "../Others/PopularInstrctor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <FreeEvents></FreeEvents>
        </div>
    );
};

export default Home;