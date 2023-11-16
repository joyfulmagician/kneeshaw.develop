"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function Introduction1() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <div className="grid grid-cols-12">
          <div className="col-span-9 border-[1px] border-[#E7717D]" />
          <div className="col-span-9 my-[30px] ml-[40px]">
            Welcome to Kneeshaw Developments, the premier gaming development
            website where you'll find the best games for gamers of all ages. Our
            passion for gaming is evident in every game we create, and we are
            dedicated to providing our players with immersive and engaging
            experiences that will keep them coming back for more.
          </div>
          <div className="col-start-1 col-end-5 border-[1px] border-[#E7717D]" />
        </div>
      )}

      {role === ROLES.CREATOR && (
        <div className="flex w-[60%] flex-col gap-[15px] pl-[70px]">
          <img src="/images/home/line01.png" className="h-[9px] w-[100px]" />

          <h2 className="text-[40px] font-bold text-[#AFD275]">
            Meet Kneeshaw
          </h2>

          <div className="text-[20px] font-normal text-[#000000]">
            Kneeshaw Developments is a dynamic and innovative gaming development
            website that is dedicated to providing its clients with top-quality
            gaming solutions. With a team of highly skilled and experienced
            developers, Kneeshaw Developments is well-positioned to provide
            clients with a wide range of services, from game design and
            development to testing, publishing, and marketing. At Kneeshaw
            Developments, we understand that the gaming industry is constantly
            evolving, and we work tirelessly to stay up-to-date with the latest
            trends and technologies. Our team is made up of experts in game
            development, art, design, programming, and marketing, who are
            passionate about creating engaging and immersive gaming experiences
            for players of all ages.
          </div>

          <button className="h-[52px] w-[205px] rounded-[18px] border-[2px] border-[#AFD275] font-semibold text-[#AFD275]">
            Read More
          </button>
        </div>
      )}
    </>
  );
}
