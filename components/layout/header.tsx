'use client'

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
import { movieCountries, movieGenres } from '@/lib/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineAlignLeft, AiOutlineSearch } from 'react-icons/ai'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isShowGenre, setIsShowGenre] = useState(false)
  const [isShowCountry, setIsShowCountry] = useState(false)
  const [isShowSearchMobile, setIsShowSearchMobile] = useState(false)

  const router = useRouter()

  const handleOnChangeSearch = (e: any) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      if (searchValue) {
        router.push(`/search?keyword=${searchValue}`)
      } else {
        alert('Vui lòng nhập ký tự để tìm kiếm!')
      }
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="relative overflow-visible min-h-[80px] bg-[#2c3e50] px-5 lg:px-20 py-5 flex items-center justify-between whitespace-nowrap text-white">
        <div className="flex items-center gap-5">
          {/* Navigation Mobile */}
          <div className="block lg:hidden text-2xl cursor-pointer">
            <Sheet>
              <SheetTrigger>
                <AiOutlineAlignLeft />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#181818] text-white text-base"
              >
                <SheetHeader className="">
                  <SheetTitle className="text-white my-5">
                    Danh mục thể loại phim
                  </SheetTitle>
                  <SheetDescription className="text-white text-lg h-screen overflow-auto">
                    <ul className="flex flex-col items-center gap-5 h-full">
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
                        <div className="flex items-center justify-center gap-3 cursor-pointer">
                          <span onClick={() => setIsShowGenre(!isShowGenre)}>
                            Thể loại
                          </span>
                          {isShowGenre ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        {isShowGenre && (
                          <ul className="grid grid-cols-2 gap-2 mt-5">
                            {movieGenres.map((item, index) => (
                              <Link key={index} href={item.href}>
                                <div className="px-3 py-2 bg-zinc-700 rounded-md text-gray-400">
                                  {item.title}
                                </div>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li className="w-full">
                        <div className="flex items-center justify-center gap-3 cursor-pointer">
                          <span
                            onClick={() => setIsShowCountry(!isShowCountry)}
                          >
                            Quốc gia
                          </span>
                          {isShowCountry ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        {isShowCountry && (
                          <ul className="grid grid-cols-2 gap-2 mt-5">
                            {movieCountries.map((item, index) => (
                              <Link key={index} href={item.href}>
                                <div className="px-3 py-2 bg-zinc-700 rounded-md text-gray-400">
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
            </ul>
          </div>
        </div>

        <Link href="/" className="block lg:hidden">
          <h2 className="font-semibold">Movie Web</h2>
        </Link>

        <div className="text-white">
          <div className="flex items-center relative">
            {/* Search PC */}
            <Input
              className="hidden lg:block w-[370px] mx-3 text-black"
              placeholder="Tìm kiếm phim..."
              onChange={handleOnChangeSearch}
              onKeyDown={handleSearch}
            />
            <AiOutlineSearch
              className="hidden lg:block text-2xl text-gray-500 hover:text-gray-800 cursor-pointer absolute right-6"
              onClick={handleSearch}
            />
          </div>
          {/* Icon Search Mobile */}
          <AiOutlineSearch
            className="block lg:hidden text-2xl cursor-pointer"
            onClick={() => setIsShowSearchMobile(!isShowSearchMobile)}
          />
          {/* <div className="flex items-center gap-3">
            <Link href="/auth/signup">Đăng ký/Đăng nhập</Link>
            <FaRegBell className="cursor-pointer" />
          </div> */}
        </div>
      </div>

      {isShowSearchMobile && (
        <div className="bg-[#181818]">
          <div className="flex items-center relative">
            {/* Search Mobile */}
            <Input
              className="w-full text-black"
              placeholder="Tìm kiếm phim..."
              onChange={handleOnChangeSearch}
              onKeyDown={handleSearch}
            />
            {searchValue && (
              <AiOutlineSearch
                className="text-2xl text-gray-500 hover:text-gray-800 cursor-pointer absolute right-5"
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
