import React from 'react'

const Btn = ({ props = "text-base font-light tracking-tight", children }) => {
    return (
        <span className='flex items-center justify-center m-1'>
            <button className={`h-10 px-4 font-sans  rounded-sm hover:bg-fuchsia-100 hover:text-violet-900 ${props}`}>
                {children}
            </button>
        </span>
    )
}

export default Btn