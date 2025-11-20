import React from 'react'
import { Check } from 'lucide-react'

const Reimagine = () => {
  return (

    <div className='flex items-center justify-between flex-row bg-[#202230] my-12 mx-28 p-12 rounded-3xl'>

      {/* Left section */}
      <div className='w-2/5'>
        {/* Text wrapper */}
        <div className='flex flex-col gap-4 text-white p-2'>
          <div className='text-3xl font-semibold'>
            Reimagine your career in the AI era
          </div>
          <div className='text-base font-light'>
            Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
          </div>

          {/* grid */}
          <div className='grid grid-cols-2 gap-4 mt-4 text-base'>
            <div className='flex items-center gap-2'>
              <Check className='w-5 h-5 text-green-500 bg-green-100 rounded-full p-1' />
              <span>Learn AI and More</span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='w-5 h-5 text-blue-500 bg-blue-100 rounded-full p-1' />
              <span>Prepare for a certification</span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='w-5 h-5 text-purple-500 bg-purple-100 rounded-full p-1' />
              <span>Practice AI with coaching</span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='w-5 h-5 text-orange-500 bg-orange-100 rounded-full p-1' />
              <span>Advance your career</span>
            </div>
          </div>
          <div className='flex justify-start flex-col'>
            <button className='bg-white rounded-sm px-4 w-48 h-10 text-sm font-bold text-black hover:bg-gray-400'>
              Learn More
            </button>
            <div className='text-left text-sm font-light p-2 m-1'>Starting at E£204.00/month</div>
          </div>
        </div>
      </div>

      {/* Right section - hero image */}
      <img
        src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"
        alt="AI Career"
        className='h-auto w-1/2'
      />
    </div>
  )
}

export default Reimagine
