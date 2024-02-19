import React from 'react'
import { useDispatch } from 'react-redux'
import { repeairTypes } from '../../../manager/features/allState'

export default function RepairType() {
  const dispatch=useDispatch()
  function handleRepair(params) {
    if (params==='temirli') {
      dispatch(repeairTypes(1))

      
    }
    else if (params==='Təmirsiz') {
      dispatch(repeairTypes(2))

      
    }
    
  }
  return (
    <div className="pt-10">
    <label htmlFor="elanTipi" className="   items-center flex flex-wrap  sm:w-auto w-full lg:w-full   ">
      <span className="font-medium w-[260px]  text-formtext text-[14px]">
        Təmir növü
      </span>
      <div>
        <button type='button' onClick={()=>handleRepair('temirli')} className="w-[94px] rounded-s-[4px] text-[14px] font-medium h-[42px] text-textColor bg-main">
          Təmirli
        </button>
        <button type='button' onClick={()=>handleRepair('Təmirsiz')} className="w-[104px] rounded-r-[4px] text-[14px] font-medium h-[42px] text-textColor bg-btnGray">
          Təmirsiz
        </button>
      </div>
    </label>
  </div>
  )
}
