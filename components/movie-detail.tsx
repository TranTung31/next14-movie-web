/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'
import { formatDateTimeDMY } from '@/lib/common'
import { MdDateRange } from 'react-icons/md'
import { IoTimerOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type MovieDetailType = {
  data: any
}

const MovieDetail: React.FC<MovieDetailType> = ({ data }) => {
  const [country, setCountry] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const movie = data?.movie
  const episodes = movie?.episodes[0]?.items
  const categoryKeys = Object.keys(movie?.category)

  useEffect(() => {
    categoryKeys.forEach((item: any, index: number) => {
      const group = movie?.category[item]?.group
      if (group?.name === 'Quốc gia') {
        const countryArr = movie?.category[item]?.list
        const nameCountryArr = countryArr.map((item: any) => item.name)
        setCountry(nameCountryArr.join(', '))
      } else if (group?.name === 'Thể loại') {
        const genreArr = movie?.category[item]?.list
        const nameGenreArr = genreArr.map((item: any) => item.name)
        setGenre(nameGenreArr.join(', '))
      }
    })
  }, [])

  return (
    <div className="flex flex-col">
      <Breadcrumb className="mb-5">
        <BreadcrumbList className="text-white text-base">
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">Movie Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="min-w-[310px] md:min-w-[360px]">
          <img
            src={movie?.thumb_url}
            alt={movie?.name}
            className="object-cover md:w-[360px] h-[576px] rounded-md"
          />
        </div>

        <div className="flex flex-col gap-5 min-w-[310px] md:max-w-[560px] xl:min-w-[960px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white text-lg font-semibold">
              <h2>{movie?.name}</h2>
              <span>-</span>
              <h2>{movie?.original_name}</h2>
            </div>
            <Button className="bg-red-500 text-white hover:bg-red-300">
              <FaPlus /> &nbsp; Add to favourite
            </Button>
          </div>

          <div className="flex items-center gap-3 flex-wrap text-white">
            <div className="text-black font-semibold text-sm p-2 rounded-md bg-white">
              {movie?.quality}
            </div>
            <div className="text-black font-semibold text-sm p-2 rounded-md bg-white">
              {movie?.language}
            </div>
            <div className="text-black font-semibold text-sm p-2 rounded-md bg-white">
              {movie?.current_episode}
            </div>
            <div className="text-white flex gap-1 items-center">
              <MdDateRange className="text-[18px]" />
              <p>{formatDateTimeDMY(movie?.created)}</p>
            </div>
            {movie?.time && (
              <div className="text-white flex gap-1 items-center">
                <IoTimerOutline className="text-[18px]" />
                <p>{movie?.time}</p>
              </div>
            )}
          </div>

          <div className="text-white">
            <span>{`Description: ${movie?.description}`}</span>
          </div>

          <div className="flex flex-col gap-1 text-white">
            <div>{`Country : ${country}`}</div>
            <div>{`Genre : ${genre}`}</div>
            <div>{`Date Release : ${formatDateTimeDMY(movie?.created)}`}</div>
            <div>{`Total episodes : ${movie?.total_episodes}`}</div>
            {movie?.director && <div>{`Director : ${movie?.director}`}</div>}
            {movie?.casts && <div>{`Cast : ${movie?.casts}`}</div>}
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[60%] max-h-[500px] mt-10 p-4 bg-gray-600 rounded-md">
        <h1 className="text-white font-semibold pb-4">Episodes:</h1>
        <div className="flex flex-wrap gap-3">
          {episodes?.map((item: any, index: number) => (
            <Link
              key={index}
              href={`/watch/${movie?.slug}?episode=${item?.name}`}
            >
              <div className="w-[100px] text-white text-center px-10 py-2 bg-red-500 rounded-md cursor-pointer hover:opacity-85">
                {item?.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail