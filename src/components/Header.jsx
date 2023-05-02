import React, { useState } from 'react'
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import img1 from '../assets/logo.svg';


export default function Header() {
    const [toggle,setToggle] = useState(false);
  return ( 
    <div className=' p-4'>
        <div className='max-w-{1240px} py-[12px] items-center flex justify-between mx-auto  '>
            <img src={img1} alt="" />
            {
                toggle ?
                <AiOutlineClose onClick={()=>setToggle(!toggle)}  className='text-black text-2xl md:hidden block'/> 
                :
                <AiOutlineMenu onClick={()=>setToggle(!toggle)}    className='text-black text-2xl md:hidden block'/>

            }
            <ul className='duration-200 hidden md:flex text-black text-xl gap-10 cursor-pointer '>
                <li className='hover:text-[#1ECBE1]'>
                    About Us
                </li>
                <li className='hover:text-[#1ECBE1]'>
                    Blog
                </li>
                <li className='hover:text-[#1ECBE1]'>
                    Partners
                </li>
                <li className='hover:text-[#1ECBE1]'>
                    Refer us
                </li>
                <li className='hover:text-[#1ECBE1]'>
                    Contact us
                </li>
            </ul>
            {/* Responsive Menu */}
            <ul className={` duration-200 md:hidden w-full fixed  top-[84px] z-50 bg-white cursor-pointer  ${toggle ? 'left-[0]' : 'left-[-100%] ' }`}>
                <li className='p-5 hover:text-[#1ECBE1]'> 
                About Us
                </li>
                <li className='p-5 hover:text-[#1ECBE1]'>
                Blog
                </li>
                <li className='p-5 hover:text-[#1ECBE1]'>
                Partners
                </li>
                <li className='p-5 hover:text-[#1ECBE1]'>
                Refer us
                </li>
                <li className='p-5 '>
                Contact us
                </li>
            </ul>
        </div>

    </div>
  )
}
