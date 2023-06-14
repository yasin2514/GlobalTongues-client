import { Link } from 'react-router-dom';
import PageTitle from '../../../Components/PageTitle/PageTitle';

const Terms = () => {
    return (
        <div className='max-w-full px-7 md:px-20 my-20'>
             <PageTitle title="Terms" />
            <div>
                <h2 className='text-3xl  font-bold'>Please read Carefully Accepts Terms & Condition </h2>
                <span className='flex flex-col gap-4 my-10'>
                    <li className='list-disc '>Privacy policy: Make sure you understand how the website collects, uses, and shares your personal information.</li>
                    <li className='list-disc '>User obligations: Check what the website expects from its users, such as not engaging in illegal activities, respecting others' intellectual property rights.</li>
                    <li className='list-disc '>Liability and indemnification: Understand the limitations of the website's liability and your obligations to indemnify them in certain situations.</li>
                    <li className='list-disc '>Termination and suspension: Learn the circumstances under which the website can terminate or suspend your account and the consequences of doing so.</li>
                    <li className='list-disc '>Dispute resolution: Check how the website handles disputes, whether through arbitration, mediation, or litigation, and what remedies are available to you.</li>
                </span>

            </div>
            <Link className='btn btn-primary' to={'/register'}> Go Back to Registration</Link>
        </div>
    );

};

export default Terms;