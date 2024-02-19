import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectFloor } from '../../../manager/features/floorSlice'
import { floor } from '../../../manager/features/allState'

export default function Floor() {
  const dispatch = useDispatch()
  const count = useSelector(selectFloor)
 if (count) {
  dispatch(floor(count))
  
 }


  const handleDecrement = (e) => {
    e.preventDefault()
    dispatch(decrement())
  }

  const handleIncrement = (e) => {
    e.preventDefault()
    dispatch(increment())
  }
  return (
    <div className="pt-10 flex items-center relative  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
      <label className=" w-[250px] mb-2 text-[14px] font-medium ">
        Yerləşdiyi mərtəbə
      </label>
      <div className="bg-white border border-selectColor text-[14px] px-4 flex items-center rounded-[4px]">
        <button type='button' onClick={handleDecrement}>
          <img
            src="/formIcon/minus.svg"
            alt="form plus"
            width={12}
            height={20}
          />
        </button>
        <input
          type="text"
          min="0"
          value={count}
          className="  pl-4 outline-none h-[42px]  text-gray-900 text-[14px] rounded-[4px]   w-[44px] "
        />
        <button  type='button' onClick={handleIncrement}>
          <img
            src="/formIcon/plus.svg"
            alt="form minus"
            width={12}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}
