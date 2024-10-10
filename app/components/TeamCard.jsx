import Image from "next/image"

export default function TeamCard({ name, title, imgSrc}) {
  return (
    <div className="w-[230px]">
      <div className="h-[230px] w-[230px] mb-6 relative">
        <Image
          alt={name}
          src={imgSrc}
          fill
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-neutral">{title}</p>
    </div>
  )
}