import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import ClassCart from "../../../../Components/classCart/classCart";


const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/classes/approve');
        return res.data;
    })
    return (
        <div className="mb-20">
            <SectionTItle heading={'Our Popular Classes'} subHeading={'Explore our Class'}>
            </SectionTItle>
            <div className="grid grid-cols-3 md:max-w-6xl xl:w-6xl mx-auto mt-20 md:gap-14 xl:gap-20 ">
                {classes?.slice(0,6).map(course => <ClassCart
                    key={course._id}
                    course={course}
                ></ClassCart>
                )}
            </div>
        </div>
    );
};

export default PopularClass;