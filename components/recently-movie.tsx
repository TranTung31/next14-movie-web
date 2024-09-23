/* eslint-disable @next/next/no-img-element */
'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { formatDateTimeDMY } from '@/lib/common'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import React from 'react'

type RecentlyMovieType = {
  data: any
}

const RecentlyMovie: React.FC<RecentlyMovieType> = ({ data }) => {
  return (
    <div className="recently-movie">
      <header className="py-2">
        <h1 className="border-l-4 border-solid border-[#408BEA] pl-2 text-lg font-semibold text-white">
          Phim mới cập nhật
        </h1>
      </header>
      <div className="px-12 pb-5 pt-2 sm:px-12 lg:px-0">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {data?.items?.map((item: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <div className="p-1">
                  <Link key={index} href={`/movie/${item?.slug}`}>
                    <div className="flex h-[120px] min-w-[220px] max-w-[220px] cursor-pointer gap-5 text-white">
                      <div className="min-w-[80px] overflow-hidden rounded-md">
                        <img
                          src={item?.thumb_url}
                          alt={item?.name}
                          className="min-h-[120px] max-w-[80px] object-cover duration-200 ease-in hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-2 overflow-hidden">
                        <p className="truncate text-sm font-medium">
                          {item?.name}
                        </p>
                        <p className="text-sm">
                          {formatDateTimeDMY(item?.modified)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default RecentlyMovie
