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
        <BreadcrumbList className="text-base text-white">
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
      <div className="flex flex-wrap justify-center gap-8">
        {data?.items?.map((item: any, index: number) => (
          <Link href={`/movie/${item?.slug}`} key={index}>
            <div className="relative flex h-fit min-w-[200px] cursor-pointer flex-col gap-3 text-white">
              <div className="overflow-hidden rounded-md">
                <img
                  src={item?.thumb_url}
                  alt={item?.name}
                  width={200}
                  className="h-[300px] object-cover duration-200 ease-in hover:scale-105"
                />
              </div>
              <div className="flex max-w-[200px] items-center">
                <h3 className="truncate text-[15px] font-medium">
                  {item?.name}
                </h3>
              </div>
              <div className="absolute top-2 flex items-center gap-1 rounded-br-md rounded-tr-md bg-[#a3765d] px-1 py-[3px] text-xs font-medium">
                <p>{item?.current_episode}</p>
                <p>{item?.language}</p>
              </div>
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
