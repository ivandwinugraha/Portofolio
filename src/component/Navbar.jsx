import React from "react";
import { useState } from "react";

const tabMenu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Project",
    url: "/project",
  },
  {
    title: "Contact",
    url: "/contact",
  },

]

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (

    <nav className="fixed z-40 p-3 border-gray-200 rounded bg-white shadow shadow-md w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src="/favicon.ico" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black font-bold italic capitalize">VanDwi</span>
        </a>
        <button onClick={handleClick} className="border inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-md hover:bg-gray-100 duration-300" aria-controls="navbar-hamburger" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        {menu ?
          <div className="w-full" id="navbar-hamburger">
            <ul className="flex flex-col mt-4 rounded-lg ">
              {tabMenu.map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} className="block py-2 pl-3 pr-4 text-black hover:text-blue-800 hover:translate-y-1 duration-300 " aria-current="page">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          :
          ""
        }

      </div>
    </nav>

  );
}

export default Navbar;
