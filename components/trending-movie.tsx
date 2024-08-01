/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { IoTimerOutline } from 'react-icons/io5'

type TrendingMovieType = {
  data: any
}

const TrendingMovie: React.FC<TrendingMovieType> = ({ data }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-white text-lg py-2">Trending</h1>
        <div className="flex items-center gap-2 text-[#95a5a6] text-lg cursor-pointer hover:opacity-85">
          <span>View all</span> <FaArrowRight />
        </div>
      </div>

      <div className="flex gap-10 overflow-x-auto whitespace-nowrap mb-5 py-5">
        {data?.items?.map((item: any, index: number) => (
          <Link key={index} href={`/movie/${item?.slug}`}>
            <div
              className="flex flex-col gap-5 min-w-[320px] h-fit relative cursor-pointer"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={item?.poster_url}
                  alt={item?.name}
                  width={320}
                  className="object-cover transition transform h-[260px] hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between max-w-[320px]">
                <p className="text-white text-base w-[50%] overflow-hidden text-ellipsis">
                  {item?.name}
                </p>
                <div className="flex justify-end gap-2 pl-2">
                  <p className="text-white text-sm p-2 rounded-md bg-red-500">
                    {item?.quality}
                  </p>
                  <p className="text-white text-sm p-2 rounded-md bg-red-500">
                    {item?.language}
                  </p>
                </div>
              </div>
              <div className="absolute top-2 left-2 flex items-center gap-1 text-white text-sm bg-gradient-to-t from-transparent to-gray-400">
                <IoTimerOutline className="text-[18px]" />
                <p>{item?.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TrendingMovie