import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { villageArea } from '../../../manager/features/allState'

const Sahe = () => {
  const dispatch=useDispatch()
  const [text, setText] = useState(null)
  if (text) {
   dispatch(villageArea(text))
    
  }


 // HeyetYani sahe

  return (
    <>
      <div className="pt-10 flex items-center relative  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
        <label className=" w-[250px] mb-2 text-[14px] font-medium ">
          Həyətyanı sahə
        </label>
        <input
          type="number"
          min="10"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          className="bg-white  border outline-none h-[42px] border-selectColor text-gray-900 text-[14px] rounded-[4px]   w-[114px] p-2.5 "
        />
        <span className="bg-white text-gray-400  absolute left-[38%]   font-medium text-[18px]">
          {/* <sub>m</sub>2 */}
        </span>
      </div>
    </>
  )
}

export default Sahe
