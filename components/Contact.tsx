import React, { useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import AnimatedCircles from "./AnimatedCircles";

function Contact() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex flex-col relative text-center px-10 justify-evenly max-w-3xl mx-auto items-center pt-20 pb-10"
    >
      <AnimatedCircles />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="flex items-center justify-center text-3xl font-serif font-bold tracking-[10px] uppercase text-gray-700 dark:text-gray-200 pt-28 pb-4">
          contact
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h4 className="my-4 text-1xl text-gray-700 dark:text-gray-200 font-serif tracking-[2px]">
          {`If you think I have what you need, let's talk`}
        </h4>
      </motion.div>

      <motion.div
        className="flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex justify-center pb-4 space-x-2 text-gray-700 dark:text-gray-200 font-serif tracking-[2px]">
          <MapPinIcon className="h-4 w-4" />
          <p className="contact-p">Tallinn, Estonia</p>
        </div>
      </motion.div>

      <ContactForm />
    </div>
  );
}

export default Contact;
