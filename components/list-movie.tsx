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

type ListMovieProps = {
  data: any
  title: string
  viewAll: string
}

const ListMovie: React.FC<ListMovieProps> = ({ data, title, viewAll }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-2">
        <h1 className="border-l-4 border-solid border-[#408BEA] pl-2 text-lg font-semibold text-white">
          {title}
        </h1>
        <Link href={viewAll}>
          <div className="flex cursor-pointer items-center gap-2 text-lg text-[#95a5a6] hover:opacity-85">
            <span>Xem tất cả</span> <FaArrowRight />
          </div>
        </Link>
      </div>

      <div className="px-12 pb-5 pt-2 sm:px-12 lg:px-0">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {data?.items?.map((item: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Link href={`/movie/${item?.slug}`} key={index}>
                    <div className="relative flex h-fit max-w-[200px] cursor-pointer flex-col gap-3 rounded-md bg-[#282828] pb-2 text-white md:max-w-[368px]">
                      <div className="overflow-hidden rounded-tl-md rounded-tr-md">
                        <img
                          src={item?.thumb_url}
                          alt={item?.name}
                          width={368}
                          className="h-[260px] object-cover object-center duration-200 ease-in hover:scale-105 md:h-[390px]"
                        />
                      </div>
                      <div className="flex max-w-[200px] flex-col gap-1 px-2 md:max-w-[368px]">
                        <h3 className="truncate text-[15px] font-medium text-white">
                          {item?.name}
                        </h3>
                        <span className="truncate text-sm font-medium text-gray-400">
                          {item?.original_name}
                        </span>
                      </div>
                      <div className="absolute top-2 flex items-center gap-1 rounded-br-md rounded-tr-md bg-[#a3765d] px-1 py-[3px] text-xs font-medium">
                        <p>{item?.current_episode}</p>
                        <p>{item?.language}</p>
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

export default ListMovie
