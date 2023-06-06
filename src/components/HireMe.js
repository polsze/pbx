import React from 'react'
import Image from 'next/image'
import { CircularText } from './Icons'
import Webdev from '../../public/images/webdev.png'
import Link from 'next/link'


const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-16 md:left-auto md:top-0 md:bottom-auto md:absolute 
    sm:right-0  lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
      <CircularText src={Webdev} alt='developer' className='w-full h-auto animate-spin-slow lg:ml-6 md:ml-4 xs:w-[80%] sm:hidden sm:text-center' />
      <Link href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} className='flex items-center justify-center 
      absolute left-1/1 top-1/2 text-light -translate-y-1/2 bg-dark shadow-md border border-solid border-dark
      w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-10 md:h-10 md:text-[9px] lg:ml-6 md:ml-4 sm:hidden'>
        Mensaje
        </Link>
      </div>
    </div>
  )
}

export default HireMe