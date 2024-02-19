import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo.svg'


const Navbar = () => {
  const [show, setShow]=useState(false)
  const params=useLocation()
  
 
  
  return (
    <>
      <header className={`${params.pathname==='/listining' ? 'bg-transparent': "bg-main" } "text-[16px]"`}>
        <div className="max-w-[1300px] mx-auto ">
          <nav>
            <div className={`max-w-screen-2xl flex flex-wrap ${params.pathname === '/auth/signin' || params.pathname === '/auth/signup' ? 'absolute' : 'static'}    items-center justify-between py-4`}>
              <Link to="/"  className="flex items-center">
                <img
                  src={logo}
             
                  alt="logo-header"
                />
              </Link>
               <button
               onClick={()=>setShow(!show)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div
                className="opacity-block
                block delay-140   w-full md:block md:w-auto"
              >
                <ul className={`flex flex-col  ${show ? 'hidden':"flex"} font-medium p-4 md:p-0 mt-4 rounded-lg b md:flex-row md:space-x-8 md:mt-0 md:border-0 `}>
                  <li className="group">
                    <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      Home
                     
                    </button>

                    <div
                      id="dropdownNavbar "
                      className="absolute z-9999 rounded-md  group-hover:block bg-white transition-all group-hover:delay-200 hidden   divide-yrounded-lg shadow"
                    >
                      <ul className="py-2 rounded-2xl  text-textColor font-semibold text-[16px]">
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2">
                            Dashboard
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2 ">
                            Settings
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2 ">
                            Earnings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                     
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      Listing
                     
                    </button>

                    <div
                   
                      className="absolute z-9999 rounded-md  group-hover:block bg-white transition-all group-hover:delay-200 hidden   divide-yrounded-lg shadow"
                    >
                      <ul className="py-2 rounded-2xl  text-textColor font-semibold text-[16px]">
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2">
                            Dashboard
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2 ">
                            Settings
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2 ">
                            Earnings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="group">
                    <button
                     
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      Agents
                    
                    </button>

                    <div className="absolute z-9999 rounded-md  group-hover:block bg-white transition-all group-hover:delay-200 hidden   divide-yrounded-lg shadow">
                      <ul className="py-2 rounded-2xl  text-textColor font-semibold text-[16px]">
                        <li className="hover:bg-main">
                          <a className="block px-4 py-2">
                            Dashboard
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a className="block px-4 py-2 ">
                            Settings
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a className="block px-4 py-2 ">
                            Earnings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                    
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Property
                    </a>
                  </li>
                  <li className="group">
                    <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                      Other Pages
                    
                    </button>

                    <div className="absolute z-9999 rounded-md  group-hover:block bg-white transition-all group-hover:delay-200 hidden   divide-yrounded-lg shadow">
                      <ul className="py-2 rounded-2xl  text-textColor font-semibold text-[16px]">
                        <li className="hover:bg-main">
                          <a  className="block px-4 py-2">
                            Dashboard
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a className="block px-4 py-2 ">
                            Settings
                          </a>
                        </li>
                        <li className="hover:bg-main">
                          <a className="block px-4 py-2 ">
                            Earnings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="lg:hidden md:hidden  flex  flex-wrap justify-around mt-10">
                  <Link to="/listining"  className="bg-btnColor border-0 transition-all delay-200 my-2 hover:scale-105  w-[225px] h-[48px] rounded-[10px] text-white text-center">
                    Elan yerləşdir
                  </Link>
                  <button className="hover:bg-btnColor hover:text-white my-2 text-btnColor border transition-all delay-200 hover:scale-105   border-btnColor  w-[95px] h-[44px] rounded-[10px]">
                    Giriş
                  </button>
                </div>
              </div> 
             
             {params.pathname==='/listining'?(
              <div className=" space-x-9 lg:block block max-[768px]:hidden max-[992px]:justify-between">
                <Link >
                  <button className="hover:bg-btnColor hover:text-white text-btnColor border-0 transition-all delay-200 hover:scale-105   border-btnColor  w-[95px] h-[44px] rounded-[10px]">
                    Search
                  </button>
                </Link>

             <Link to="/auth/signin">
             <button className="hover:bg-btnColor hover:text-white text-btnColor border transition-all delay-200 hover:scale-105   border-btnColor  w-[95px] h-[44px] rounded-[10px]">
                  Log in
                </button>
             
             </Link>
              </div>
             ):(
              <div className=" space-x-9 lg:block block max-[768px]:hidden max-[992px]:justify-between">
              <Link to="/listining">
                <button className="bg-btnColor border-0 transition-all delay-200 hover:scale-105  w-[225px] h-[48px] rounded-[10px] text-white">
                  Elan yerləşdir
                </button>
              </Link>

              <button className="hover:bg-btnColor hover:text-white text-btnColor border transition-all delay-200 hover:scale-105   border-btnColor  w-[95px] h-[44px] rounded-[10px]">
                Giriş
              </button>
            </div> 
             )}
          

             
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
