'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { formatServerUrl } from '@/lib/common'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type MovieWatchProps = {
  data: any
}

const MovieWatch: React.FC<MovieWatchProps> = ({ data }) => {
  const [linkEmbed, setLinkEmbed] = useState('')

  const searchParams = useSearchParams()

  const movie = data?.movie
  const episodesArr = movie?.episodes
  const episodeSearchParam = searchParams.get('episode')
  const serverSearchParam = searchParams.get('server')

  useEffect(() => {
    episodesArr?.forEach((episode: any) => {
      if (formatServerUrl(episode?.server_name) === serverSearchParam) {
        episode?.items?.forEach((item: any) => {
          if (item?.name === episodeSearchParam) {
            setLinkEmbed(item?.embed)
          }
        })
      }
    })
  }, [episodesArr, episodeSearchParam, serverSearchParam])

  return (
    <div className="">
      <Breadcrumb className="mb-5">
        <BreadcrumbList className="text-base text-white">
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link
                href={`/movie/${movie?.slug}`}
              >{`Chi tiết phim ${movie?.name}`}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">{`Tập ${episodeSearchParam}`}</BreadcrumbPage>
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

      <div className="mt-10 w-[100%] rounded-md bg-[#222222] p-4">
        <h1 className="pb-4 font-semibold text-white">Danh sách tập:</h1>
        {episodesArr?.map((episode: any, index: number) => (
          <div className="mb-3" key={index}>
            <h3 className="pb-3">{`Server: ${episode?.server_name}`}</h3>
            <div className="flex max-h-[500px] flex-wrap gap-3 overflow-y-auto scroll-smooth">
              {episode?.items?.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={`/watch/${movie?.slug}?episode=${item?.name}&server=${formatServerUrl(episode?.server_name)}`}
                >
                  <div
                    className={`w-[90px] truncate px-5 py-1 text-center text-white ${
                      episodeSearchParam === item?.name &&
                      serverSearchParam ===
                        formatServerUrl(episode?.server_name)
                        ? 'bg-red-500 hover:bg-red-400'
                        : 'bg-neutral-700 hover:bg-neutral-600'
                    } cursor-pointer rounded-md transition`}
                  >
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

export default MovieWatch
