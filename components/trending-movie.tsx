/* eslint-disable @next/next/no-img-element */
'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { IoTimerOutline } from 'react-icons/io5'

type TrendingMovieType = {
  data: any
}

const TrendingMovie: React.FC<TrendingMovieType> = ({ data }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-2">
        <h1 className="font-semibold text-white text-lg pl-2 border-solid border-l-4 border-[#408BEA]">
          Phim xu hướng
        </h1>
        <Link href="/genre/phim-dang-chieu?page=1">
          <div className="flex items-center gap-2 text-[#95a5a6] text-lg cursor-pointer hover:opacity-85">
            <span>Xem tất cả</span> <FaArrowRight />
          </div>
        </Link>
      </div>

      <div className="px-12 sm:px-12 lg:px-0 py-5">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="-ml-4">
            {data?.items?.map((item: any, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 pl-4"
              >
                <div className="p-1">
                  <Link key={index} href={`/movie/${item?.slug}`}>
                    <div className="flex flex-col gap-5 max-w-[200px] md:max-w-[368px] h-fit relative cursor-pointer">
                      <div className="">
                        <img
                          src={item?.poster_url}
                          alt={item?.name}
                          width={368}
                          className="object-cover h-[260px] rounded-md"
                        />
                      </div>
                      <div className="flex items-center justify-between max-w-[200px] md:max-w-[368px]">
                        <p className="text-white text-sm md:text-base w-[50%] overflow-hidden text-ellipsis">
                          {item?.name}
                        </p>
                        <div className="flex justify-end gap-2 pl-2">
                          <p className="text-white text-sm p-2 rounded-md bg-red-500">
                            {item?.quality}
                          </p>
                          <p className="text-white text-sm p-2 rounded-md bg-red-500">
                            {item?.language}
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 flex items-center gap-1 text-white text-sm bg-gradient-to-t from-transparent to-gray-400">
                        <IoTimerOutline className="text-[18px]" />
                        <p>{item?.time}</p>
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

export default TrendingMovie
