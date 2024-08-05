'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type MovieWatchType = {
  data: any
}

const MovieWatch: React.FC<MovieWatchType> = ({ data }) => {
  const [linkEmbed, setLinkEmbed] = useState('')

  const searchParams = useSearchParams()

  const movie = data?.movie
  const episodes = movie?.episodes[0]?.items
  const episode = searchParams.get('episode')

  useEffect(() => {
    episodes?.forEach((item: any) => {
      if (item?.name === episode) {
        setLinkEmbed(item?.embed)
      }
    })
  }, [])

  return (
    <div className="">
      <Breadcrumb className="mb-5">
        <BreadcrumbList className="text-white text-base">
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link href={`/movie/${movie?.slug}`}>{`Chi tiết phim ${movie?.name}`}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">{`Tập ${episode}`}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="">
        <iframe
          src={linkEmbed}
          title={movie?.name}
          width="100%"
          allowFullScreen={true}
          className="h-[400px] lg:h-[600px]"
        />
      </div>

      <div className="flex justify-center">
        <div className="w-[100%] lg:w-[70%] mt-10 p-4 bg-[#222222] rounded-md">
          <h1 className="text-white font-semibold pb-4">Danh sách tập:</h1>
          <div className="flex flex-wrap gap-3 max-h-[500px] overflow-y-auto scroll-smooth">
            {episodes?.map((item: any, index: number) => (
              <Link
                key={index}
                href={`/watch/${movie?.slug}?episode=${item?.name}`}
              >
                <div
                  className={`w-[100px] text-white text-center px-10 py-2 ${
                    episode === item?.name
                      ? "bg-red-500 hover:bg-red-400"
                      : "bg-neutral-700 hover:bg-neutral-600"
                  } rounded-md cursor-pointer transition`}
                >
                  {item?.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieWatch