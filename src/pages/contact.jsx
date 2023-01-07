import React from "react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Background from "../component/Background";

const contact = [
  {
    name: "Ivan Dwi N",
    icon: <SiLinkedin className='md:h-10 md:w-10 w-4 h-4' />,
    color: "hover:text-[#EAD41C]",
    url: "https://www.linkedin.com/in/ivan-dwi-n-459a11197/"
  },
  {
    name: "@vandwi_",
    icon: <SiInstagram className='md:h-10 md:w-10 w-4 h-4' />,
    color: "hover:text-[#EAD41C]",
    url: "https://www.instagram.com/vandwi_/"
  },
  {
    name: "Vandwi",
    icon: <SiGithub className='md:h-10 md:w-10 w-4 h-4' />,
    color: "hover:text-[#2F72BC]",
    url: "https://github.com/ivandwinugraha"
  },
]

const Contact = () => {

  return (
    <>
      {/* content */}
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="h-full w-full flex flex-col justify-center px-[10%]">

          <div className='relative flex space-x-2 pb-6 flex-row items-center justify-center'>
            <p><HiOutlineMail className='h-5 w-5 text-[#828282]' /></p>
            <a className='text-[#828282] hover:underline md:text-xl text-sm font-medium' href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ivandwinugraha45@gmail.com'>ivandwinugraha45@gmail.com</a>
          </div>

          {/* jangan disetuh tolol */}
          <div className='flex md:flex-row flex-col md:space-x-0.5 space-y-1.5 md:space-y-0 overflow-x-auto w-full'>
            {contact.map((item, idx) => (
              <a href={item.url} key={idx} className={`w-full min-w-[100px] h-14 md:h-28 flex items-center bg-cover bg-center w-full`}>
                <div className='h-full w-full backdrop-brightness-[0.3] hover:backdrop-brightness-[0.5] backdrop-contrast-[0.9] hover:backdrop-contrast-[1]' >
                  <div className='px-2 space-y-1 md:space-y-2 absolute text-transparent flex flex-col items-center justify-center h-full w-full hover:text-white pt-4 hover:pt-0 duration-300'>
                    <p className='uppercase text-center text-white'>{item.icon}</p>
                    <p className='text-[7px] md:text-xs text-center'>{item.name}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* sampai sini jangan disentuh goblok */}

        </div>

      </div>
      <Background />
    </>
  );
}

export default Contact;
