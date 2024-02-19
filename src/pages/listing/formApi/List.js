import React from 'react'
import { useBuildTypesQuery } from '../../../manager/api/apiSlice'
import { useDispatch } from 'react-redux'
import { rentalTypes } from '../../../manager/features/allState'

export default function List() {
 
  const dispatch=useDispatch()
 

  const {data, isSuccess}=useBuildTypesQuery()
  
  let content
  if (isSuccess) {
    content=data.data?.map((type)=>{
      return   <option  key={type.id} value={type.id}>{type.name}</option>
    })
    
  }
  return (
    <div className="pt-10  flex items-center flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
          <label className=" w-[250px] mb-2 text-[14px] font-medium ">
            Kimlər üçündür
          </label>
          <select  onChange={(e)=>dispatch(rentalTypes(e.target.value))} className="bg-white border
           border-selectColor text-gray-900 text-[14px] rounded-[4px]  min-w-[100px] w-[304px]  max-w-[304px] p-2.5 ">
            {content}
          </select>
        </div>
  )
}
