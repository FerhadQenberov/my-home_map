import React, { useState } from 'react'
import { Map } from '../Map'
import { useDispatch } from 'react-redux'
import { addres } from '../../../manager/features/allState'


export default function Address() {


  const dispatch = useDispatch()
  const [text, setText] = useState('')
  if (text) {
    dispatch(addres(text))
    
  }


  return (
    <div className="pt-10 flex  ">
      <label className="block w-[250px] mb-2 text-[14px] font-medium ">
        Ünvan
      </label>
      <div className="w-[620px]">
        <input
          required
          type="text"
          min="0"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className=" mb-4 pl-4 outline-none h-[42px] border border-[#E3E5E8]  text-gray-900 text-[14px] rounded-[4px] w-full max-w-[620px]   "
        />
        <Map />
      </div>
    </div>
  )
}
