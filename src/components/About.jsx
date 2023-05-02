import React from 'react'
import img3 from '../assets/sample.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


export default function About() {
    return (
        <div>
            <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className='text-center pt-10'>
                <h2 className='font-bold text-4xl text-[#03073f]'>Why Choose EduTech</h2>
                <p className='pt-4'>Whether you’re an Academic Institution Proprietor looking to improve your administrative & learning processes, a Business Manager looking to upskill your workforce, an Individual searching for access to education financing in Africa.</p>
            </motion.div>
            <div>
                <div className='grid lg:grid-rows-2 lg:grid-cols-3 sm:grid-rows-6 text-center'>
                    <div className='m-4 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px] mb-2' />

                        </div>
                        <h2 className='font-bold'> Online Program Facilitation</h2>
                        <p> We provide all the vital logistical components for any online program, including comprehensive student support services from student enrollment through to graduation and beyond.</p>
                    </div>
                    <div className='m-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px]  mb-2' />

                        </div>
                        <h2 className='font-bold'>Observation & Analysis</h2>
                        <p>   We carry out extensive research, observation and analysis of tertiary educational systems with respect to the streamlining and improvement in delivery of learning content to students.</p>
                    </div>
                    <div className='m-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px] mb-2' />

                        </div>
                        <h2 className='font-bold'>Creating Access To Learning</h2>
                        <p>   We work to increase student access to degree granting institutions whilst mitigating the current constraints that exist for working adults within the African context.</p>
                    </div>
                    <div className='m-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px] mb-2' />

                        </div>
                        <h2 className='font-bold'>Upholding Integrity & Quality</h2>
                        <p> We provide all the vital logistical components for any online program, including comprehensive student support services from student enrollment through to graduation and beyond.</p>
                    </div>
                    <div className='m-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px] mb-2' />

                        </div>
                        <h2 className='font-bold'>Change Management</h2>
                        <p> We provide all the vital logistical components for any online program, including comprehensive student support services from student enrollment through to graduation and beyond.</p>
                    </div>
                    <div className='m-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={img3} alt="" className='w-[70px] h-[70px] mb-2' />

                        </div>
                        <h2 className='font-bold'>Technical Support</h2>
                        <p> We provide all the vital logistical components for any online program, including comprehensive student support services from student enrollment through to graduation and beyond.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
