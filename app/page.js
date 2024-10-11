"use client"


import Link from "next/link";
import { FaGift, FaUsers, FaChartBar, FaGlobeAmericas } from "react-icons/fa";
import CTA from "./components/CTA"
import Hero from "./components/Hero";
import Image from "next/image";
import heroBG from "../public/hero_bg.jpg"
import ceo from "../public/ceo.jpeg"

export default function HomePage() {
  return (
    <div>
      {/* Main Hero Section */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 h-screen flex flex-col">
        <Image
          alt=""
          src={heroBG}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-30" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 my-auto z-10">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center my-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">Reimagining The Way<br/>We Conserve Water</h2>
            <h3 className="text-center my-8 text-2xl font-medium tracking-tight text-white sm:text-4xl">Introducing a New Era of Water Conservation</h3>
            <Link 
              className="my-8 inline-flex items-center gap-2 rounded-md bg-white py-2 px-10 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[open]:bg-gray data-[focus]:outline-1 data-[focus]:outline-white"
              href="#newsletter"
              scroll={true}
            >
              Reserve Early Access
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Hero
        header={`Introducing\nHigh Tide AI`}
        para="Every single time we use our Earth's most precious resource, we must be mindful of our usage. Our mobile app helps monitor, detect and alert millions of water users about how much water you save and earn rewards!"
        imgSrc="/ht_blue.png"
        imgAlt=""
      />

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
              <h4 className="font-bold text-lg">Rewards system</h4>
              <p className="max-w-sm text-neutral leading-7">Earn rebates, utility credits, and discounts on eco-friendly products.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaUsers size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Community driven</h4>
              <p className="max-w-sm text-neutral leading-7">Compete with your neighbors or friends in fun challenges to see who can save the most water.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaChartBar size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Water tracking</h4>
              <p className="max-w-sm text-neutral leading-7">Track and manage your water usage with instant updates.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="p-2 bg-primary rounded mt-1 text-gray">
              <FaGlobeAmericas size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Simple integration</h4>
              <p className="max-w-sm text-neutral leading-7">Scan your water bill, and let our AI-powered app calculate your savings and potential rewards instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Testimonial */}
      <div className="px-6">
        <div className="max-w-7xl relative isolate mx-auto rounded-3xl shadow-sm overflow-hidden bg-white py-24 sm:py-32">
          <Image 
            alt=""
            src={ceo}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full bg-black -z-10 opacity-40" />

          <div className="px-10 md:px-20 lg:px-30 my-auto text-white flex flex-col gap-8 max-w-4xl">
            <h3 className="font-medium text-2xl">Make a Splash</h3>
            <h4 className="font-medium text-xl">“High Tide AI operates on a freemium model. Users can download the app for free and access basic features, with premium subscriptions unlocking enhanced tools, personalized insights, and even more rewards. Whether it&apos;s saving money on your water bill or contributing to a larger environmental cause, our app makes every drop count.”</h4>
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
