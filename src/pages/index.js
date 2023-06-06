import Layout from '@/components/Layout'
import { LinkArrow } from '@/components/Icons'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/devee.png'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import Smart from '../../public/images/profile/smart.png'
import TransitionEffect from '@/components/TransitionEffect'



export default function Home() {
  return (
    <>
      <Head>
        <title>PBX | Desarrollo y Diseño Web</title>
        <meta name="description" content="PBX Web Design" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full h-min-screen '>
          <Layout className='pt-0 md:pt-16 sm:pt-2 lg:py-48'>
            <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt='developer' className='w-full h-auto lg:hidden md:inline-block md:w-full ' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
                <AnimatedText text='Hacer posible lo imposible con código. ¡Bienvenidos!' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  Desarrollo de páginas web modernas y adaptables a diferentes dispositivos, basadas en interfaces orientadas en la fluida experiencia del usuario. 
                  Navegá y visitá los proyectos realizados.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/CVPB.pdf" target={"_blank"}
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                    hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                    download={true}
                    >
                    CV <LinkArrow className={"w-6 ml-1"}/>
                  </Link>
                  <Link href="mailto:polbarrios835237@gmail.com" target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe />
          <div className='absolute right-32 -bottom-2 inline-block w-96 md:hidden 2xl:hidden '>
            <Image src={Smart} alt='responsive design' className='w-[80%] h-[50%]' />
          </div> 
      </main>
    </>
  )
}
