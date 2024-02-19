import React from 'react'
import { useFetchTagsQuery } from '../../../manager/api/apiSlice'
import { useDispatch } from 'react-redux'
import { propertyType } from '../../../manager/features/allState'

export default  function PropertyType() {
  const dispatch=useDispatch()

  const {data, isSuccess}=useFetchTagsQuery()
  
  let content
  if (isSuccess) {
    content=data.data?.map((type)=>{
      return   <option key={type.id} value={type.id}>{type.name}</option>
    })
    
  }

  return (
    <div className="pt-10 flex items-center flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px]  ">
      <label className="block w-[250px] mb-2 text-[14px] font-medium">
        Əmlakın tipi
      </label>
      <select onChange={(e)=>dispatch(propertyType(e.target.value))} className="bg-white border border-selectColor text-gray-900 text-[14px] rounded-[4px] w-[304px] p-2.5">
     {content}
      </select>
    </div>
  )
}


