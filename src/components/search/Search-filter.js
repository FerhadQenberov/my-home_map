
import React from 'react'

export default function Search() {
  return (
    <>
      <div className=" bg-white w-[919px] py-3 h-auto mt-10 rounded-xl flex items-center">
        <div className="w-[610px] ">
          <div className="flex   justify-around">
            <div>
              <h6 className='text-[14px] text-textColor font-semibold'>Elanın növü</h6>
              <p className='text-[18px] text-btnColor font-semibold'>Satılır</p>
            </div>
            <div>
              <h6 className='text-[14px] text-textColor font-semibold'>Əmlakın növü</h6>
              <p className='text-[18px] text-btnColor font-semibold'>Həyət evi</p>
            </div>
            <div>
              <h6 className='text-[14px] text-textColor font-semibold'> Otaq sayi</h6>
              <p className='text-[18px] flex text-btnColor font-semibold flex space-x-2'><span>İstənilən</span> <img src="img/up-down.svg" 
              alt='up-down' width={10} height={10}/></p>
            </div>
            <div>
              <h6 className='text-[14px] text-textColor font-semibold'>Şəhər</h6>
              <p className='text-[18px] text-btnColor font-semibold flex space-x-2 '><span>Bakı</span> <img src="img/up-down.svg" 
              alt='up-down' width={10} height={10}/></p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-btnColor w-[70px] h-[70px] rounded-2xl grid place-items-center">
            <img src="/img/search.svg" alt="search" width={24} height={24} />
          </button>
          <button className="bg-btnColor w-[206px] text-white h-[69px] rounded-2xl grid place-items-center">
            Ətraflı axtarış
          </button>
        </div>
      </div>
    </>
  )
}
