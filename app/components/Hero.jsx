

export default function Hero({ header, para, imgSrc, imgAlt }) {
  return (
    <div className="relative isolate overflow-hidden mx-auto max-w-7xl px-6 lg:px-8 py-32 flex items-center min-h-[50rem]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_40rem_at_top,theme(colors.primary),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-primary-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="w-full flex flex-col my-auto gap-8 max-w-2xl">
        <h2 className="text-4xl font-bold text-black sm:text-6xl whitespace-pre">{header}</h2>
        <p className="tracking-wide text-neutral text-xl leading-10">{para}</p>
      </div>
      <div>
        <img alt={imgAlt} src={imgSrc} className=''/>
      </div>
    </div>
  )
}