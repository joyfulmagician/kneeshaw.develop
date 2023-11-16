"use client";

import SmallImage from "./SmallImage";

export default function SmallImageList() {
  const data = [
    {
      image: "/images/home/smallview1.png",
      classNameName: "max-h-[130px] max-w-[130px]",
    },
    {
      image: "/images/home/smallview2.png",
      classNameName: "max-h-[130px] max-w-[130px]",
    },
    {
      image: "/images/home/smallview3.png",
      classNameName: "hidden sm:flex",
    },
    {
      image: "/images/home/smallview4.png",
      classNameName: "hidden md:flex",
    },
    {
      image: "/images/home/smallview5.png",
      classNameName: "hidden lg:flex",
    },
    {
      image: "/images/home/smallview6.png",
      classNameName: "hidden lg:flex",
    },
    {
      image: "/images/home/smallview7.png",
      classNameName: "hidden xl:flex",
    },
  ];
  return (
    data.map(({image, classNameName}, index) => (
      <SmallImage
      key={index}
      image={image}
      className={classNameName}    ))
  );
}
