import React from 'react'

const loading = () => {
  return (
    <div className="grid grid-cols-4 gap-3 container py-[30px] max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1">
      {Array(4).fill(null).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-0.5 border-gray-200 bg-white overflow-hidden"
        >
          <div className="w-full aspect-[1/1] h-[300px] relative bg-[#F0EEED] rounded-[20px] animate-pulse" />
          <div className="flex flex-col gap-1.5 p-4">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default loading

