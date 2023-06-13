import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor');
        return res.data;
    })
    return (
        <>
             <div className="InstructorBanner h-[50vh] flex flex-col items-center justify-center text-white">
                <h3 className="text-5xl font-bold">Our  World Class Instructor</h3>
                <p className="text-gray-100 ">All instructor have the ability to tech you.</p>
            </div>
            <div className="grid grid-cols-4   gap-10 m-20">
                {instructor?.map(user => (
                    <div className="border w-full flex flex-col hover:scale-110 duration-300 items-center rounded-3xl p-6  shadow-lg"
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