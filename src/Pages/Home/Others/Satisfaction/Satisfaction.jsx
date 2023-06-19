import CountUp from 'react-countup';
const Satisfaction = () => {
    return (
        <div className="satisfaction-bg bg-fixed h-[80vh] flex items-center justify-center px-20">

            <div className='grid md:grid-cols-4 items-center w-full rounded-lg py-10 text-white bg-black bg-opacity-80'>
                <div className='text-center space-y-5 '>
                    <CountUp className='text-5xl font-bold text-red-600' end={1200} duration={2.75} />
                    <h4 className='text-xl font-bold'>FINISHED SESSIONS</h4>
                </div>

                <div className='text-center space-y-5 '>
                    <CountUp className='text-5xl font-bold text-red-600' end={2300} duration={2.75} />
                    <h4 className='text-xl font-bold'>ENROLLED LEARNERS</h4>
                </div>

                <div className='text-center space-y-5 '>
                    <CountUp className='text-5xl font-bold text-red-600' end={70} duration={2.75} />
                    <h4 className='text-xl font-bold'>ONLINE INSTRUCTORS</h4>
                </div>

                <div className='text-center space-y-5 '>
                    <CountUp className='text-5xl font-bold text-red-600' end={100} duration={2.75} />
                    <h4 className='text-xl font-bold'>SATISFACTION RATE</h4>
                </div>

            </div>
        </div>
    );
};

export default Satisfaction;