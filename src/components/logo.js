import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';
import PbxLogo from '../../public/images/profile/pbx1.webp'

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className='flex items-center justify-center mt-28 -mb-32'>
			<MotionLink href='/' className='w-50 h-50 flex items-center justify-center'
			><Image src={PbxLogo} alt="" className='-mt-36 w-[50%] h-[50%] animate-pulse xl:ml-36 3xl:ml-48 md:ml-2 md:mr-4 lg:w-[80%] lg:-mt-8 lg:mr-48 sm:-mt-36 sm:h-[auto] sm:w-[100%] sm:pt-6' />
			</MotionLink>
		</div>
	)
}

export default Logo