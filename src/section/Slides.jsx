import React from 'react'

const Slides = () => {
    return (
        <div className='flex items-start justify-start bg-[url("/src/assets/slides-img-1.png")] 
        bg-cover bg-center mx-20 h-96  
        '>
            <div className='flex flex-col items-center justify-center w-auto h-auto px-2 py-6 bg-white rounded-sm text-start mt-14 ml-14 '>
                <div className='mb-2 text-3xl font-semibold'>
                    Learn more, spend less —
                    <br />
                    Black Friday Sale from
                    <br />
                    E£279.99
                </div>
                <div className='mb-2 font-light'>
                    Sitewide savings on thousands of courses. Ends Nov 28.
                </div>
            </div>
        </div>
    )
}

export default Slides
