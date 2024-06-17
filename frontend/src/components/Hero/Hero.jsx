import React, { useEffect, useState } from "react";
import blackcar from "../../assets/Innova.png";
import whitecar from "../../assets/frontimg.png";
import AOS from "aos";
import Form from "../Forms/form";


const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? blackcar : whitecar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-purple-800 font-bold text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-5xl italic font-semibold font-serif"
            >
             Self-Drive Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="italic">
            From city streets to scenic routes, we've got your ride. 🛣️ #TravelInStyle....Get behind the wheel of possibility. 🚀 #EndlessAdventures{" "}
            </p>
            {/* <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-orange-500 hover:bg-green-900 transition duration-500 py-2 px-6 text-black"
            >
              Get Started👆
            </button> */}
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
