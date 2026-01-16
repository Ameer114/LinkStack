"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const showNav = ["/", "/generate"].includes(pathname)
  const [open, setOpen] = useState(false)

  return (
    <>
      {showNav &&
        <div className='fixed top-5 left-[10vw] w-[80vw] bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between z-50'>

          {/* Logo */}
          <Link href={"/"}>
          <div className="logo font-bold text-lg text-gray-800 cursor-pointer">
            LinkStack
          </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className='hidden md:flex gap-6 text-gray-600 font-medium'>
            <Link href="./#features">
              <li className='hover:text-black cursor-pointer transition'>Features</li>
            </Link>

            <Link href="./#how">
              <li className='hover:text-black cursor-pointer transition'>How It Works</li>
            </Link>

            <Link href="./#pricing">
              <li className='hover:text-black cursor-pointer transition'>Pricing</li>
            </Link>

            <Link href="./#contact">
              <li className='hover:text-black cursor-pointer transition'>Contact</li>
            </Link>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href={'/generate'}>
              <button className='px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:scale-105 transition-transform shadow-md'>
                Claim Your Handle
              </button>
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>

        </div>
      }

      {/* Mobile Menu */}
      {open && showNav && (
        <div className="fixed top-24 left-[10vw] w-[80vw] bg-white rounded-xl shadow-lg py-6 flex flex-col items-center gap-4 z-40 md:hidden">

          <Link onClick={() => setOpen(false)} href="./#features">
            <span className="font-medium text-gray-700">Features</span>
          </Link>

          <Link onClick={() => setOpen(false)} href="./#how">
            <span className="font-medium text-gray-700">How It Works</span>
          </Link>

          <Link onClick={() => setOpen(false)} href="./#pricing">
            <span className="font-medium text-gray-700">Pricing</span>
          </Link>

          <Link onClick={() => setOpen(false)} href="./#contact">
            <span className="font-medium text-gray-700">Contact</span>
          </Link>

          <Link onClick={() => setOpen(false)} href="/generate">
            <button className="mt-2 px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold">
              Claim Your Handle
            </button>
          </Link>

        </div>
      )}
    </>
  )
}

export default Navbar
