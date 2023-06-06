import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"



const Details = ({ position, company, companyLink, time, address, work }) => {

  return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
        target={"_blank"} className='text-primary capitalize'>@{company}</a>
      </h3>
      <span className='capitalize font-medium text-dark/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-4 lg:my-32'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experiencia
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position="Desarrollador Web"
            company="Freelance"
            companyLink="www.google.com"
            time="2022 - Presente"
            address="Posadas, Misiones"
            work="Actualmente desarrollando una página web para una asociación de fauna que se encarga de rescatar y liberar animales salvajes.
          Por otra parte, restan pequeños detalles para finalizar la página web de un luthier profesional que trabaja con artistas de 
          renombre en el ambiente del Rock Nacional. A futuro implementará E-Commerce."
          />
          <Details
            position="Vendedor Viajante"
            company="Solo Ofertas, Nestle S.A, Central Distribuciones"
            companyLink=""
            time="2016 - 2021"
            address="Posadas, Misiones"
            work="Trabajé como vendedor para distintas firmas siendo Nestlé S.A la que más se destaca donde fui uno de los primeros vendedores de la empresa 
          con excelentes devoluciones sobre mi desempeño. Desarrollo y coordinación de mi propia cartera de clientes con más de 60 visitas por día. Objetivo
           de ventas anuales siempre alcanzados."
          />
          <Details
            position="Periodista general y deportivo"
            company="MisionesOnline, MisionesADiario, Doble5inco"
            companyLink="www.google.com"
            time="2013 - 2016"
            address="Posadas, Misiones"
            work="Realicé trabajos de campo, coberturas de eventos deportivos, eventos masivos, conferencias, redacción y locución. Gestionaba el manejo de 
          redes sociales en vivo para la cobertura de eventos deportivos, la redacción de noticias y responsable de subir el contenido a la web."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience