//Udemy Header file
import React from 'react'
import { GlobeIcon, Search, ShoppingCart } from 'lucide-react'
import Btn from '../util/Header_Btn.jsx'
const Header = () => {
    return (
        <div className='flex w-full h-20 p-2 border-b border-gray-200 shadow-sm justify-evenly'>
            <span className='flex items-center justify-center m-2'>
                <img src="src\assets\logo.png" alt="Udemy Logo" className='h-8' ></img>
            </span>


            <Btn>Explore</Btn>


            {/* <span className='flex items-center justify-center gap-2 px-4 m-2 border border-gray-400 rounded-full focus-within:border-violet-700'>
                <button
                    className='hover:bg-gray-200'>
                    <Search className='w-5 h-5 text-gray-600' />
                </button>
                <input
                    type="text"
                    placeholder="Search for anything"
                    className='h-10 text-sm bg-transparent outline-none w-96'
                />
            </span> */}


            <span className='hidden lg:flex items-center gap-2 px-4 m-2 border border-gray-400
                         rounded-full w-[600px] focus-within:border-violet-700'>
                <button className='hover:bg-gray-200'>
                    <Search className='w-5 h-5 text-gray-600' />
                </button>
                <input
                    type="text"
                    placeholder="Search for anything"
                    className='flex-1 h-10 text-sm bg-transparent outline-none'
                />
            </span>


            <Btn>Plans & Pricing</Btn>
            <Btn>Udemy Business </Btn>
            <Btn>Teach on Udemy</Btn>

            <button
                className='hover:bg-gray-200'>
                <ShoppingCart className='w-5 h-5 text-gray-600' />
            </button>

            <Btn props="font-bold border border-violet-900 text-violet-600">
                Log in
            </Btn>
            <Btn props="bg-violet-900 font-extrabold text-white">
                Sign Up
            </Btn>


            <button
                className='px-2 py-1 my-4 border rounded-sm hover:bg-gray-200'>
                <GlobeIcon className='w-5 h-5 text-gray-600' />
            </button>

        </div>
    )
}

export default Header