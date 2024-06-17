import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-teal-500 py-8 px-6 rounded-xl ">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Together, we pave the way for your adventures. Experience the synergy of collaborative car rental excellence! 🛣️🤝
              </h1>
              <p className="text-red-900 italic">
              #CollaborativeExcellence{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="#"
                className="inline-block font-semibold py-2 px-6 bg-orange-900 text-white hover:bg-green-900 duration-200 tracking-widest uppercase rounded-xl "
              >
                Contact👆
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
