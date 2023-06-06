import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { WhatsAppIcon } from './Icons'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-mediun text-lg sm:text-base xs:text-center
    '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-4'>
        <span className='text-light relative z-40'>{new Date().getFullYear()} &copy; Posadas, Argentina.</span>
        <div className='text-light flex items-center animate-[pulse_2s_ease-in_infinite]'
          target={"_blank"}>
          Pablo Barrios Portfolio
          <div className='flex items-center justify-center flex-wrap '>
            <motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className=' w-6 mx-3 bg-green-600 rounded-full'><WhatsAppIcon /></motion.a>

          </div>
        </div>

      </Layout>
    </footer>
  )
}

export default Footer