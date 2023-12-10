import React from 'react'

const MissionVision = () => {
  return (
    <div className="max-w-7xl w-full mx-auto py-16 px-4">
    <div className="flex space-x-8">
      <div className="flex flex-col bg-[#F4F7FC] w-2/3 md:p-16 p-8 rounded-tl-[90px] rounded-br-[90px] md:space-y-16 space-y-8">
        <p className="font-bold text-slate-900 text-3xl text-center">
          Mission & Vision
        </p>
        <div className="flex flex-row md:space-x-16 space-x-8">
          <p className="text-slate-800 font-semibold">Mission</p>
          <p className="text-slate-500 text-sm">
            To provide both Zimbabwe and foreign students with excellent
            higher education within a range of managerial, economic and
            informatics as well as other degree programmes at the Bachelor,
            Masters and doctoral levels.
          </p>
        </div>
        <div className="flex flex-row md:space-x-16 space-x-8">
          <p className="text-slate-800 font-semibold">Vision</p>
          <p className="text-slate-500 text-sm">
            To assume the role of a leader in the market of managerial,
            economic and informatics education in Southern African
            Countries.
          </p>
        </div>
      </div>
      <div className="flex">
        {/* add timeline component */}
      </div>
    </div>
  </div>
  )
}

export default MissionVision