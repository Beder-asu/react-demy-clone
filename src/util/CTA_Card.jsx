import React from 'react'
import { ArrowRight, Users } from 'lucide-react'

const Card = ({ x }) => {

    return (
        <div
            className="flex flex-col justify-end bg-cover bg-center h-96 rounded-lg "

            style={{ backgroundImage: `url(${x.bg})` }}
        >
            <div className='bg-white p-2 mx-auto mb-2 rounded-sm w-5/6'>
                <div className='flex items-center gap-2 w-auto h-6'>
                    <Users className='w-4 h-4' />
                    <span className="text-xs">{x.attendees}</span>
                </div>

                <div className="text-black flex justify-between items-end">
                    <h3 className="font-semibold text-lg pb-2">{x.title}</h3>
                    <ArrowRight className='w-5 h-5'></ArrowRight>
                </div>
            </div>

        </div>
    )
}

export default Card