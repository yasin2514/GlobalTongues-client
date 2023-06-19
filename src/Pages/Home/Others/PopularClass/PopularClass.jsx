import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import ClassCart from "../../../../Components/classCart/classCart";
import AOS from 'aos';
import { useEffect } from "react";

const PopularClass = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/classes/approve');
        return res.data;
    })
    return (
        <div className="w-full my-24" >
            <SectionTItle heading={'Our Popular Classes'} subHeading={'Explore our Class'} >
            </SectionTItle>
            <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-3 md:max-w-6xl xl:w-6xl mx-auto mt-10 gap-14 xl:gap-20 " >
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