import { useState } from 'react'
import React from 'react'
import Card from '../util/Skills_Card_'
import { coursesArray } from '../util/Contents'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Skills = () => {

    const [active, setActive] = useState(0);
    const [index, setIndex] = useState(0);


    const handleNext = (list) => {
        if (index < list.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className='flex items-start justify-start my-12 mx-28 p-2 flex-col'>
            <div className='flex flex-col gap-4 pb-8'>
                <div className='text-3xl font-semibold'>
                    Skills to transform your career and life
                </div>
                <div className='text-lg font-light'>
                    From critical skills to technical topics, Udemy supports your professional development.
                </div>
            </div>

            {/* Tabs section */}
            <div className="flex flex-col w-full">
                <div className="flex gap-4 border-b text-base">
                    {coursesArray.map(item => item.skill).map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setActive(i);
                                setIndex(0)
                            }}
                            className={`pb-2 ${active === i ? "border-b-2 border-black font-semibold" : "text-gray-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Carousel container with floating buttons */}
                <div className="mt-4 pt-4 -mx-2 relative">
                    {/* Left navigation button */}
                    <button
                        onClick={() => handlePrev()}
                        disabled={index === 0}
                        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200'
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>

                    {/* Right navigation button */}
                    <button
                        onClick={() => handleNext(coursesArray[active].courses)}
                        disabled={index === coursesArray[active].courses.length - 1}
                        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200'
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>

                    <div className='overflow-hidden w-full px-2'>
                        <div
                            className='flex flex-row transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${index * 25}%)` }}
                        >
                            {coursesArray[active].courses.map((item, i) => (
                                <div key={i} className='shrink-0 w-1/4 px-2'>
                                    <Card x={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills
