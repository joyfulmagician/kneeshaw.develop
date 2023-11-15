"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import Logo from "./Logo";
import { useShop } from "@/contexts/ShopContext";

export default function Header() {
  const pathName = usePathname();

  const { role } = useRole();
  const { cartCount } = useShop();

  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    if (isLg && openMenu) {
      setOpenMenu(false);
    }
  }, [isLg]);

  return (
    <>
      <div className="flex h-[134px] flex-row items-center justify-between px-[30px] md:px-[60px] md:py-[24px]">
        <Logo />

        <div
          className={clsx(
            "hidden flex-row items-center text-[18px] font-semibold leading-[36px] lg:flex lg:gap-[24px] xl:gap-[70px]",
            role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
          )}
        >
          <Link
            href="/games"
            className={
              pathName.includes("/games")
                ? "border-b-[2px] border-[#AFD275]"
                : ""
            }
          >
            Games
          </Link>
          <Link
            href="/blog"
            className={
              pathName.includes("/blog")
                ? "border-b-[2px] border-[#AFD275]"
                : ""
            }
          >
            Blog
          </Link>
          <Link
            href="/services"
            className={
              pathName.includes("/services")
                ? "border-b-[2px] border-[#AFD275]"
                : ""
            }
          >
            Services
          </Link>
          <Link
            href="/job"
            className={
              pathName.includes("/job") ? "border-b-[2px] border-[#AFD275]" : ""
            }
          >
            Job
          </Link>
          <Link
            href="/aboutus"
            className={
              pathName.includes("/aboutus")
                ? "border-b-[2px] border-[#AFD275]"
                : ""
            }
          >
            About Us
          </Link>
        </div>

        <div
          className={clsx(
            "flex flex-row items-center gap-[24px]",
            role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
          )}
        >
          <div className="relative cursor-pointer">
            <HiOutlineShoppingBag
              className={clsx(
                "text-[24px]",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            />
            <div className="absolute bottom-[-5px] right-[-5px] h-[16px] w-[16px] rounded-[100%] bg-[#AFD275] text-center text-[10px] leading-[15px]">
              {cartCount}
            </div>
          </div>

          <Link
            className="hidden text-[18px] font-semibold text-[#AFD275] sm:block"
            href="/signin"
          >
            Sign In
          </Link>

          <Link
            className="hidden rounded-[18px] bg-[#AFD275] px-[24px] py-[8px] text-[18px] font-semibold text-[#EDF1F3] sm:block"
            href="/signup"
          >
            Sign Up
          </Link>

          <HiBars3
            className={clsx(
              "block cursor-pointer text-[24px] lg:hidden",
              role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
            )}
            onClick={handleMenuClick}
          />
        </div>
      </div>

      {openMenu && (
        <div className="fixed z-[1000] flex h-[100vh] w-full flex-col backdrop-blur-xl">
          <div className="flex h-[134px] flex-row items-center justify-between px-[30px] md:px-[60px] md:py-[24px]">
            <Logo />

            <div
              className={clsx(
                "hidden flex-row items-center text-[18px] font-semibold leading-[36px] lg:flex lg:gap-[24px] xl:gap-[70px]",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            >
              <Link
                href="/games"
                className={
                  pathName.includes("/games")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                }
              >
                Games
              </Link>
              <Link
                href="/blog"
                className={
                  pathName.includes("/blog")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                }
              >
                Blog
              </Link>
              <Link
                href="/services"
                className={
                  pathName.includes("/services")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                }
              >
                Services
              </Link>
              <Link
                href="/job"
                className={
                  pathName.includes("/job")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                }
              >
                Job
              </Link>
              <Link
                href="/aboutus"
                className={
                  pathName.includes("/aboutus")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                }
              >
                About Us
              </Link>
            </div>

            <div
              className={clsx(
                "flex flex-row items-center gap-[24px]",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            >
              <div className="relative cursor-pointer">
                <HiOutlineShoppingBag
                  className={clsx(
                    "text-[24px]",
                    role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
                  )}
                />
                <div className="absolute bottom-[-5px] right-[-5px] h-[16px] w-[16px] rounded-[100%] bg-[#AFD275] text-center text-[10px] leading-[15px]">
                  {cartCount}
                </div>
              </div>

              <Link
                className="hidden text-[18px] font-semibold text-[#AFD275] sm:block"
                href="/signin"
              >
                Sign In
              </Link>

              <Link
                className="hidden rounded-[18px] bg-[#AFD275] px-[24px] py-[8px] text-[18px] font-semibold text-[#EDF1F3] sm:block"
                href="/signup"
              >
                Sign Up
              </Link>

              <div
                className={clsx(
                  "block cursor-pointer text-[24px] lg:hidden",
                  role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
                )}
                onClick={handleMenuClick}
              >
                {openMenu ? <IoMdClose /> : <HiBars3 />}
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "flex flex-col gap-[24px] px-[32px] text-[18px] font-semibold",
              role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
            )}
          >
            <Link
              href="/games"
              className={pathName.includes("/games") ? "text-[#AFD275]" : ""}
            >
              Games
            </Link>
            <Link
              href="/blog"
              className={pathName.includes("/blog") ? "text-[#AFD275]" : ""}
            >
              Blog
            </Link>
            <Link
              href="/services"
              className={pathName.includes("/services") ? "text-[#AFD275]" : ""}
            >
              Services
            </Link>
            <Link
              href="/job"
              className={pathName.includes("/job") ? "text-[#AFD275]" : ""}
            >
              Job
            </Link>
            <Link
              href="/aboutus"
              className={pathName.includes("/aboutus") ? "text-[#AFD275]" : ""}
            >
              About Us
            </Link>
            <div className="block border sm:hidden"></div>
            <Link className="block sm:hidden" href="/signin">
              Sign In
            </Link>
            <Link className="block sm:hidden" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
