import ReactCardCarousel from 'react-card-carousel';
import SectionTItle from '../../../../Components/sectionTitle/SectionTItle';
import img from '../../../../assets/demo.png'
import moment from 'moment/moment';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
const FreeEvents = () => {
    return (
        <div className=' py-20 flex items-center justify-center bg-orange-50'>
            <div className=' w-1/2 '>
                <SectionTItle heading="On Going Event Free Classes" subHeading="Join class today">
                </SectionTItle>
                <div className='mx-20 my-10 '>
                    <p className='text-xl'>We are an open and friendly swimming school. Each of our little floats is special and unique to us. We know each of our students not only by name, but most of all we listen to them and try to get to know them well. We teach swimming, but also try to pass on moral principles and values.</p>
                    <div className='mt-10 flex gap-24'>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Hindi Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>French Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Chinese Language </li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Bangla Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>English Language spoken</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Arabic Language </li>
                            
                        </ul>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Arabic Language </li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>English Language spoken</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Hindi Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>French Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Chinese Language learning</li>
                            <li className='flex items-center gap-2 font-[600]'><AiOutlineCheckCircle className='text-blue-600 inline text-xl'></AiOutlineCheckCircle>Bangla Language learning</li>
                            
                        </ul>
                      
                       
                      
                    </div>
                </div>
            </div>
            <div className='relative w-1/2'>
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    {/* cart-1 */}
                    <div className=' w-full overflow-hidden bg-white'>
                        <img src={img} alt="" className='hover:scale-110 duration-300 w-full' />
                        <div className='m-5'>
                            <div className='flex items-center gap-5'>
                                <div className='pr-5 w-20 border-blue-600  border-r-2'>
                                    <span className='text-4xl text-blue-600 '>{moment().format("D")}</span>
                                    <br />
                                    <span className='text-xl'>{moment().format('MMMM')}</span>
                                </div>
                                <p className='text-sm  '><TfiLocationPin className='inline text-blue-600 mr-2 text-xl'></TfiLocationPin>North Caroline United States</p>
                            </div>
                            <h2 className='text-black text-2xl my-5 font-bold'>How to Speak Fluently in English:
                                Introduction to Simple Way to Speak.</h2>
                        </div>
                    </div>
                    {/* cart-2*/}
                    <div className=' w-full overflow-hidden bg-white'>
                        <img src={img} alt="" className='hover:scale-110 duration-300 w-full' />
                        <div className='m-5'>
                            <div className='flex items-center gap-5'>
                                <div className='pr-5 w-20 border-blue-600  border-r-2'>
                                    <span className='text-4xl text-blue-600 '>{moment().format("D")}</span>
                                    <br />
                                    <span className='text-xl'>{moment().format('MMMM')}</span>
                                </div>
                                <p className='text-sm  '><TfiLocationPin className='inline text-blue-600 mr-2 text-xl'></TfiLocationPin>North Caroline United States</p>
                            </div>
                            <h2 className='text-black text-2xl my-5 font-bold'>How to Speak Fluently in English:
                                Introduction to Simple Way to Speak.</h2>
                        </div>
                    </div>
                    {/* cart-3 */}
                    <div className=' w-full overflow-hidden bg-white'>
                        <img src={img} alt="" className='hover:scale-110 duration-300 w-full' />
                        <div className='m-5'>
                            <div className='flex items-center gap-5'>
                                <div className='pr-5 w-20 border-blue-600  border-r-2'>
                                    <span className='text-4xl text-blue-600 '>{moment().format("D")}</span>
                                    <br />
                                    <span className='text-xl'>{moment().format('MMMM')}</span>
                                </div>
                                <p className='text-sm  '><TfiLocationPin className='inline text-blue-600 mr-2 text-xl'></TfiLocationPin>North Caroline United States</p>
                            </div>
                            <h2 className='text-black text-2xl my-5 font-bold'>How to Speak Fluently in English:
                                Introduction to Simple Way to Speak.</h2>
                        </div>
                    </div>
                </ReactCardCarousel>
            </div>
        </div>
    );
};

export default FreeEvents;
