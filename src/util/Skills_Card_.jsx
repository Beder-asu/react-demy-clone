import { BadgeCheck, Star } from 'lucide-react'
import React from 'react'


const Card = ({ x }) => {
    return (
        <div className='flex flex-col w-72 h-[380px] hover:shadow-lg transition-shadow cursor-pointer p-2' >

            <div className='w-full mb-2'>
                <img
                    className='w-full h-36 object-cover rounded-lg'
                    src={x.image}
                    alt={x.courseName}
                />
            </div>


            <div className='flex flex-col gap-1 mb-3'>
                <h3 className='text-base font-bold line-clamp-2 leading-snug'>
                    {x.courseName}
                </h3>
                <span className='text-sm text-gray-600 truncate'>
                    {x.author}
                </span>
            </div>


            <div className='flex items-center gap-2 mb-3 mt-auto'>
                <div className='flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm h-6'>
                    <Star className='w-3 h-3 fill-current' />
                    <span className='text-xs font-semibold'>{x.rating}</span>
                </div>

                {x.ribbon && (
                    <div className='flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-sm h-6 bg-teal-100 text-cyan-900 font-bold'>
                        <BadgeCheck className='w-3 h-3' />
                        <span className='text-xs font-semibold'>{x.ribbon}</span>
                    </div>
                )}

                <div className='flex items-center px-2 py-1 border border-gray-300 rounded-sm h-6'>
                    <span className='text-xs text-gray-600'>({x.reviews} rating)</span>
                </div>
            </div>

            {/* Price */}
            <div className='flex items-center gap-2'>
                <span className='text-lg font-bold'>{x.discountedPrice}</span>
                <span className='text-sm text-gray-500 line-through'>{x.oldPrice}</span>
            </div>
        </div>
    )
}

export default Card