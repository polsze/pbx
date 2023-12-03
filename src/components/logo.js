import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';
import PbxLogo from '../../public/images/profile/logopbx2.webp'

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className='flex items-center justify-center'>
			<MotionLink href='/' className='w-50 h-50 flex items-center justify-center'
			>
			<p className='text-3xl text-pink-400 font-racing sm:text-center sm:text-2xl'>PBX Web Design</p>
			</MotionLink>
		</div>
	)
}

export default Logo