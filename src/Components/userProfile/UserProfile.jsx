import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="text-center">
                <h className="text-4xl font-bold">Welcome <span className="text-orange-600">{user.displayName}</span></h>
                <p className="text-[16px] text-blue-600">Manage dashboard & here is the below your profile Information</p>
            </div>
            <div className="mt-20 flex items-center justify-center gap-10">
                <div className="avatar online">
                    <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="text-xl mt-5 space-y-3 w-1/2 pr-10">
                    <p className=" font-bold">Name: <span className="font-semibold">{user.displayName}</span></p>
                    <p className=" text-xl">Email: {user.email}</p>
                    <p className=""><span className="text-xl text-orange-600">{user.displayName}</span> have curious mind yearning for knowledge and boundless creativity. Embracing challenges, seeking growth, and embracing every moment's beauty. Avid traveler, soaking in diverse cultures, unraveling stories of faraway lands. Inspiring others to dream big, while savoring the small joys of life. Embracing the world's tapestry, one adventure at a time.</p>
                </div>
            </div>

            <div className="mt-20">
                <p className="text-green-600 italic text-center">---Stay Connect With Us---</p>
                <p className="text-center text-orange-600">Team <p className="text-3xl font-bold text-blue-600">Global Tongues</p></p>
            </div>
        </ >
    );
};

export default UserProfile;