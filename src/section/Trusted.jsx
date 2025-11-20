import React from 'react'
import { partners } from '../util/Contents.js'

const Trusted = () => {
    return (
        <div className='flex items-center justify-center bg-gray-100 flex-col p-8'>
            <div className='text-gray-600 font-sans text-xl m-4'>
                Trusted by over 17,000 companies and millions of learners around the world
            </div>
            {/* Partner logos list */}
            <ul className='grid grid-flow-col justify-between p-4 my-2 mx-8 w-4/5'>
                {partners.map((item, i) => (
                    <li key={i}>
                        <img src={item} alt={`Partner ${i + 1}`} className='h-12' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Trusted
