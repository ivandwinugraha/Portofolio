import React from "react";

const About = () => {
  return (
    <>
      {/* content */}
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid grid-cols-2 w-[100%] h-[100%] ">

          {/* kiri */}
          <div className="w-full  flex flex-col px-[20%] space-y-4 justify-center">
            <div className="h-[350px] w-[350px] shadow shadow-xl flex items-center justify-center overflow-hidden">
                <img className="scale-[250%]" alt="error" src="/ivangay.jpg" />
            </div>
          </div>

          {/* kanan */}
          <div className="w-full pt-4 flex flex-col px-[20%] space-y-4 justify-center">
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Professional</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>techstacks</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>This is a list of technologies that I use in my profession as a frontend developer. Because I am still in the learning stage, in the future this list will continue to be updated.</p>
            </div>
            
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Professional</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>techstacks</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>This is a list of technologies that I use in my profession as a frontend developer. Because I am still in the learning stage, in the future this list will continue to be updated.</p>
            </div>
            </div>
        </div>

      </div>
      <img src="/bg1.jpg" alt="error" className="w-screen w-screen fixed inset-0 z-0" />
    </>
  );
}

export default About;
