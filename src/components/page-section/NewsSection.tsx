import NewsItem from '@components/news-item/NewsItem';
import React, { useState } from 'react'

type Props = {}

const NewsSection = (props: Props) => {
    const [selectedMonth, setSelectedMonth] = useState({
        month: "September",
        _id: "september",
      });
      const new_items = [
        { month: "September", _id: "september" },
        { month: "October", _id: "october" },
        { month: "November", _id: "november" },
        { month: "December", _id: "december" },
        { month: "More", _id: "more" },
      ];
  return (
    <div className="max-w-7xl px-4 w-full mx-auto md:py-16 py-8 min-h-[40vh] grid items-center">
        <div className="grid grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 col-span-5 space-y-16 ">
            <p className="text-3xl font-bold text-slate-900">News & Events</p>
            <div className="flex flex-row flex-wrap space-x-8">
              {new_items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMonth(item)}
                  className="flex flex-col cursor-pointer"
                >
                  <p
                    className={`${
                      selectedMonth._id === item._id
                        ? "bg-[#9747FF] text-white "
                        : "bg-[#E5D8FD] text-slate-700 "
                    } text-lg font-medium mb-4  px-4 py-2 rounded-full`}
                  >
                    {item.month}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 col-span-5 grid md:grid-cols-2 grid-cols-1 gap-8">
            <NewsItem />
            <NewsItem />
          </div>
        </div>
      </div>
  )
}

export default NewsSection