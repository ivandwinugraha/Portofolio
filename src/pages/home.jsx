import React from "react";
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Background from "../component/Background";

const iconMenu = [
  {
    icon: <BsTwitter />,
    url: "https://google.com"
  },
  {
    icon: <BsGithub />,
    url: "https://github.com/ivandwinugraha"
  },
  {
    icon: <BsInstagram />,
    url: "https://www.instagram.com/vandwi_/"
  },
  {
    icon: <BsLinkedin />,
    url: "https://www.instagram.com/vandwi_/"
  },
]

const Home = () => {
  return (
    <>
      {/* content */}
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] justify-center">

        <div className="grid lg:grid-cols-2 grid-cols-cols-1 w-[100%] lg:h-[100%] ">

          {/* kiri */}
          <div className="lg:order-1 order-2 w-full flex flex-col px-0 lg:px-[20%] space-y-4 justify-center lg:items-start items-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-black">Hi There,</h1>
            <div className="text-3xl lg:text-6xl font-bold text-black flex flex-col lg:flex-row lg:space-x-3">
              <p>Im Ivan Dwi <span className="text-orange-500 ">Nugayha</span></p>
            </div>

            <p className="text-2xl text-black font-semibold">I am into <span className="text-red-700">Data Scientics</span></p>

            <span>
              <a href="/about" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                About Me
              </a>
              {/* <button className="btn btn-primary">About Me</button> */}
            </span>

            <div className="flex space-x-3">
              {iconMenu.map((item, idx) => (
                <a href={item.url} key={idx} className="p-3 bg-black text-blue-300 rounded rounded-full ">
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

          {/* kanan */}
          <div className="lg:order-2 order-1 w-full flex flex-col lg:pl-[20%] space-y-4 justify-center items-center py-10">
            <div className="lg:h-[350px] lg:w-[350px] h-[230px] w-[230px] shadow shadow-xl rounded-full flex items-center justify-center overflow-hidden">
              <img className="scale-[250%]" alt="error" src="/ivangay.jpg" />
            </div>
          </div>
        </div>

      </div>

      <Background />
    </>
  );
}

export default Home;
