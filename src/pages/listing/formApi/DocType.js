import React from 'react'
import { useDispatch } from 'react-redux'
import { homeDocument } from '../../../manager/features/allState'

export default function DocType() {
  const dispatch = useDispatch()
  function handleDoc(e) {
    const doc = e.target.value
    switch (doc) {
      case 'Kupçalı':
        dispatch(homeDocument(1))

        break
      case 'Kupçasiz':
        dispatch(homeDocument(2))

        break
      case 'Belediyye':
        dispatch(homeDocument(3))

        break
      case 'Çıxarış':
        dispatch(homeDocument(4))

        break

      default:
        break
    }
  }
  return (
    <div className="pt-10 flex items-center   flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
      <label className="block w-[250px] mb-2 text-[14px] font-medium ">
        Ev sənədi
      </label>
      <select
        onChange={handleDoc}
        className="bg-white border border-selectColor text-gray-900 text-[14px] rounded-[4px]   w-[304px] p-2.5 "
      >
        <option selected value=""></option>
        <option >Kupçalı</option>
        <option>Kupçasiz</option>
        <option>Belediyye</option>
        <option>Çıxarış</option>
      </select>
    </div>
  )
}
