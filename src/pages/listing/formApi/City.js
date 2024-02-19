import React, {  useCallback, useState } from 'react'
import { useCityFetchQuery } from '../../../manager/api/apiSlice'
import { useDispatch } from 'react-redux'
import { setCityData, setCityId } from '../../../manager/features/formSlice'
import { cities } from '../../../manager/features/allState'

export default function City() {

  
  const dispatch = useDispatch()
  const [cityId, setCityiD] = useState()
 

  
  let content
  const { data, isSuccess} = useCityFetchQuery()

  const selectId =useCallback((e) => {
    const cityId = e.target.value
    setCityiD(cityId)
    dispatch(cities(cityId))

  }, []) 
 
  if (isSuccess) {

    content = data.data?.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    })

    dispatch(setCityId(cityId))
  }
  if (isSuccess) {
    dispatch(setCityData(data.data));
  }

  return (
    <div className="pt-10 flex items-center flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px]  ">
      <label className="block w-[250px] mb-2 text-[14px] font-medium ">
        Şəhər
      </label>
      <select
        onChange={(e) => selectId(e)}
        className="bg-white border border-selectColor text-gray-900 text-[14px] rounded-[4px]   w-[304px] p-2.5 "
      >
        <option value=""></option>
        {content}
      </select>
    </div>
  )
}
