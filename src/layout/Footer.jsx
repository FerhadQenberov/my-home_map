
import logo from '../assets/img/logo.svg'
import youtub from '../assets/img/youtube.svg'
import twitter from '../assets/img/twitter.svg'
import insta from '../assets/img/instagram.svg'
import fb from '../assets/img/facebook.svg'
import linked from '../assets/img/linkedln.svg'

import React from 'react'


const Footer = () => {
  return (
    <>
      <footer className="w-full py-20 ">
        <div className="max-w-screen-2xl    h-full mx-auto flex flex-wrap items-center  justify-between ">
          <div className='font-semibold mx-auto  text-[16px] text-textColor'>
          <a href="#">
          <img
              src={logo}
              width={120}
              height={20}
              alt="logo-header"
              className='py-4'
            />
          </a>
            <div  className='py-4'>
              <p > 59 Bervely Hill Ave, Brooklyn Town,</p>
              <p>New York, NY 5630, CA, US</p>
            </div>
            <div className='py-2'>
              <p>+056 686 56 56 98</p>
              <p>info@staticmania.com</p>
            </div>
            <div className="flex space-x-3 py-2">
              <a href="#">
                {' '}
                <img
                  src={fb}
                  width={30}
                  height={30}
                  alt="logo-header"
                />
              </a>

              <a href="#">
                {' '}
                <img
                  src={twitter}
                  width={30}
                  height={30}
                  alt="logo-header"
                />
              </a>

              <a href="#">
                {' '}
                <img
                  src={insta}
                  width={30}
                  height={30}
                  alt="logo-header"
                />
              </a>

              <a href="#">
                {' '}
                <img
                  src={linked}
                  width={30}
                  height={30}
                  alt="logo-header"
                />
              </a>

              <a href="#">
                {' '}
                <img
                  src={youtub}
                  width={30}
                  height={30}
                  alt="logo-header"
                />
              </a>
            </div>
          </div>

          <div className='grid lg:grid-cols-4 mx-auto  md:grid-cols-2 gap-8   grid-cols-2 w-[50%] text-textColor'>
            <div>
              <h2 className='font-bold text-btnColor text-[18px]'>Features</h2>
              <ul className='font-semibold  text-[16px]'>
                <a href="#">
                  {' '}
                  <li className='py-2'>Home v1</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>Home v2</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>About</li>
                </a>
                <a href="/">
                  {' '}
                  <li className='py-2'>Contact</li>
                </a>
                <a href="/">
                  {' '}
                  <li className='py-2'>Search</li>
                </a>
              </ul>
            </div>
            <div>
              <h2 className='font-bold  text-btnColor text-[18px]'>Informations</h2>
              <ul className='font-semibold text-[16px]'>
                <a >
                  {' '}
                  <li className='py-2'>Home v1</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>Home v2</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>About</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>Contact</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>Search</li>
                </a>
              </ul>
            </div>
            <div >
              <h2 className='font-bold  text-btnColor text-[18px]'>Documention</h2>
              <ul className='font-semibold text-[16px] '>
                <a >
                  {' '}
                  <li className='py-2'>Home v1</li>
                </a>
                <a>
                  {' '}
                  <li className='py-2'>Home v2</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>About</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>Contact</li>
                </a>
                <a >
                  {' '}
                  <li className='py-2'>Search</li>
                </a>
              </ul>
            </div>
            <div>
              <h2 className='font-bold  text-btnColor text-[18px]'>Others</h2>
              <ul className='font-semibold text-[16px] text-textColor'>
                <a href="#">
                  {' '}
                  <li className='py-2'>Home v1</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>Home v2</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>About</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>Contact</li>
                </a>
                <a href="#">
                  {' '}
                  <li className='py-2'>Search</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
