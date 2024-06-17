import React from "react";
import Innova from "../../assets/crystar.png";
import fortunersigma4 from "../../assets/fortuner.png";
import hcreta from "../../assets/creta.png";
import sdzire from "../../assets/dzire.png";
import hondacity from "../../assets/hcity.png";
import hi20 from "../../assets/i20.png";
import tnexon from "../../assets/nexon.png";
import tsafari from "../../assets/safari.png";
import scorpios11 from "../../assets/scorpio.png";
import sksuperb from "../../assets/superb.png";
import hverna from "../../assets/verna.png";
import mxuv from "../../assets/xuv.png";




const carList = [
  {
    name: "Toyota Innova Crystar",
    price: 116,
    image: Innova,
    aosDelay: "0",
  },
  {
    name: "Toyota Fortuner",
    price: 130,
    image: fortunersigma4,
    aosDelay: "500",
  },
  {
    name: "Hyundai Creta",
    price: 79,
    image: hcreta,
    aosDelay: "500",
  },
  {
    name: "Swift Dzire",
    price: 52,
    image: sdzire,
    aosDelay: "500",
  },
  {
    name: "Honda City",
    price: 60,
    image: hondacity,
    aosDelay: "500",
  },
  {
    name: "Hyundai Verna",
    price: 60,
    image: hverna,
    aosDelay: "500",
  },
  {
    name: "Mahindra Xuv500",
    price: 104,
    image: mxuv,
    aosDelay: "500",
  },
  {
    name: "Hyundai i20",
    price: 50,
    image: hi20,
    aosDelay: "500",
  },
  {
    name: "Tata Nexon",
    price: 50,
    image: tnexon ,
    aosDelay: "500",
  },
  {
    name: "Tata Safari",
    price: 108,
    image: tsafari,
    aosDelay: "500",
  },
  {
    name: "Mahindra Scorpio s11",
    price: 108,
    image: scorpios11,
    aosDelay: "500",
  },
  {
    name: "Skoda Superb",
    price: 75,
    image: sksuperb,
    aosDelay: "500",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Car Collections...
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10 italic">
        Unleash the power of choice with our diverse car lineup! 🚗💨
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-4 border-purple-300 hover:border-green-400 p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-cyan-500 font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>₹{data.price}/Hour</p>
                    <a href="#">Details➡️</a>
                  </div>
                </div>
                <p className="text-xl text-red-700 font-semibold absolute top-0 left-3">
                  18Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="sm:grid sm:place-items-center">
              <a
                href="#"
                className="inline-block font-semibold mt-5 py-2 px-6 bg-red-600 text-white hover:bg-green-900 duration-200 tracking-widest uppercase rounded-xl "
              >
                Get Started👆
              </a>
            </div>
      </div>
    </div>
  );
};

export default CarList;
