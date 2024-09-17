'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import blueHTLogo from '../../public/hightide_logo.png'
import whiteHTLogo from '../../public/hightide_logo_white.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [nav, setNav] = useState('fixed')
  const [scrollTop, setScrollTop] = useState(0)
  const [oldTop, setOldTop] = useState(0)
  const pathname = usePathname()

  console.log(pathname)

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (oldTop >= scrollTop) {
      // scrolling up
      setNav('opacity-100 translate-y-4')
    } else {
      // scrolling down
      setNav('opacity-0 z-[-1]')
    }
    setOldTop(scrollTop)
  }, [scrollTop])

  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal")
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 200
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", reveal)
    reveal()

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <header className={`bg-white fixed z-10 w-full top-[-1rem] ${nav} ${scrollTop == 0 && pathname == "/" ? 'shadow-none bg-opacity-0' : 'shadow-lg bg-opacity-80'} transition-all duration-300 ease-in-out`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-3">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hightide</span>
            <Image 
              alt="Hightide" 
              src={scrollTop == 0 && pathname == "/" ? whiteHTLogo : blueHTLogo } 
              className="h-10 p-1 w-auto" 
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${scrollTop == 0 && pathname == "/" ? "text-white" : "text-black"}`} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4">
          <Link href="/about" className={`text-sm font-semibold leading-6 hover:bg-black hover:bg-opacity-10 py-1 px-3 rounded ${scrollTop == 0 && pathname == "/" ? "text-white" : "text-black"}`}>
            About
          </Link>
          {/* <Link href="/features" className={`text-sm font-semibold leading-6 hover:bg-black hover:bg-opacity-10 py-1 px-3 rounded ${scrollTop == 0 && pathname == "/" ? "text-white" : "text-black"}`}>
            Features
          </Link> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hightide</span>
              <Image
                alt="Hightide"
                src={blueHTLogo}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-gray-50"
                >
                  About
                </Link>
                {/* <Link
                  href="/features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-black hover:bg-gray-50"
                >
                  Features
                </Link> */}
              </div>
              <div className="py-6">
                {/* <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
