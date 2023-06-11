import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [],  } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor');
        return res.data;
    })
    return (
        <>
        <div className="text-center mt-10 space-y-2">
            <h3 className="text-4xl font-bold">Meet Our Top Instructor</h3>
            <p className="text-green-600">--World top Class--</p>
        </div>
            <div className="grid grid-cols-4 gap-10 m-20">
                {instructor?.map(user => (
                    <div className="border w-full flex flex-col items-center rounded-3xl p-6  shadow-lg"
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