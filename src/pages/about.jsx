import React from "react";
import Background from "../component/Background";

const About = () => {
  return (
    <>
      {/* content */}
      <div className="justify-center relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] md:h-[100%] h-auto md:gap-4 m-4">

          {/* kiri */}
          <div className="w-full flex flex-col md:pl-[20%] space-y-4 justify-center items-center py-5">
            <div className="hover:scale-[103%] duration-300 md:h-[350px] md:w-[350px] h-[200px] w-[200px] shadow shadow-xl rounded-full flex items-center justify-center overflow-hidden">
              <img className="md:scale-[250%] scale-[150%]" alt="error" src="/ivangay.jpg" />
            </div>
          </div>

          {/* kanan */}
          <div className="w-full pt-4 flex flex-col md:pr-[20%] space-y-4 justify-center text-black">
            <div className="space-y-1 font-bold md:text-2xl text-lg">
              <p><span className="text-orange-500">Hello!</span>, my name is</p>
              <h1 className="text-4xl md:text-6xl md:pb-2">Ivan Dwi Nugayha</h1>
              <p>Im a <span className="text-orange-500">Data Scientist</span></p>
            </div>
            <p className="md:text-base text-sm">I am a data scientist with a passion for storytelling. I believe that words and data are the two most powerful tools to change the world.</p>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}

export default About;
