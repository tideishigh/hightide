import Image from "next/image"

export default function TeamCard({ name, title, imgSrc}) {
  return (
    <div className="w-[250px]">
      <Image
        alt=""
        src={imgSrc}
        height="250"
        width="250"
        objectFit="cover"
        className="rounded-2xl mb-6"
      />
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-neutral">{title}</p>
    </div>
  )
}