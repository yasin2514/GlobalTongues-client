import PageTitle from "../../../Components/PageTitle/PageTitle";
import UserProfile from "../../../Components/userProfile/UserProfile";

const AdminDashboard = () => {
    return (
        <>
             <PageTitle title="Admin Profile" />

           <UserProfile></UserProfile>
        </>
    );
};

export default AdminDashboard;