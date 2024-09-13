"use client"

import { Button } from '@headlessui/react'

export default function Homepage() {
  return (
    <div>
      {/* Main Hero Section */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 h-screen flex flex-col">
        <img
          alt=""
          src="/hero_bg.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 my-auto">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center my-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">Reimagining The Way<br/>We Conserve Water</h2>
            <h3 className="text-center my-8 text-2xl font-medium tracking-tight text-white sm:text-4xl">Introducing a New Era of Water Conservation</h3>
            <Button className="my-8 inline-flex items-center gap-2 rounded-md bg-white py-2 px-10 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[open]:bg-gray data-[focus]:outline-1 data-[focus]:outline-white">
              Reserve Early Access
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div>
        
      </div>
    </div>

  )
}
