//Udemy Offer Bar
import React, { useState } from 'react'
import Countdown from '../util/Countdown'
import { X } from 'lucide-react'


const Offer = () => {

    const [showOffer, setShowOffer] = useState(true);


    return (
        showOffer ?
            <div className='bg-[#c2e9eb] w-full h-14 flex items-center relative' >
                <div className='flex items-center gap-6 mx-auto'>
                    <div className='flex flex-col justify-center gap-1'>
                        <div>
                            <span className='font-sans text-sm font-extrabold'>New Learner Offer</span>
                            <span className='text-sm'> | Courses from E£259.99. Click button to see savings.</span>
                        </div>
                    </div>
                    <button className='bg-[#6d28d2] rounded-sm px-4 h-10 text-sm font-bold text-white hover:bg-[#5b2dd0]'>
                        Click to redeem
                    </button>
                </div>

                <button className='absolute p-1 rounded right-4 hover:bg-gray-200' onClick={() => setShowOffer(false)}>
                    <X className='w-5 h-5' />
                </button>
            </div>
            : <></>
    )
}

export default Offer