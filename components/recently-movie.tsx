/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import React from 'react'
import { formatDateTimeDMY } from '@/lib/common'

type RecentlyMovieType = {
  data: any
}

const RecentlyMovie: React.FC<RecentlyMovieType> = ({ data }) => {
  return (
    <div className="recently-movie">
      <h1 className="font-semibold text-white text-lg py-2">Recently Updated</h1>
      <div className="flex gap-10 overflow-x-auto whitespace-nowrap mb-5 py-5">
        {data?.items?.map((item: any, index: number) => (
          <div key={index} className="flex gap-5 min-w-[220px] h-[120px] cursor-pointer">
            <div className="overflow-hidden rounded-md">
              <img
                src={item?.thumb_url}
                alt={item?.name}
                width={80}
                height={120}
                className="object-cover transition transform hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center overflow-hidden">
              <p className="text-white text-sm overflow-hidden text-ellipsis">{item?.name}</p>
              <p className="text-white text-sm">{formatDateTimeDMY(item?.modified)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyMovie