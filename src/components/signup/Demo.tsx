"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Demo() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <div className="mb-[70px] mt-[39px] flex max-h-[1089px] min-w-[500px] max-w-[880px] flex-col items-center rounded-[24px] bg-[#35322F] text-[#EDF1F3] md:w-[80%] lg:w-full">
          <div className="mt-[60px] flex flex-col items-center gap-[10px]">
            <h1 className="text-center text-[52px] font-bold">
              Welcome to
              <br />
              Kneeshaw!
            </h1>

            <p className="text-[20px] font-normal">Let's create your account</p>
          </div>

          <div className="mt-[30px] flex h-[64px] w-[350px] flex-row items-center justify-between gap-[10px] rounded-[20px] bg-[#211D19]">
            <button className="h-full w-[163px] text-[#AFD275]">
              Developer
            </button>

            <button className="h-full w-[163px] rounded-[18px] border bg-[#AFD275]">
              Gamer
            </button>
          </div>

          <div className="mt-[70px] flex w-full flex-col gap-[25px] px-[100px]">
            <div className="flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />

              <input
                type="text"
                placeholder="Last name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <span className="text-[14px] font-normal">
                Never shown to the public
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create username"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <span className="text-[14px] font-normal">
                Ideal username is short, unique with no spaces
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create password"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <div className="flex w-[72%] min-w-[219px] flex-row items-center justify-between">
                <span className="text-[14px] font-normal">
                  At least 8 characters, Aa, 123, &#
                </span>

                <span className="text-[14px] font-normal text-[#AFD275]">
                  show
                </span>
              </div>
            </div>

            <div className="text-[14px] font-light">
              By registering, you agree to our{" "}
              <Link href="#" className="font-semibold text-[#AFD275]">
                Privacy Policy
              </Link>
              &nbsp;&&nbsp;
              <Link href="#" className="font-semibold text-[#AFD275]">
                Terms of Services.
              </Link>
            </div>

            <button className="h-[52px] w-full rounded-[18px] bg-[#AFD275] text-[18px] font-semibold text-white">
              Create your account
            </button>

            <button className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#EDF1F3] ">
              <FcGoogle />
              <span className="text-[18px] font-semibold">
                Sign up with Google
              </span>
            </button>

            <p className="mb-[70px] text-center text-[14px] font-light">
              Already have an account?{" "}
              <Link href="#" className="font-semibold text-[#AFD275]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      )}

      {role === ROLES.CREATOR && (
        <div className="mb-[70px] mt-[39px] flex max-h-[1089px] min-w-[500px] max-w-[880px] flex-col items-center rounded-[24px] bg-[#F8FAFC] text-[#090914] md:w-[80%] lg:w-full">
          <div className="mt-[60px] flex flex-col items-center gap-[10px]">
            <h1 className="text-center text-[52px] font-bold">
              Welcome to
              <br />
              Kneeshaw!
            </h1>

            <p className="text-[20px] font-normal">Let's create your account</p>
          </div>

          <div className="mt-[30px] flex h-[64px] w-[350px] flex-row items-center justify-between gap-[10px] rounded-[20px] bg-[#211D19]">
            <button className="h-full w-[163px] text-[#AFD275]">
              Developer
            </button>

            <button className="h-full w-[163px] rounded-[18px] border bg-[#AFD275]">
              Gamer
            </button>
          </div>

          <div className="mt-[70px] flex w-full flex-col gap-[25px] px-[100px]">
            <div className="flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />

              <input
                type="text"
                placeholder="Last name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <span className="text-[14px] font-normal">
                Never shown to the public
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create username"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <span className="text-[14px] font-normal">
                Ideal username is short, unique with no spaces
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create password"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
              />
              <div className="flex w-[72%] min-w-[219px] flex-row items-center justify-between">
                <span className="text-[14px] font-normal">
                  At least 8 characters, Aa, 123, &#
                </span>

                <span className="text-[14px] font-normal text-[#AFD275]">
                  show
                </span>
              </div>
            </div>

            <div className="text-[14px] font-light">
              By registering, you agree to our{" "}
              <Link href="#" className="font-semibold text-[#AFD275]">
                Privacy Policy
              </Link>
              &nbsp;&&nbsp;
              <Link href="#" className="font-semibold text-[#AFD275]">
                Terms of Services.
              </Link>
            </div>

            <button className="h-[52px] w-full rounded-[18px] bg-[#AFD275] text-[18px] font-semibold text-white">
              Create your account
            </button>

            <button className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#EDF1F3] ">
              <FcGoogle />
              <span className="text-[18px] font-semibold">
                Sign up with Google
              </span>
            </button>

            <p className="mb-[70px] text-center text-[14px] font-light">
              Already have an account?{" "}
              <Link href="#" className="font-semibold text-[#AFD275]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
