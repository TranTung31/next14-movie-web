/* eslint-disable @next/next/no-img-element */
'use client'

import { getMovieSearch } from '@/app/(routes)/actions'
import { ListItem } from '@/components/common/list-item'
import { Input } from '@/components/ui/input'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import useDebounce from '@/hooks/useDebounce'
import { movieCountries, movieGenres, movieYears } from '@/lib/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  AiOutlineAlignLeft,
  AiOutlineClose,
  AiOutlineSearch,
} from 'react-icons/ai'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState<any[]>([])
  const [isShowGenre, setIsShowGenre] = useState(false)
  const [isShowCountry, setIsShowCountry] = useState(false)
  const [isShowYear, setIsShowYear] = useState(false)
  const [isShowSearchMobile, setIsShowSearchMobile] = useState(false)
  const [isTarget, setIsTarget] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const debouncedSearchValue = useDebounce(searchValue, 1000)

  useEffect(() => {
    const fetchMovieSearch = async () => {
      setIsLoading(true)
      const data = await getMovieSearch(debouncedSearchValue)
      setSearchResult(data?.items)
      setIsLoading(false)
    }

    if (debouncedSearchValue) fetchMovieSearch()
  }, [debouncedSearchValue])

  const handleOnChangeSearch = (e: any) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      if (searchValue) {
        router.push(`/search?keyword=${searchValue}`)
        setIsTarget(false)
      } else {
        alert('Vui lòng nhập ký tự để tìm kiếm!')
      }
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex min-h-[80px] items-center justify-between overflow-visible whitespace-nowrap bg-[#2c3e50] px-5 py-5 text-white lg:px-20">
        <div className="flex items-center gap-5">
          {/* Navigation Mobile */}
          <div className="block cursor-pointer text-2xl lg:hidden">
            <Sheet>
              <SheetTrigger>
                <AiOutlineAlignLeft />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="overflow-auto bg-[#181818] text-base text-white"
              >
                <SheetHeader>
                  <SheetTitle className="my-5 text-center text-white">
                    Danh mục thể loại phim
                  </SheetTitle>
                  <SheetDescription className="text-lg text-white">
                    <ul className="flex h-full flex-col items-center gap-5">
                      <li>
                        <Link
                          href="/genre/tv-shows?page=1"
                          className="px-4 py-2"
                        >
                          TV shows
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/genre/phim-le?page=1"
                          className="px-4 py-2"
                        >
                          Phim lẻ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/genre/phim-bo?page=1"
                          className="px-4 py-2"
                        >
                          Phim bộ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/genre/phim-dang-chieu?page=1"
                          className="px-4 py-2"
                        >
                          Phim đang chiếu
                        </Link>
                      </li>
                      <li className="w-full">
                        <div
                          className="flex cursor-pointer items-center justify-center gap-3"
                          onClick={() => setIsShowGenre(!isShowGenre)}
                        >
                          <span>Thể loại</span>
                          {isShowGenre ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        {isShowGenre && (
                          <ul className="mt-5 grid grid-cols-2 gap-2">
                            {movieGenres.map((item, index) => (
                              <Link key={index} href={item.href}>
                                <div className="rounded-md bg-zinc-700 px-3 py-2 text-gray-400">
                                  {item.title}
                                </div>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li className="w-full">
                        <div
                          className="flex cursor-pointer items-center justify-center gap-3"
                          onClick={() => setIsShowCountry(!isShowCountry)}
                        >
                          <span>Quốc gia</span>
                          {isShowCountry ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        {isShowCountry && (
                          <ul className="mt-5 grid grid-cols-2 gap-2">
                            {movieCountries.map((item, index) => (
                              <Link key={index} href={item.href}>
                                <div className="rounded-md bg-zinc-700 px-3 py-2 text-gray-400">
                                  {item.title}
                                </div>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li className="w-full">
                        <div
                          className="flex cursor-pointer items-center justify-center gap-3"
                          onClick={() => setIsShowYear(!isShowYear)}
                        >
                          <span>Năm</span>
                          {isShowYear ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        {isShowYear && (
                          <ul className="mt-5 grid grid-cols-2 gap-2">
                            {movieYears.map((item, index) => (
                              <Link key={index} href={item.href}>
                                <div className="rounded-md bg-zinc-700 px-3 py-2 text-gray-400">
                                  {item.title}
                                </div>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="hidden lg:block">
            <h2 className="font-semibold">Movie Web</h2>
          </Link>

          {/* Navigation PC */}
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li>
                <Link href="/genre/tv-shows?page=1" className="px-4 py-2">
                  TV shows
                </Link>
              </li>
              <li>
                <Link href="/genre/phim-le?page=1" className="px-4 py-2">
                  Phim lẻ
                </Link>
              </li>
              <li>
                <Link href="/genre/phim-bo?page=1" className="px-4 py-2">
                  Phim bộ
                </Link>
              </li>
              <li>
                <Link
                  href="/genre/phim-dang-chieu?page=1"
                  className="px-4 py-2"
                >
                  Phim đang chiếu
                </Link>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-base font-normal">
                        Thể loại
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute z-10 bg-[#181818] text-white">
                        <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-3">
                          {movieGenres.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-base font-normal">
                        Quốc gia
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute z-10 bg-[#181818] text-white">
                        <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-3">
                          {movieCountries.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item?.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-base font-normal">
                        Năm
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute z-10 bg-[#181818] text-white">
                        <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-3">
                          {movieYears.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item?.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/" className="block lg:hidden">
          <h2 className="font-semibold">Movie Web</h2>
        </Link>

        <div className="text-white">
          <div className="relative flex items-center">
            {/* Search PC */}
            <Input
              className="hidden w-[370px] text-black lg:block"
              placeholder="Tìm kiếm phim..."
              onChange={handleOnChangeSearch}
              onKeyDown={handleSearch}
              onFocus={() => setIsTarget(true)}
              onBlur={() =>
                setTimeout(() => {
                  setIsTarget(false)
                }, 200)
              }
            />
            {!isLoading && (
              <AiOutlineSearch
                className="absolute right-2 hidden cursor-pointer text-2xl text-gray-500 hover:text-gray-800 lg:block"
                onClick={handleSearch}
              />
            )}
            {isLoading && (
              <div className="absolute right-3 hidden h-4 w-4 animate-spin rounded-full border-4 border-solid border-gray-500 border-t-transparent lg:block"></div>
            )}
            {searchValue && isTarget && (
              <div className="min-h-auto absolute top-12 z-10 max-h-[500px] w-[370px] overflow-hidden overflow-y-auto rounded border border-solid border-white bg-[#181818] p-3 text-sm">
                {searchResult.length > 0 ? (
                  <div className="flex flex-col gap-3 text-white">
                    {searchResult.map((item, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer gap-5"
                        onClick={() => {
                          router.push(`/movie/${item?.slug}`)
                          setIsTarget(false)
                        }}
                      >
                        <img
                          src={item?.poster_url}
                          alt={item?.name}
                          className="max-h-[56px] min-h-[56px] min-w-[100px] max-w-[100px] rounded object-cover"
                        />
                        <div className="overflow-hidden text-ellipsis">
                          {item?.name}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Icon Search Mobile */}
          {!isShowSearchMobile ? (
            <AiOutlineSearch
              className="block cursor-pointer text-2xl lg:hidden"
              onClick={() => setIsShowSearchMobile(true)}
            />
          ) : (
            <AiOutlineClose
              className="block cursor-pointer text-2xl lg:hidden"
              onClick={() => setIsShowSearchMobile(false)}
            />
          )}
          {/* <div className="flex items-center gap-3">
            <Link href="/auth/signup">Đăng ký/Đăng nhập</Link>
            <FaRegBell className="cursor-pointer" />
          </div> */}
        </div>
      </div>

      {isShowSearchMobile && (
        <div className="bg-[#181818]">
          <div className="relative flex items-center">
            {/* Search Mobile */}
            <Input
              className="w-full text-black"
              placeholder="Tìm kiếm phim..."
              onChange={handleOnChangeSearch}
              onKeyDown={handleSearch}
            />
            {searchValue && (
              <AiOutlineSearch
                className="absolute right-5 cursor-pointer text-2xl text-gray-500 hover:text-gray-800"
                onClick={handleSearch}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
