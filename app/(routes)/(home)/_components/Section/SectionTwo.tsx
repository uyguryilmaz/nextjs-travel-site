"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { TypeAnimation } from "react-type-animation";



import { easeOut, motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <div className="bg-orange-100 mt-12">
      <div className="mx-auto container text-center py-16 px-6 lg:px-28">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome TO TRAVEL",
            2000, // 
            "SEYAHATE HOŞ GELDİNİZ",
            2000,
            "WILLKOMEN BEI TRAVEL ",
            2000,
            "BIENVENUE A TRAVEL",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className='className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4"'
          repeat={Infinity}
        />

        <div className="flex justify-center items-center mb-7">
          <hr className="border-gray-500 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-500 w-1/5" />
        </div>

        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          veritatis illum odio fuga ratione autem sint cumque commodi sapiente
          nemo placeat, cupiditate harum. Maiores numquam, architecto debitis a
          alias quia! Rem, ad voluptas voluptatibus qui quis ullam quisquam eius
          deserunt recusandae labore saepe est natus eveniet tempore ducimus
          nostrum veniam?
        </p>
        <div className="flex justify-center gap-4">

            <motion.div
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1}}
            >

            

          <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
            Detail
          </Button>

          </motion.div>
          <Button className="bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition">
            Browse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
