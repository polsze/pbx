"use client"
import React from "react";
import useForm from "@/components/useForm.js";
import Head from 'next/head'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from "@/components/Layout";



const contact = () => {
  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
    telefono: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexPhoneNumber = /^[\d-]+$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "Teléfono" es obligatorio.';
    } else if (!regexPhoneNumber.test(form.telefono)) {
      errors.telefono = 'El campo "Teléfono" solo debe contener números y guiones.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  const phoneNumber = "1156367024"; // Número de teléfono para realizar la llamada

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
    <Head>
        <title>Pablo Barrios Developer | Contact Page</title>
        <meta name='description' content='Desarrollo y diseño de páginas web. '></meta>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        
        <div className="fixed inset-0 z-0 pointer-events-none bg-violet-800">

        </div>
        <Layout className="pt-16">
      <div className="flex flex-row items-center justify-center bg-contactBg bg-right bg-fixed flex-wrap py-24 sm:py-2">
       

        <div className="rounded font-oswald bg-violet-800 flex items-center justify-center flex-col shadow-lg w-[30%] 
          xl:w-[90%] 2xl:w-[100%] lg:w-[100%] sm:w-[100%]">
          <h4 className="pt-4 text-4xl font-bold text-center text-white sm:text-3xl sm:pb-4">ENVÍAME TU CONSULTA</h4>
          <p className="pt-4 px-24 w-[70%] text-white font-bold flex flex-col items-center 2xl:text-2xl  sm:w-full sm:px-4 sm:pb-4 sm:py-0 sm:text-xl">
            CONTACTAME POR CORREO ELECTRÓNICO O LLAMANDO AL:
          </p>
          <div className="flex flex-row items-center pb-4">
            <motion.button className="text-white bg-pink-400 mt-2 font-bold text-2xl px-3 py-2 rounded-xl sm:text-2xl sm:flex sm:justify-end 2xl:text-3xl"
              onClick={handlePhoneClick}>
              3765-252582
            </motion.button>
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="form-label font-bold text-pink-400 text-xl sm:pl-2 2xl:text-2xl">Nombre</label>
            <input
              type="text"
              className="form-control rounded-xl pl-1 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre aquí"
            />
            {errors.nombre && (
              <div className="alert alert-danger p-2 rounded-xl mt-1 sm:w-[95%] sm:mx-auto">{errors.nombre}</div>
            )}

            <label className="form-label text-pink-400 pt-2 font-bold text-xl sm:pl-2 2xl:text-2xl">Correo electrónico</label>
            <input
              type="email"
              className="form-control rounded-xl pl-1 sm:w-[95%] sm:mx-auto hover:bg-sky-200 "
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico aquí"
            />
            {errors.correo && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.correo}</div>
            )}

            <label className="form-label text-pink-400 pt-2 font-bold text-xl sm:pl-2 2xl:text-2xl">Asunto</label>
            <input
              type="text"
              className="form-control rounded-xl pl-1 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              placeholder="Ingrese su asunto aquí"
            />
            {errors.asunto && (
              <div className="alert alert-danger rounded-xl mt-1 p-2 sm:w-[95%] sm:mx-auto">{errors.asunto}</div>
            )}

            <label className="form-label text-pink-400 pt-2 font-bold text-xl sm:pl-2 2xl:text-2xl">Teléfono</label>
            <input
              type="text"
              className="form-control rounded-xl pl-1 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Ingrese su número de teléfono aquí"
            />
            {errors.telefono && (
              <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.telefono}</div>
            )}

            <label className="form-label text-pink-400 pt-2 font-bold text-xl sm:pl-2 2xl:text-2xl">Mensaje</label>
            <textarea
              className="form-control rounded-xl pl-1 sm:w-[95%] sm:mx-auto hover:bg-sky-200"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              cols="40"
              rows="6"
              placeholder="Ingrese mensaje aquí"
            />
            {errors.mensaje && (
              <div className="alert alert-danger p-2 mt-1 rounded-xl sm:w-[95%] sm:mx-auto">{errors.mensaje}</div>
            )}

            <div className="flex items-center justify-center py-4">
              <motion.button
                className="text-white py-2 rounded-xl font-bold text-xl bg-pink-400 
              w-[100%] sm:w-[95%]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      </Layout>
      </main>
    </>
  );
};

export default contact;