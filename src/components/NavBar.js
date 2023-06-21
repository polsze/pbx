

import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from './Icons'
import { motion } from 'framer-motion'

import Logo from './logo'

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group`} onClick={handleClick}>
			{title}
			<span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
			 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
		</button>
	)
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
	const router = usePathname();

	const handleClick = () => {
		toggle();
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
			{title}
			<span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
		</button>
	)
}

const NavBar = () => {

	const [isOpen, setIsOpen] = useState(false);


	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<header
			className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8'
		>
			<button className='flex-col justify-center items-center hidden lg:flex bg-lime-500' onClick={handleClick}>
				<span className={`bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
				<span className={`bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
				<span className={`bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
			</button>

			<div className='w-full flex justify-between items-center lg:hidden'>
				<nav>
					<CustomLink href='/' title='Inicio' className='mr-4 text-light' />
					<CustomLink href='/about' title='Sobre mí' className='mx-4 text-light' />
					<CustomLink href='/projects' title='Proyectos' className='ml-4 text-light' />
				</nav>

				<nav className='flex items-center justify-center flex-wrap'>
					<motion.a href='https://github.com/polsze' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 text-light'><GithubIcon /></motion.a>
					<motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><WhatsAppIcon /></motion.a>
					<motion.a href='https://www.linkedin.com/in/pablo-barrios-2ba888231/' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><LinkedInIcon /></motion.a>
				</nav>
			</div>

			{isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='min-w-[70vw] flex flex-col justify-between z-30 items-center
	   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop backdrop-blur-md py-32'>
				<nav className='flex items-center flex-col justify-center'>
					<CustomMobileLink href='/' title='Inicio' className='' toggle={handleClick} />
					<CustomMobileLink href='/about' title='Sobre mí' className='' toggle={handleClick} />
					<CustomMobileLink href='/projects' title='Proyectos' className='' toggle={handleClick} />
				</nav>

				<nav className='flex items-center justify-center flex-wrap mt-2'>
					<motion.a href='https://github.com/polsze' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 bg-light rounded-full sm:mx-1'><GithubIcon /></motion.a>
					<motion.a href='https://api.whatsapp.com/send?phone=543765252582' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-green-600 rounded-full'><WhatsAppIcon /></motion.a>
					<motion.a href='/' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full sm:mx-1'><LinkedInIcon /></motion.a>
				</nav>
			</motion.div>
				: null}

			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo />
			</div>
		</header>
	)
}

export default NavBar