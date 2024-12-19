import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
// import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
// import { MdLocationPin } from "react-icons/md";
import ContactForm from "./ContactForm";
// import { MapPinIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <div className="flex flex-col relative text-center px-10 justify-evenly max-w-3xl mx-auto items-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Placeholder for letter avatars */}
      </motion.div>

      <div>
        <h4 className="mt-12 mb-4 text-1xl text-gray-700 dark:text-gray-200 font-serif">
          {`If you think I have what you need, let's talk`}
        </h4>
      </div>
      <div className="flex-row">
        <div className="flex justify-center pb-7 space-x-2 text-gray-700 dark:text-gray-200 font-serif">
          <MapPinIcon className="h-4 w-4" />
          <p className="contact-p">Tallinn, Estonia</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
