import Hero from "../components/Hero";
import TeamCard from "../components/TeamCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="">
      <Hero
        header={`We're changing the\nway people save water`}
        para="Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua."
        imgSrc=""
        imgAlt=""
      />

      <div className="flex max-w-7xl px-6 mx-auto my-20 items-center justify-between flex-col md:flex-row-reverse">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-semibold">Our mission</h3>
          <p className="text-xl text-neutral tracking-wide leading-8">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
          <p className="text-neutral leading-8">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
          <p className="text-neutral leading-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
        </div>
        <div className="max-w-2xl pr-40 rounded-2xl">
          <Image
            src="/mission.jpg"
            alt=""
            width="3939"
            height="4924"
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="px-6 my-44">
        <div className="max-w-7xl relative isolate h-[30rem] mx-auto rounded-3xl shadow-sm overflow-hidden bg-white py-24 sm:py-32">
          <img 
            alt=""
            src="/ceo.jpeg"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="max-w-7xl px-6 mx-auto my-44 w-full flex flex-col gap-10">
        <h3 className="text-4xl font-semibold">Our team</h3>
        <p className="text-xl text-neutral tracking-wide leading-8 max-w-2xl">Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.</p>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-10">
          <TeamCard
            name="Calvin Nguyen"
            title="CEO / Founder"
            imgSrc="/headshot.jpg"
          />
          <TeamCard
            name="Isaiah Aquino"
            title="Web Developer"
            imgSrc="/headshot.jpg"
          />
          <TeamCard
            name="Precious Nguyen"
            title="Markting Director"
            imgSrc="/headshot.jpg"
          />
          <TeamCard
            name="Jaqy Nguyen"
            title="Project Manager"
            imgSrc="/headshot.jpg"
          />
        </div>
      </div>
    </div>
  )
}