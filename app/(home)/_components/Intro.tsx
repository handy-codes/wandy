import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className='p-8'>
        <div className="flex-row-reverse shadow-md flex flex-wrap max-sm:gap-4 justify-center max-w-7xl mx-auto">
          <div className=" bg-[#003B65] p-6 w-[90vw] sm:w-[45vw] h-[75vh] flex sm:content-center flex-col sm:items-center sm:justify-center">
            <h1 className='text-white text-2xl font-bold sm:text-3xl'>Welcome to Wandy</h1>
            <p className='text-[#ABBECC] sm:text-justify pt-3 pb-3 text-[18px]'>
              What would have loved to learn if you had more time off work? Maybe you
              would like to qualify as a Chartered Accountant, Web or Mobile App Developer,
              fish or poultry farmer or even Chef for personal or professional use etc. Wandy online
              platform learning platform has got you covered: Teach to Earn | Buy to Learn.   
            </p>
          </div> 
          <div className=" max-sm:rounded-lg sm:inline-block w-[90vw] sm:w-[45vw] h-[75vh] ">
            <img className='w-[100%] h-[85%] overflow-hidden object-cover' src="https://legaltrunk.com/wp-content/uploads/2022/08/How-to-Set-Up-an-Offshore-Company-and-Bank-Account-from-Nigeria-.jpg" />
            <div className="w-[100%] p-6 h-[15%] flex flex-col justify-center items-center bg-lime-950 py-4 text-white">
             <p className='text-xl'>Jonadab Omonigho</p>
             <p>Chairman, Wahalanodey Group</p>
             {/* <p>HighKlass Intl Schools </p> */}
            </div>
          </div>
        </div>
    </div>
  )
}
