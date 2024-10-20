/* eslint-disable @next/next/no-img-element */
'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { formatDateTimeDMY, formatServerUrl } from '@/lib/common'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoTimerOutline } from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md'

type MovieDetailProps = {
  data: any
}

const MovieDetail: React.FC<MovieDetailProps> = ({ data }) => {
  const [country, setCountry] = useState<string>('')
  const [genre, setGenre] = useState<string>('')

  const router = useRouter()

  const movie = data?.movie
  const episodesArr = movie?.episodes
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
  }, [categoryKeys, movie])

  return (
    <div className="flex flex-col">
      <Breadcrumb className="mb-5">
        <BreadcrumbList className="text-base text-white">
          <BreadcrumbItem>
            <BreadcrumbLink
              className="cursor-pointer hover:text-gray-300"
              onClick={() => {
                router.push('/')
              }}
            >
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">{`Chi tiết phim ${movie?.name}`}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
        <div className="min-w-[310px] md:min-w-[360px]">
          <img
            src={movie?.thumb_url}
            alt={movie?.name}
            className="h-[576px] rounded-md object-cover md:w-[360px]"
          />
        </div>

        <div className="flex min-w-[310px] flex-col gap-5 md:max-w-[560px] xl:min-w-[960px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <h2>{movie?.name}</h2>
              <span>-</span>
              <h2>{movie?.original_name}</h2>
            </div>
            {/* <Button className="bg-red-500 text-white hover:bg-red-600">
              <FaPlus /> &nbsp; Thêm vào yêu thích
            </Button> */}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-white">
            <div className="rounded-md bg-white p-2 text-sm font-semibold text-black">
              {movie?.quality}
            </div>
            <div className="rounded-md bg-white p-2 text-sm font-semibold text-black">
              {movie?.language}
            </div>
            <div className="rounded-md bg-white p-2 text-sm font-semibold text-black">
              {movie?.current_episode}
            </div>
            <div className="flex items-center gap-1 text-white">
              <MdDateRange className="text-[18px]" />
              <p>{formatDateTimeDMY(movie?.created)}</p>
            </div>
            {movie?.time && (
              <div className="flex items-center gap-1 text-white">
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
            {movie?.director && (
              <div>
                <span className="font-bold">Đạo diễn: </span>
                <span>{movie?.director}</span>
              </div>
            )}
            <div>
              <span className="font-bold">Diễn viên: </span>
              <span>{movie?.casts}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-[100%] rounded-md bg-[#222222] p-4 text-white">
        <h1 className="pb-5 font-semibold">Danh sách tập:</h1>
        {episodesArr?.map((episode: any, index: number) => (
          <div className="mb-3" key={index}>
            <h3 className="pb-3">{`Server: ${episode?.server_name}`}</h3>
            <div className="flex max-h-[500px] flex-wrap gap-3 overflow-y-auto scroll-smooth">
              {episode?.items?.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={`/watch/${movie?.slug}?episode=${item?.name}&server=${formatServerUrl(episode?.server_name)}`}
                >
                  <div className="w-[90px] cursor-pointer truncate rounded-md bg-neutral-700 px-5 py-1 text-center text-white hover:bg-neutral-600">
                    {item?.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetail
