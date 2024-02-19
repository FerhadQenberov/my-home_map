import React, { useState } from 'react'
import { useVillageFetchQuery } from '../../../manager/api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllDistrict, settLementId, settleData } from '../../../manager/features/formSlice';
import { villages } from '../../../manager/features/allState';


export default function Settlement() {
  const districtId = useSelector(selectAllDistrict)
  const [settlement, setSettle] = useState()
  const dispatch=useDispatch()
  
  const selectId = (e) => {
    const settleId = e.target.value
    setSettle(settleId)
   
    

  }
  const { data, isSuccess } = useVillageFetchQuery(districtId)

  let content

  if (isSuccess) {
    content = data.data?.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    })
  }
  if (isSuccess) {
    dispatch(settLementId(settlement));
    dispatch(villages(settlement))
    
  }
  if (isSuccess) {
    dispatch(settleData(data.data));
  }

  return (
    <>
      {data?.data?.length > 0 && (
        <div className="pt-10 flex items-center  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
          <label className="block w-[250px] mb-2 text-[14px] font-medium">
            Qəsəbə
          </label>
          <select   onChange={(e) => selectId(e)} className="bg-white border border-selectColor text-gray-900 text-[14px] rounded-[4px] w-[304px] p-2.5">
            <option selected>-</option>
            {content}
          </select>
        </div>
      )}
    </>
  );
  
  
}
