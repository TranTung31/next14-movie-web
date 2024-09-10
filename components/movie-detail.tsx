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
              <Link href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">{`Chi tiết phim ${movie?.name}`}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
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
            <Button className="bg-red-500 text-white hover:bg-red-600">
              <FaPlus /> &nbsp; Thêm vào yêu thích
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
            <span className="font-bold">Mô tả: </span>
            <span>{movie?.description}</span>
          </div>

          <div className="flex flex-col gap-1 text-white">
            <div>
              <span className="font-bold">Quốc gia: </span>
              <span>{country}</span>
            </div>
            <div>
              <span className="font-bold">Thể loại: </span>
              <span>{genre}</span>
            </div>
            <div>
              <span className="font-bold">Ngày ra mắt: </span>
              <span>{formatDateTimeDMY(movie?.created)}</span>
            </div>
            <div>
              <span className="font-bold">Tổng số tập: </span>
              <span>{movie?.total_episodes}</span>
            </div>
            <div>
              <span className="font-bold">Đạo diễn: </span>
              <span>{movie?.director}</span>
            </div>
            <div>
              <span className="font-bold">Diễn viên: </span>
              <span>{movie?.casts}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[70%] mt-10 p-4 bg-[#222222] rounded-md">
        <h1 className="text-white font-semibold pb-4">Danh sách tập:</h1>
        <div className="flex flex-wrap gap-3 max-h-[500px] overflow-y-auto scroll-smooth">
          {episodes?.map((item: any, index: number) => (
            <Link
              key={index}
              href={`/watch/${movie?.slug}?episode=${item?.name}`}
            >
              <div className="w-[100px] text-white text-center px-10 py-2 bg-neutral-700 rounded-md cursor-pointer hover:bg-neutral-600">
                {item?.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
