import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from '/public/signin.json'
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Providers/AuthProviders";


const Registration = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setSuccess(null);
        setError(null);
        if (password.length < 6) {
            setError("Password should be 6 character or more");
            return;
        }
        createUser(email, password)
            .then(result => {
                setSuccess("User Create Successfully");
                const loggedUser = result.user;
                updateUserInfo(loggedUser, name, photo);
                form.reset();
            })
            .catch(error => setError(error.message))
    };

    const updateUserInfo = (user, displayName, photoURL) => {
        updateProfile(user, {
            displayName,
            photoURL
        })
    }


    return (
        <div className="hero min-h-screen bg-gray-100 py-20">
             {/* <PageTitle title="Register" /> */}
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <img src={login} alt="" />
                    <Lottie
                        animationData={login}
                        loop={true} />

                </div>

                <div className="card w-full lg:w-1/2 py-10 shadow-xl bg-white">
                    <h1 className="text-3xl text-center font-bold">Create Account</h1>
                    {/* form start */}
                    <form onSubmit={handleSignUP} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" placeholder="Your email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control ">
                            <label className="label relative">
                                <span className="label-text">Password</span>
                                <span className="absolute top-[50px] text-xl text-gray-500 right-4 link" onClick={() => setShow(!show)}>
                                    {
                                        show ?
                                            <FaEye></FaEye> :
                                            <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </label>
                            <input type={show ? "text" : "password"} placeholder="Your password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="label justify-start gap-2">
                            <input onClick={() => setActive(!active)} type="checkbox" className="checkbox " />
                            <span className="label-text-alt">Accept <Link to={'/terms'}><span className="hover:text-blue-600 hover:underline">Terms & Condition</span></Link></span>
                        </div>

                        <label className="label">
                            <p className="">Already have an Account? <Link to={'/login'}><span className="hover:text-blue-600 hover:underline">Login here</span></Link></p>
                        </label>
                        <div className="form-control mt-6">
                            <input type="submit" disabled={!active} className="btn" value="Sign Up" />
                        </div>
                        <div className="text-center">
                            <p className="text-green-600">{success}</p>
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