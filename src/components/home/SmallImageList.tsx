"use client";

import SmallImage from "./SmallImage";

export default function SmallImageList() {
  const data = [
    {
      image: "/images/home/smallview01.png",
      className: "max-h-[130px] max-w-[130px]",
    },
    {
      image: "/images/home/smallview02.png",
      className: "max-h-[130px] max-w-[130px]",
    },
    {
      image: "/images/home/smallview03.png",
      className: "hidden sm:flex",
    },
    {
      image: "/images/home/smallview04.png",
      className: "hidden md:flex",
    },
    {
      image: "/images/home/smallview05.png",
      className: "hidden lg:flex",
    },
    {
      image: "/images/home/smallview06.png",
      className: "hidden lg:flex",
    },
    {
      image: "/images/home/smallview07.png",
      className: "hidden xl:flex",
    },
  ];

  return (
    <>
      {data.map(({ image, className }, index) => (
        <SmallImage key={index} image={image} className={className} />
      ))}
    </>
  );
}
