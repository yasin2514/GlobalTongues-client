import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PageTitle from "../../../Components/PageTitle/PageTitle";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const UpdateClass = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [axiosSecure] = useAxiosSecure();

    const onsubmit = data => {

        // image hosting
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const updateClass = {
                        availableSeats: parseInt(data.availableSeats),
                        price: parseFloat(data.price),
                        image: imgURL
                    }
                    axiosSecure.patch(`/updateClass/${course._id}`, updateClass)
                        .then(data => {
                            if (data.data.modifiedCount > 0) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class Updated Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }
            })



    };
    return (
        <div>
             <PageTitle title="Update Class" />
            <h3 className="text-3xl text-center font-semibold mb-5">Update {course.className} Class</h3>

            {/* form start */}
            <form onSubmit={handleSubmit(onsubmit)} >

                <div className="grid grid-cols-2 gap-x-10  gap-y-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input disabled defaultValue={user?.displayName} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input disabled defaultValue={user?.email} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input type="text" disabled defaultValue={course?.className} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input type="number" placeholder="Available seats"
                            defaultValue={course?.availableSeats} className="input input-bordered" {...register("availableSeats", { required: true })} />
                        {errors.availableSeats && <span className="text-red-600 text-sm">Available seats is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="$Price" defaultValue={course?.price} step='any' className="input input-bordered" {...register("price", { required: true })} />
                        {errors.price && <span className="text-red-600 text-sm">Price is required</span>}

                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: true })} />
                        {errors.image && <span className="text-red-600 text-sm">Class Image is required</span>}

                    </div>

                </div>

                <div className="form-control w-1/2 mt-14 mx-auto">
                    <input type="submit" className="btn btn-primary" value="Update Class" />
                </div>


            </form>
            {/* form end */}
        </div>
    );
};

export default UpdateClass;