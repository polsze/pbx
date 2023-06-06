import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({type, time, place, info}) => {
  
  return <li  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
    <LiIcon/>
    <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}
      </h3>
      <span className='capitalize font-medium text-dark/75 xs:text-sm'>
        {time} | {place}
      </span>
      <p className='font-medium w-full md:text-sm'>
       {info} 
      </p>
    </motion.div>
  </li>
}



const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Cursos
      </h2>
      <div ref={ref} className='w-[75%] mb-48 mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
          type="Inglés IT Intermedio"
          time="2023"
          place="Silicon Misiones"
          info="Curso de inglés intermedio orientado a la programacion donde logré mejorar mi nivel del idioma. "
          />
          <Details
          type="Desarrollador Front End"
          time="2023"
          place="Silicon Misiones"
          info="Desarrollo y diseño Front End para páginas webs estáticas o dinámicas. Creación de portfolio personal."
          />
          <Details
          type="Inglés IT básico"
          time="2022"
          place="Centro Universitario de Idiomas"
          info="Curso de inglés básico orientado a la programación. Bueno introducción para los siguientes niveles."
          />
          <Details
          type="Argentina Programa"
          time="2022"
          place="Argentina"
          info="Introducción a la Programación. HTML, CSS, JavaScript, Angular, MySQL, Programación Orientada a Objetos, Java, Java Spring Boot."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education

 
