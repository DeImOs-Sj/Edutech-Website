import React from 'react';
import img2 from '../assets/background.png';

export default function Banner() {
    return (
        <div class="relative fixed">
            <img src={img2} className="w-full h-[500px]" />
            <div class="absolute inset-0 flex justify-start items-center pl-5 pr-5 ">
                <p class="text-white text-xl font-bold w-[400px] h-[380px] bg-black bg-opacity-30  rounded-xl p-4">
                Pushing The Boundaries
Of Learning.
<h3 className=' text-xl   p-3'>We are a technology company focused on bridging the gap between demand for and access to quality education through the process of decentralizing the traditional method of learning.</h3>
<button className='ml-24 mt-1 btn sm:btn bg-[#0F42A4] text-lg p-2 rounded-[5px] hover:text-[#CCA033] transition-colors '>Learn more</button>
                </p>
            </div>
        </div>

    )
}
