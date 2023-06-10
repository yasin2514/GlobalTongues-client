import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from '../../../../public/login.json'
import { useContext, useState } from "react";

import Swal from 'sweetalert2';
// import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../../Providers/AuthProviders";

const Login = () => {
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const { googleLogin, signIn, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User Login Successfully',
                })
                navigate(from, { relative: true });
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User Login Successfully',
                })
                navigate(from, { relative: true });
                setError('');
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(null);
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User Login Successfully',
                })
                navigate(from, { relative: true });
                form.reset();
            })
            .catch(error => setError(error.message))

    };



    return (
        <div className="hero min-h-screen bg-gray-100 py-20">
            {/* <PageTitle title="Login" /> */}
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <img src={login} alt="" />
                    <Lottie
                        animationData={login}
                        loop={true} />

                </div>

                <div className="card w-full lg:w-1/2 py-10  bg-white">
                    <h1 className="text-3xl text-center font-bold">Sign in</h1>

                    <div className="text-center mt-10 space-x-10">
                        <button onClick={handleGoogleLogin} className="btn btn-outline"><FcGoogle className="text-3xl"></FcGoogle></button>
                        <button onClick={handleGithubLogin} className="btn btn-outline"><FaGithub className="text-3xl"></FaGithub></button>
                    </div>
                    <div className="divider m-10"> OR  continue With</div>
                   
                    {/* form start */}
                    <form onSubmit={handleSignIn} className="card-body ">
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
                        <div className="label justify-start gap-2">
                            <input type="checkbox" className="checkbox " />
                            <span className="label-text-alt">Remember me</span>
                        </div>

                        <label className="label">
                            <p className="">New User? <Link to={'/register'}><span className="hover:text-blue-600 hover:underline">Register here</span></Link></p>
                        </label>
                        <div className="form-control">
                            <input type="submit" className="btn" value="Sign In" />
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

export default Login;