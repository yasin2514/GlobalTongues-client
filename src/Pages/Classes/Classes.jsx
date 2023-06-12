import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../Components/sectionTitle/SectionTItle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ClassCart from "../../Components/classCart/classCart";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/classes/approve');
        return res.data;
    })
    return (
        <div className="h-screen">
            <SectionTItle heading={'Our All Classes'} subHeading={'Explore our Class'}>
            </SectionTItle>
            <div className="grid grid-cols-4 mx-20 mt-20 gap-14 ">
                {classes?.map(course => <ClassCart
                    key={course._id}
                    course={course}
                ></ClassCart>
                )}
            </div>
        </div>
    );
};

export default Classes;