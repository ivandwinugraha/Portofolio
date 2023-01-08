import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Background from "../component/Background";

const iconMenu = [
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

        <div className="grid md:grid-cols-2 grid-cols-cols-1 w-[100%] md:h-[100%] ">

          {/* kiri */}
          <div className="md:order-1 order-2 w-full flex flex-col px-0 md:px-[20%] md:space-y-4 space-y-1 justify-center md:items-start items-center">
            <h1 className="text-2xl md:text-6xl font-bold text-black">Hi There,</h1>
            <div className="text-3xl md:text-6xl font-bold text-black flex flex-col md:flex-row md:space-x-3">
              <p>Im Ivan Dwi <span className="text-orange-500 ">Nugraha</span></p>
            </div>

            <p className="text-lg md:text-2xl text-black font-semibold pb-4">I am into <span className="text-red-700">Data Scientics</span></p>

            <span>
              <a href="/about" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                About Me
              </a>
              {/* <button className="btn btn-primary">About Me</button> */}
            </span>

            <div className="flex space-x-3 pt-4">
              {iconMenu.map((item, idx) => (
                <a href={item.url} key={idx} className="p-3 bg-black text-blue-300 hover:text-orange-500 duration-300 rounded rounded-full ">
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

          {/* kanan */}
          <div className="md:order-2 order-1 w-full flex flex-col md:pr-[20%] space-y-4 justify-center items-center py-5">
            <div className="hover:scale-[103%] duration-300  md:h-[350px] md:w-[350px] h-[200px] w-[200px] shadow shadow-xl rounded-full flex items-center justify-center overflow-hidden">
              <img className="md:scale-[250%] scale-[150%]" alt="error" src="/ivan.jpg" />
            </div>
          </div>
        </div>

      </div>

      <Background />
    </>
  );
}

export default Home;
