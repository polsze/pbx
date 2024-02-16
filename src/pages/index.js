import Layout from '@/components/Layout'
import { LinkArrow } from '@/components/Icons'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>PBX | Desarrollo y Diseño Web</title>
        <meta name="description" content="PBX Diseño web" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full h-min-screen '>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className='w-full h-full object-cover bg-violet-800'></div>
        </div>
        <Layout className='pt-0'>
          <div className='w-full h-screen flex items-center justify-center bg-heroBg bg-cover bg-bottom lg:flex-col sm:bg-right
          '>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
              <AnimatedText text='Hacer posible lo imposible con código. ¡Bienvenidos!' className=' !text-6xl !text-left text-pink-400 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-lg font-medium text-white md:text-sm sm:text-xs'>
                Desarrollo de páginas web modernas y adaptables a diferentes dispositivos, basadas en interfaces orientadas en la fluida experiencia del usuario.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="https://api.whatsapp.com/send?phone=543765252582" target={"_blank"} className='flex items-center bg-green-700 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base' download={true}>
                  WhatsApp <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}