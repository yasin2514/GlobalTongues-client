import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClasses = () => {
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
                    const addClass = {
                        instructorName: user.displayName,
                        instructorEmail: user.email,
                        className: data.className,
                        availableSeats: data.availableSeats,
                        price: data.price,
                        image: imgURL,
                        status: 'pending',
                        totalEnrolled: 0
                    }
                    axiosSecure.post('/classes', addClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class added Successfully',
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
            <h3 className="text-3xl text-center font-semibold mb-5">Add a Class</h3>

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
                            <span className="label-text">Class name*</span>
                        </label>
                        <input type="text" placeholder="Class Name" className="input input-bordered" {...register("className", { required: true })} />
                        {errors.className && <span className="text-red-600 text-sm">Class name is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input type="number" placeholder="Available seats" className="input input-bordered" {...register("availableSeats", { required: true })} />
                        {errors.availableSeats && <span className="text-red-600 text-sm">Available seats is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="$Price" step='any' className="input input-bordered" {...register("price", { required: true })} />
                        {errors.price && <span className="text-red-600 text-sm">Price is required</span>}

                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: true })} />
                        {errors.classImage && <span className="text-red-600 text-sm">Class Image is required</span>}

                    </div>

                </div>

                <div className="form-control w-1/2 mt-14 mx-auto">
                    <input type="submit" className="btn btn-primary" value="Add Class" />
                </div>


            </form>
            {/* form end */}
        </div>
    );
};

export default AddClasses;