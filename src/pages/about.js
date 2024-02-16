import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profilePic from '../../public/images/profile/pol.webp'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Pablo Barrios Developer | About Page</title>
        <meta name='description' content='Desarrollo y diseño de páginas web. '></meta>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className="fixed inset-0 z-0 pointer-events-none bg-violet-800">

        </div>
        <Layout className='pt-16'>
          <AnimatedText text='En continua innovación' className='py-12 xs:py-2 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col item justify-start pl-2 xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 '>Acerca de mí</h2>
              <p className='my-4 font-medium'>
                Hola, soy Pablo Barrios, un apasionado programador y diseñador junior, en permanente actualización en el uso de tecnologías para el desarrollo
                de aplicaciones WEB funcionales y orientadas
                en la experiencia del usuario para una eficaz navegación. 
              </p>
              <p className='my-4 font-medium'>Creo en el desarrollo para construir cualquier tipo de aplicación capaz de resolver problemas.
                Orientadas en interfaces innovadoras que permitan al usuario una fluida y eficaz experiencia en el sistema en cuestión.
              </p>
              <p className='my-4 font-medium'>Espero con ansias -aunque nunca dejando de lado la continua preparación- la oportunidad
                de aportar mis habilidades y pasión a su próximo proyecto.</p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-dark xl:-right-0'></div>
              <Image src={profilePic} alt="Pablo Barrios, Pablo Barrios Developer" className='w-50 h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={4} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Clientes satisfechos</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4x'><AnimatedNumbers value={4} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Proyectos realizados</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4x'><AnimatedNumbers value={1} /></span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Años de experiencia</h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  )
}

export default about