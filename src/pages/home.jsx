import React from "react";
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

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
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid lg:grid-cols-2 grid-cols-cols-1 w-[100%] h-[100%] ">

          {/* kiri */}
          <div className="w-full  flex flex-col px-0 lg:px-[20%] space-y-4 justify-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-black">Hi There,</h1>
            <div className="text-3xl lg:text-6xl font-bold text-black flex flex-col lg:flex-row lg:space-x-3">
              <p>Im</p>
              <p>Ivan</p>
              <p>Dwi</p>
              <span className="text-orange-500 ">Nugayha</span>
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
          <div className="w-full lg:flex hidden items-center justify-center ">
            <div className="h-[350px] w-[350px] rounded rounded-full shadow shadow-xl flex items-center justify-center overflow-hidden">
              <img className="scale-[250%]" alt="ivan gay" src="/ivangay.jpg" />
            </div>
          </div>
        </div>

      </div>

      {/* background */}
      <img src="/bg1.jpg" alt="error" className="w-[100%] h-full fixed inset-0 z-0 rotate-180" />
    </>
  );
}

export default Home;
