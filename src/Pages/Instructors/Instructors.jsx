import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import AOS from 'aos';
import PageTitle from "../../Components/PageTitle/PageTitle";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor');
        return res.data;
    })
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <PageTitle title={'Instructor'}></PageTitle>
            <div className="InstructorBanner text-center space-y-2 h-[50vh] flex flex-col items-center justify-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold">Our  World Class Instructor</h3>
                <p className="text-gray-100 ">All instructor have the ability to tech you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-6 my-10  gap-10 md:m-20">
                {instructor?.map(user => (
                    <div data-aos="flip-up" className="border w-full flex flex-col hover:scale-110 duration-300 items-center rounded-3xl p-6  shadow-lg"
                        key={user._id}
                    >
                        <div className=" h-52">
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
        </>
    );
};

export default Instructors;