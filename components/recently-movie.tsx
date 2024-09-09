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
      <h1 className="font-semibold text-white text-lg py-2">
        Phim mới cập nhật
      </h1>
      <div className="px-12 sm:px-12 lg:px-0 py-5">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {data?.items?.map((item: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <div className="p-1">
                  <Link key={index} href={`/movie/${item?.slug}`}>
                    <div className="flex gap-5 max-w-[220px] h-[120px] cursor-pointer">
                      <div className="overflow-hidden min-w-[80px] rounded-md">
                        <img
                          src={item?.thumb_url}
                          alt={item?.name}
                          className="object-cover max-w-[80px] min-h-[120px] transition transform hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-center overflow-hidden">
                        <p className="text-white text-sm overflow-hidden text-ellipsis">
                          {item?.name}
                        </p>
                        <p className="text-white text-sm">
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
