import React from 'react'
import img4 from '../assets/logo.svg'
import { FiTwitter,FiInstagram } from "react-icons/fi";
import { GrFacebook,GrLinkedin } from "react-icons/gr";


export default function Footer() {
    return (
        <div>
            <div className='grid lg:grid-cols-4 sm:grid-rows-2 m-20'>
                <div>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <ul className='pt-5'>
                        <li className='font-bold text-[#03073f]'>Headquarters</li>
                        <p className='pt-2 text-[#051a52]'>Dubai Digital Park, A5 Building DTEC,
                            Dubai Silicon Oasis, Dubai, UAE.</p>

                        <li className='font-bold text-[#03073f] pt-4'>Nigeria Office </li>
                        <p className='pt-2 text-[#051a52]'>Vibranium Valley
                            42, Local Airport Road, Ikeja
                            Lagos</p>
                        <li className='font-bold text-[#03073f] pt-4'>Enquiries</li>
                        <p className='pt-2 text-[#051a52]'>+1 512 879 6557
                            +234 (0908) 748-2267</p>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold text-[#03073f]'>Products</h6>
                    <h1 className='pt-4 text-[#051a52]'>VigiLearn</h1>
                    <h1 className='pt-4 text-[#051a52]'>Bursery</h1>
                </div>

                <div>
                    <h6 className='font-bold text-[#03073f]'>Company</h6>
                    <ul>
                        <li className='pt-4 text-[#051a52]'>About us</li>
                        <li className='pt-4 text-[#051a52]'>Blog</li>
                        <li className='pt-4 text-[#051a52]'>Partners</li>
                        <li className='pt-4 text-[#051a52]'>Privacy policy</li>
                        <li className='pt-4 text-[#051a52]'>Security Awareness</li>

                    </ul>
                </div>
                <div>
                    <h6 className='font-bold text-[#03073f]'>Contact Us</h6>
                    <li className='text-[#051a52] pt-2'>clientservice@edutech.global</li>
                    <li className='text-[#051a52] pt-2'>Follow Us </li>
                    <div className='flex justify-start gap-x-6 pt-2 text-2xl cursor-pointer'>
                    <FiTwitter/>
                    <GrFacebook/>
                    <GrLinkedin/>
                    <FiInstagram/>
                    </div>
                </div>


            </div>
        </div>
    )
}
