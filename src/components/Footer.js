import Link from 'next/link'
import React from 'react'
import Layout from './Layout'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-mediun text-lg sm:text-base xs:text-center
    '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-4'>
        <span>{new Date().getFullYear()} &copy; Posadas, Argentina.</span>
        <div className='flex items-center animate-[pulse_2s_ease-in_infinite]' 
          target={"_blank"}>
           Pablo Barrios Portfolio
        </div>
        <div className=''>
        <Link href="/" className='font-semibold'>Contacto</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer