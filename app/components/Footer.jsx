import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full sm:px-6 px-4 mt-auto">
      <div className="flex justify-between max-w-7xl mx-auto items-center border-t-[1px] border-neutral py-10 sm:px-3 px-0">
        <p className="text-black text-xs">&copy; 2024 High Tide AI. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <Link href="https://www.linkedin.com/company/hightide-ai/" className="text-black hover:text-primary-dark transition-all duration-200 ease-in-out">
            <FaLinkedinIn size={20}/>
          </Link>
          <Link href="https://www.instagram.com/hightide.ai/" className="text-black hover:text-primary-dark transition-all duration-200 ease-in-out">
            <FaInstagram size={20}/>
          </Link>
          <Link href="https://www.youtube.com/@HighTideAI" className="text-black hover:text-primary-dark transition-all duration-200 ease-in-out">
            <FaYoutube size={23}/>
          </Link>
        </div>
      </div>
    </footer>
  )
}