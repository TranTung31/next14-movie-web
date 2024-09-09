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
import Paginator from '@/components/common/paginator'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IoTimerOutline } from 'react-icons/io5'

type GenreMovieProps = {
  data: any
  currentPage: number
  breadCrumbTitle?: string
}

const GenreMovie: React.FC<GenreMovieProps> = ({
  data,
  currentPage,
  breadCrumbTitle,
}) => {
  const pagination = data?.paginate
  const router = useRouter()
  const pathName = usePathname()

  const handlePageChange = (page: any) => {
    router.push(`${pathName}?page=${page.toString()}`)
  }

  return (
    <div className="text-white">
      <Breadcrumb className="mb-5">
        <BreadcrumbList className="text-white text-base">
          <BreadcrumbItem>
            <BreadcrumbLink
              className="hover:text-gray-300"
              onClick={() => router.push('/')}
            >
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-500">
              {breadCrumbTitle || 'Phim theo thể loại'}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap gap-8 justify-center md:justify-normal">
        {data?.items?.map((item: any, index: number) => (
          <Link href={`/movie/${item?.slug}`} key={index}>
            <div className="flex flex-col gap-3 min-w-[200px] h-fit relative cursor-pointer">
              <div className="overflow-hidden rounded-md">
                <img
                  src={item?.thumb_url}
                  alt={item?.name}
                  width={200}
                  className="object-cover transition transform h-[300px] hover:scale-110"
                />
              </div>
              <div className="flex items-center max-w-[200px]">
                <p className="text-white text-base w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {item?.name}
                </p>
              </div>
              {item?.time && (
                <div className="absolute top-2 left-2 flex items-center gap-1 text-white text-sm bg-gradient-to-t from-transparent to-gray-400">
                  <IoTimerOutline className="text-[18px]" />
                  <p>{item?.time}</p>
                </div>
              )}
            </div>
          </Link>
        ))}
        {/* Phân trang */}
        <Paginator
          currentPage={currentPage}
          totalPage={pagination?.total_page}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default GenreMovie
