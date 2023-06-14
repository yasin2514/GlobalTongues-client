import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ClassCart from "../../Components/classCart/classCart";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/classes/approve');
        return res.data;
    })
    return (
        <div className="">
            <PageTitle title={'Classes'}></PageTitle>
            <div className="classPageBanner text-center space-y-3 h-[50vh] flex flex-col items-center justify-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold">Our All Language Classes</h3>
                <p className="text-gray-100 ">Add your course  for learn and speck fluently.</p>
            </div>
            <div className="grid grid-cols-1 px-7 md:grid-cols-3 xl:grid-cols-4 md:mx-20 3xl:mx-40 my-20 gap-14 ">
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