import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import Marquee from "react-fast-marquee";

const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor');
        return res.data;
    })
    return (
        <>
            <SectionTItle heading={'Meet Our Top Class Instructor'} subHeading={'World top Class'}>
            </SectionTItle>
            <Marquee speed={150}>
                <div className="flex my-20">
                    {instructor?.slice(0, 6).map(user => (
                        <div className="border w-80 mx-10 hover:scale-110 hover:-rotate-12 duration-300  flex flex-col items-center rounded-3xl p-6  shadow-lg"
                            key={user._id}
                        >
                            <div className=" h-52 ">
                                <img src={user.photo} alt="" className="w-52 h-full object-cover rounded-full" />
                            </div>
                            <div className="mt-5">
                                <h4 className="font-bold">Name: {user.name}</h4>
                                <p>Email: {user.email}</p>
                                <p>{user.role} at <span className="font-bold">Global Tongues</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

        </>
    );
};

export default PopularInstructor;