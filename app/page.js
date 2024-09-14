"use client"

import { Button } from "@headlessui/react"
import { FaGift, FaUsers, FaChartBar, FaGlobeAmericas } from "react-icons/fa";
import CTA from "./components/CTA"

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
        <div className="absolute inset-0 h-full w-full bg-black opacity-30" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 my-auto z-10">
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
      <div className="relative isolate overflow-hidden mx-auto max-w-7xl px-6 lg:px-8 py-36 flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_40rem_at_top,theme(colors.primary),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-primary-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="w-full flex flex-col my-auto gap-8">
          <h2 className="text-4xl font-bold text-black sm:text-6xl">Introducing<br />High Tide AI</h2>
          <p className="tracking-wide">Every single time we use our Earth's most precious resource, we must be mindful of our usage. Our mobile app helps monitor, detect and alert millions of water users about how much water you save and earn rewards!</p>
        </div>
        <div>
          <img alt='' src='/ht_blue.png' className=''/>
        </div>
      </div>

      {/* Info */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 my-44 flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-1">
          <p className="text-primary font-medium text-lg">Turn the Tide</p>
          <h3 className="text-center text-2xl font-bold text-black sm:text-4xl mb-6">Discover the power of every drop</h3>
          <p className="text-center tracking-wide max-w-3xl text-neutral">Our mobile app empowers millions to conserve water and earn rewards. By monitoring your water usage and providing personalized insights, we help you make a positive impact on the planet.</p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20">
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaGift size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Reap rewards</h4>
              <p className="max-w-sm text-neutral leading-7">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaUsers size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Community driven</h4>
              <p className="max-w-sm text-neutral leading-7">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaChartBar size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Water tracking</h4>
              <p className="max-w-sm text-neutral leading-7">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaGlobeAmericas size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Make an impact</h4>
              <p className="max-w-sm text-neutral leading-7">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Testimonial */}
      <div className="px-6">
        <div className="max-w-7xl relative isolate mx-auto rounded-3xl shadow-sm overflow-hidden bg-white py-24 sm:py-32">
          <img 
            alt=""
            src="/ceo.jpeg"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full bg-black -z-10 opacity-40" />

          <div className="px-24 lg:px-30 my-auto text-white flex flex-col gap-8 max-w-4xl">
            <h3 className="font-medium text-2xl">Make a Splash</h3>
            <h4 className="font-medium text-xl">“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac.”</h4>
            <div>
              <p className="font-medium">Calvin Nguyen</p>
              <p>CEO of High Tide AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTA />
    </div>

  )
}
