import Link from 'next/link'
import { ReactElement } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  const contactItems: { icon: ReactElement; href: string }[] = [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/trantung3105',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/trantung_3105',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/TranTung31',
    },
  ]

  return (
    <footer className="w-full h-[80px] bg-[#2c3e50] text-white text-sm md:text-base md:px-20">
      <div className="h-full py-2 flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-center md:justify-between">
        <span>© 2024 TranTung. All rights reserved.</span>

        <ul className="flex gap-5 text-sm md:text-xl">
          {contactItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              <Link href={item.href}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
