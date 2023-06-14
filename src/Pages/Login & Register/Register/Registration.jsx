import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from '/public/signIn.json'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
import PageTitle from "../../../Components/PageTitle/PageTitle";



const Registration = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = {
                            name: data?.name,
                            email: data?.email,
                            photo: data?.photoUrl,
                            role: 'student'
                        }
                        axios.post('https://global-tongues-server.vercel.app/users', saveUser)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }

                            })

                    })
                    .catch(error => {
                        setError(error.message)
                    })
            })
    }

    return (
        <div className="hero min-h-screen bg-gray-100 py-10">
            <PageTitle title={'Registration'}></PageTitle>
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <img src={login} alt="" />
                    <Lottie
                        animationData={login}
                        loop={true} />

                </div>

                <div className="card w-full lg:w-1/2 py-10 shadow-xl bg-white">
                    <h1 className="text-3xl  ms-10 font-bold text-blue-600">Create Account</h1>
                    <p className="ms-10  text-green-900 text-sm">Let's go fill Up the form and enjoy our service,HurryUp!</p>
                    {/* form start */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-600 text-sm">name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address*</span>
                            </label>
                            <input type="text" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL*</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoUrl", { required: true })} />
                            {errors.photoUrl && <span className="text-red-600 text-sm">photo url is required</span>}
                        </div>

                        <div className="form-control ">
                            <label className="label relative">
                                <span className="label-text">Password*</span>
                                <span className="absolute top-[50px] text-xl text-gray-500 right-4 link" onClick={() => setShow(!show)}>
                                    {
                                        show ?
                                            <FaEye></FaEye> :
                                            <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </label>
                            <input type={show ? "text" : "password"} placeholder="Your password" className="input input-bordered" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                            })} />
                            {errors.password?.type === 'required' && <p role="alert" className="text-red-600 text-sm">password is required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className="text-red-600 text-sm">password must be 6 character</p>}
                            {errors.password?.type === 'maxLength' && <p role="alert" className="text-red-600 text-sm">password must be less than 20 character</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">password must have one uppercase & one special characters</p>}

                        </div>

                        {/* confirm password */}

                        <div className="form-control ">
                            <label className="label relative">
                                <span className="label-text">Confirm Password*</span>
                                <span className="absolute top-[50px] text-xl text-gray-500 right-4 link" onClick={() => setShowTwo(!showTwo)}>
                                    {
                                        showTwo ?
                                            <FaEye></FaEye> :
                                            <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </label>
                            <input type={showTwo ? "text" : "password"} placeholder="Your password" className="input input-bordered" {...register("confirmPassword", {
                                required: true,
                                validate: (value) =>
                                    value === watch('password') || 'password not match',
                            }
                            )} />
                            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
                        </div>


                        <div className="label justify-start gap-2">
                            <input onClick={() => setActive(!active)} type="checkbox" className="checkbox " />
                            <span className="label-text-alt">Accept <Link to={'/terms'}><span className="hover:text-blue-600 hover:underline">Terms & Condition</span></Link></span>
                        </div>

                        <label className="label">
                            <p className="">Already have an Account? <Link to={'/login'}><span className="hover:text-blue-600 hover:underline">Login here</span></Link></p>
                        </label>
                        <div className="form-control mt-6">
                            <input type="submit" disabled={!active} className="btn btn-primary" value="Sign Up" />
                        </div>
                        <div className="text-center">
                            <p className="text-red-600">{error}</p>
                        </div>
                    </form>
                    {/* form end */}
                </div>
            </div>
        </div >
    );
};

export default Registration;