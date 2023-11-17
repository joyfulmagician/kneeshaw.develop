"use client";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  paragraph: string;
}

export default function ImageCard({
  image,
  title,
  subtitle,
  paragraph,
}: Props) {
  return (
    <div className="flex max-w-[306px] flex-col gap-[15px] rounded-[32px] border-[0.5px] border-[#EDF1F3] pb-[20px] odd:mb-[100px] even:mt-[100px]">
      <img className="h-auto w-full" src={image} />

      <div className="flex flex-col items-center">
        <div className="text-[20px] font-bold text-[#E7717D]">{title}</div>
        <div className="text-[15px] font-semibold text-[#FFFFFF80]">
          {subtitle}
        </div>
      </div>

      <div className="flex flex-col items-center gap-[5px]">
        <div className="text-center text-[14px] font-light text-white">
          {paragraph}
        </div>

        <button className="h-[40px] rounded-[16px] border border-[#AFD276] px-[20px] text-[16px] font-bold leading-[20px] text-[#AFD276]">
          Read more
        </button>
      </div>
    </div>
  );
}
