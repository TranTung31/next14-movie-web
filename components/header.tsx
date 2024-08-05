'use client'

import { Input } from '@/components/ui/input'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { FaRegBell } from 'react-icons/fa'

function Header() {
  const [searchValue, setSearchValue] = useState('')

  const router = useRouter()

  const handleOnChangeSearch = (e: any) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (searchValue) {
        router.push(`/search?keyword=${searchValue}`)
      } else {
        alert('Vui lòng nhập ký tự để tìm kiếm!')
      }
    }
  }

  return (
    <div className="min-h-[80px] bg-[#2c3e50] md:px-[50px] lg:px-[150px] py-5 flex items-center justify-between overflow-x-auto whitespace-nowrap">
      <Link href="/">
        <h2 className="text-white font-semibold px-3">Movie Web</h2>
      </Link>
      <Input
        className="w-[370px] mx-3"
        placeholder="Search movies..."
        onChange={handleOnChangeSearch}
        onKeyDown={handleSearch}
      />
      <div className="flex items-center gap-3 px-3 text-white">
        <Link href="/auth/signup">Login/Signup</Link>
        <FaRegBell className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Header