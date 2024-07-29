'use client'

import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { FaRegBell } from 'react-icons/fa'

function Header() {
  return (
    <div className="min-h-[80px] bg-[#2c3e50] md:px-[50px] lg:px-[150px] py-5 flex items-center justify-between overflow-x-auto whitespace-nowrap">
      <h2 className="text-white font-semibold px-3">Movie Web</h2>
      <Input className="w-[370px] mx-3" placeholder="Search movies..." />
      <div className="flex items-center gap-3 px-3 text-white">
        <Link href="/auth/signup">Login/Signup</Link>
        <FaRegBell className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Header