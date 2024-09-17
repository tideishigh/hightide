import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <div className="bg-white w-full px-6">
      <div className="flex flex-col gap-10 items-center max-w-7xl mx-auto py-60">
        <h2 className="text-center text-2xl font-bold text-black sm:text-4xl">Take control of your water consumption.<br/>Reserve early access to our app.</h2>
        <p className="text-center tracking-wide max-w-3xl">Take control of your water consumption with our easy-to-use tracking tool. Monitor your household's water usage in real-time, identify areas of high consumption, and discover opportunities to save.</p>
        <div className="flex items-center gap-6">
          <Link href="" className="inline-flex items-center gap-2 rounded-md bg-primary py-2 px-4 text-sm/6 font-semibold text-white hover:bg-primary-light transition-all duration-200 ease-in-out">Get started</Link>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm/6 font-semibold">Learn more <FaArrowRight size={12}/></Link>
        </div>
      </div>
    </div>
  )
}