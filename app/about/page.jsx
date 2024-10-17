import Hero from "../components/Hero";
import TeamCard from "../components/TeamCard";
import Image from "next/image";

import ceo from "../../public/ceo.jpeg"
import mission from "../../public/mission.jpg"

export default function AboutPage() {
  return (
    <div className="">
      <Hero
        header={`Re-imagining Water Conservation through Technology and Gamification`}
        para="At High Tide AI, we believe in turning everyday actions into meaningful solutions. Did you know that by 2030, water is expected to be scarcer than oil, with demand exceeding supply by 40%? With less than 1% of the earth&apos;s water fit for human consumption, it&apos;s time to take action, and we&apos;re here to help you do that in a fun and rewarding way."
        imgSrc=""
        imgAlt=""
      />

      <div className="flex max-w-7xl px-6 mx-auto my-20 items-center justify-between flex-col md:flex-row gap-20 md:gap-0">
        <div className="max-w-2xl md:pr-20 lg:pr-40 rounded-2xl">
          <Image
            src={mission}
            alt=""
            className="rounded-2xl"
            priority
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-semibold">Our story</h3>
          <p className="text-lg text-neutral tracking-wide leading-8">Founded in 2024 by Calvin Nguyen, High Tide AI was born out of personal experience and a passion for making a difference. Growing up in financial hardship, Calvin saw firsthand the importance of conserving resources, especially water. This led him to develop High Tide AI—a platform designed to help homeowners, businesses, and farmers save water and earn rewards while doing it.</p>
          <p className="text-neutral leading-8">Through our gamified mobile app, High Tide AI offers a unique way to conserve water. Users receive real-time notifications on their water usage, learn how to save more, and even compete with their neighbors to see who can conserve the most water. The more water you save, the bigger your rewards—ranging from rebates to discounts on water-saving devices.</p>
          <p className="text-neutral leading-8">While other water-saving apps exist, High Tide AI is the only one that combines gamification, social engagement, and real-time data to incentivize mindful water use. We are not just an app; we&apos;re a movement that helps you make a tangible impact on the planet while having fun and earning rewards along the way.</p>
        </div>
      </div>

      <div className="px-6 my-44">
        <div className="max-w-7xl relative isolate h-[30rem] mx-auto rounded-3xl shadow-sm overflow-hidden bg-white py-24 sm:py-32">
          <Image 
            alt=""
            src={ceo}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl px-6 mx-auto my-44 w-full flex flex-col gap-8">
        <h3 className="text-4xl font-semibold">Our team</h3>
        <p className="text-xl text-neutral tracking-wide leading-8 max-w-4xl">We&apos;re a dynamic group of individuals who are passionate about what we do.</p>
        <div className="grid grid-col-1 mx-auto sm:mx-0 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-10">
          <TeamCard
            name="Calvin Nguyen"
            title="CEO / Founder"
            imgSrc="/calvin.jpg"
          />
          <TeamCard
            name="Isaiah Aquino"
            title="Web Developer"
            imgSrc="/isaiah.JPG"
          />
          <TeamCard
            name="Precious Nguyen"
            title="Marketing Director"
            imgSrc="/precious.jpeg"
          />
          <TeamCard
            name="Jacqeline Nguyen"
            title="Project Manager"
            imgSrc="/jaqy.jpg"
          />
        </div>
      </div>
    </div>
  )
}