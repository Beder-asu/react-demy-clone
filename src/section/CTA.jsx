import React, { useState } from 'react'
import Card from '../util/CTA_Card.jsx'
import { CTA_content } from '../util/Contents.js'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'

const CTA = () => {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        if (index + 3 < CTA_content.length) {
            setIndex(index + 3)
        }
    }

    const handlePrev = () => {
        if (index - 3 >= 0) {
            setIndex(index - 3)
        }
    }

    return (
        <div className='flex flex-row items-center justify-center gap-8 px-8 py-12 mx-20'>

            <div className='flex flex-col w-1/4 gap-4'>
                <div className='text-3xl font-semibold'>
                    Learn essential career and life skills
                </div>
                <div className='text-lg font-light'>
                    Udemy helps you build in-demand skills fast and advance your career in a changing job market.
                </div>
            </div>

            <div className='flex flex-col items-center gap-4 w-3/4'>
                <div className='overflow-hidden w-full'>
                    <div
                        className='flex flex-row transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${index * 33.33}%)` }}
                    >
                        {CTA_content.map((item, i) => (
                            <div key={i} className='shrink-0 w-1/3 px-2'>
                                <Card x={item} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button
                        onClick={handlePrev}
                        disabled={index === 0}
                        className='disabled:opacity-30 disabled:cursor-not-allowed hover:text-violet-700'
                    >
                        <ArrowLeftCircle className='h-8 w-8' />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={index + 3 >= CTA_content.length}
                        className='disabled:opacity-30 disabled:cursor-not-allowed hover:text-violet-700'
                    >
                        <ArrowRightCircle className='h-8 w-8' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTA