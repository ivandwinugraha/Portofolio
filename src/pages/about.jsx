import React from "react";
import Background from "../component/Background";

const About = () => {
  return (
    <>
      {/* content */}
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid lg:grid-cols-2 grid-cols-1 w-[100%] lg:h-[100%] h-auto lg:gap-4 m-4">

          {/* kiri */}
          <div className="w-full flex flex-col lg:pl-[20%] space-y-4 justify-center items-center py-10">
            <div className="lg:h-[350px] lg:w-[350px] h-[230px] w-[230px] shadow shadow-xl lg:rounded-xl rounded-full flex items-center justify-center overflow-hidden">
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
            <p>Saya merupakan seorang gay yang tampan, pemberani, bertitit panjang, dan memiliki kepribadian yang menyenangkan.  juga merupakan seorang pembasmi wibu yang selalu berusaha memperjuangkan hak-hak komunitas LGBTQ+. Selain itu, ia juga merupakan seorang yang kompeten di bidangnya dan tidak pernah takut menghadapi tantangan. Saya juga merupakan seorang yang tak pernah menyerah dan selalu siap untuk terus maju.</p>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}

export default About;
