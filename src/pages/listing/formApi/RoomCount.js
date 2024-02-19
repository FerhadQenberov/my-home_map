import React, { useReducer } from 'react'
import { roomCount } from '../../../manager/features/allState'
import { useDispatch } from 'react-redux'

const RoomCount = () => {
  const usedispatch = useDispatch()
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        if (state.count !== 0) {
          return { count: state.count - 1 }
        }
        break

      default:
        return { count: state.count }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  })
  if (state.count !== undefined) {
    usedispatch(roomCount(state.count));
  }

  return (
    <div className="pt-10 flex items-center relative  flex-wrap max-w-[600px]  lg:h-20 sm:h-[100px] ">
      <label className="w-[250px] mb-2 text-[14px] font-medium">
        Otaq sayı
      </label>
      <div className="bg-white border border-selectColor text-[14px] px-4 flex items-center rounded-[4px]">
        <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
          <img
            src="/formIcon/minus.svg"
            alt="Decrease room count"
            width={12}
            height={20}
          />
        </button>
        <input
          type="text"
          disabled={state.count < 0}
          min="0"
          value={state.count}
          className="pl-4 outline-none h-[42px] text-gray-900 text-[14px] rounded-[4px] w-[44px]"
        />
        <button type="button" onClick={() => dispatch({ type: 'increment' })}>
          <img
            src="/formIcon/plus.svg"
            alt="Increase room count"
            width={12}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default RoomCount
