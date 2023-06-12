import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTItle from "../../Components/sectionTitle/SectionTItle";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = []  } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor');
        return res.data;
    })
    return (
        <>
        <SectionTItle heading={'Meet Our Top Class Instructor'} subHeading={'World top Class'}>
        </SectionTItle>
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