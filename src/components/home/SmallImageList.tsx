"use client";

import { useRole } from "@/contexts/RoleContext";
import SmallImage from "./SmallImage";
import { ROLES } from "@/utils/constants";

export default function SmallImageList() {
  const { role } = useRole();

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
    role === ROLES.PLAYER && (
      <div className="mx-[80px] flex flex-row items-center justify-between gap-[10px]">
        {data.map((props) => (
          <SmallImage
            key={props.className}
            image={props.image}
            className={props.className}
          />
        ))}
      </div>
    )
  );
}
