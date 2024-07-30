'use client'

import React from 'react'

type RecentlyMovieType = {
  data: any
}

const RecentlyMovie: React.FC<RecentlyMovieType> = ({ data }) => {
  console.log('🚀 ~ data:', data)
  return (
    <div>
      <h1 className="font-semibold px-10 py-2">Recently Updated</h1>
      <div className="flex flex-col gap-2">
        {data?.items?.map((item: any, index: number) => {
          return (
            <div key={index} className="px-10">{item?.name}</div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentlyMovie