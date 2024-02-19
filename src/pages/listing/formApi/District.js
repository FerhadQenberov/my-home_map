import React, { useCallback, useEffect, useState } from 'react'
import { useRegionFetchQuery } from '../../../manager/api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllCity,
  setDistrictData,
  setDistrictId,
} from '../../../manager/features/formSlice'
import { region } from '../../../manager/features/allState'

export default function District() {
  const [villageId, setVillageId] = useState(0)
  const cityId = useSelector(selectAllCity)

  const dispatch = useDispatch()
  const { isSuccess, data } = useRegionFetchQuery(cityId)

  let content

  const handleId = useCallback((e)=>{

    setVillageId(e.target.value)
  

  }, []) 
  dispatch(setDistrictId(villageId))
  
  dispatch(region(villageId))

  if (isSuccess) {
    content = data.data?.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  if (isSuccess) {
    dispatch(setDistrictData(data.data))
   
  }

  return (
    <>
      {data?.data?.length > 0 ? (
        <div className="pt-10 flex items-center  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
          <label className="block w-[250px] mb-2 text-[14px] font-medium">
            Rayon
          </label>
          <select
            onChange={(e) => handleId(e)}
            className="bg-white border border-selectColor text-gray-900 text-[14px] rounded-[4px] w-[304px] p-2.5"
          >
            <option value=""></option>
            {content}
          </select>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
