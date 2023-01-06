import React from "react";
import Background from "../component/Background";

const About = () => {
  return (
    <>
      {/* content */}
      <div className="justify-center relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid lg:grid-cols-2 grid-cols-1 w-[100%] lg:h-[100%] h-auto lg:gap-4 m-4">

          {/* kiri */}
          <div className="w-full flex flex-col lg:pl-[20%] space-y-4 justify-center items-center py-10">
            <div className="lg:h-[350px] lg:w-[350px] h-[230px] w-[230px] shadow shadow-xl rounded-full flex items-center justify-center overflow-hidden">
              <img className="scale-[250%]" alt="error" src="/ivangay.jpg" />
            </div>
          </div>

          {/* kanan */}
          <div className="w-full pt-4 flex flex-col lg:pr-[20%] space-y-4 justify-center text-black">
            <div className="space-y-1 font-bold text-2xl">
              <p><span className="text-orange-500">Hello!</span>, my name is</p>
              <h1 className="text-6xl pb-2">Ivan Dwi Nugayha</h1>
              <p>Im a <span className="text-orange-500">Data Scientist</span></p>
            </div>
            <p>I am a data scientist with a passion for storytelling. I believe that words and data are the two most powerful tools to change the world.</p>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}

export default About;
