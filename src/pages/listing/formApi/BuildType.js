import React, { useState } from 'react'
import { useApartmanTypesQuery } from '../../../manager/api/apiSlice'
import { useDispatch } from 'react-redux'
import { apartmentTypes } from '../../../manager/features/allState'

export default function BuildType() {
  const dispatch = useDispatch()

  function handleBuild(id) {
    dispatch(apartmentTypes(id))
  }

  const { isSuccess, data } = useApartmanTypesQuery()

  let content

  if (isSuccess) {
    content = data.data.map((item) => {
      return (
        
          <button
          key={item.id}
          type='button'
            onClick={() => handleBuild(item.id)}
            value={item.id}
            className={`w-[107px] rounded-s-[4px] text-[14px] font-medium h-[42px] text-textColor ${
              item.id === 1 ? 'bg-main' : 'bg-btnGray'
            }`}
          >
            {item.name}
          </button>
      
      )
    })
  }
  return (
    <div className="pt-10     ">

      <label htmlFor="elanTipi" className="  items-center flex flex-wrap  sm:w-auto w-full lg:w-full  ">
        <span className="font-medium w-[260px] text-formtext text-[14px] sm:mb-4 mb-0 ">
          Bina növü
        </span>
        <div>

        {content}
        </div>
       
      </label>
    </div>
  )
}



