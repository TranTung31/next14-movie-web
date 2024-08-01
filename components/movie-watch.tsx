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
  const pathName = usePathname()
  const { replace } = useRouter()

  const movie = data?.movie
  const episodes = movie?.episodes[0]?.items
  const search = searchParams.get('episode')

  useEffect(() => {
    episodes?.forEach((item: any) => {
      if (item?.name === search) {
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
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-gray-300">
              <Link href={`/movie/${movie?.slug}`}>Movie Detail</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">Watch</BreadcrumbPage>
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
        <div className="w-[100%] lg:w-[60%] max-h-[500px] mt-10 p-4 bg-gray-600 rounded-md">
          <h1 className="text-white font-semibold pb-4">Episodes:</h1>
          <div className="flex flex-wrap gap-3">
            {episodes?.map((item: any, index: number) => (
              <Link key={index} href={`/watch/${movie?.slug}?episode=${item?.name}`}>
                <div className="w-[100px] text-white text-center px-10 py-2 bg-red-500 rounded-md cursor-pointer hover:opacity-85">
                  {item?.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieWatch