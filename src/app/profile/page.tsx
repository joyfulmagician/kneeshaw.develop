import { Metadata } from "next";

import Items from "@/components/profile/Items";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Profile`,
  description: `${SITE_TITLE} - Profile`,
};

export default function Profile() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />
      <section className="my-[50px] flex flex-col justify-center gap-[20px] p-[10px] lg:flex-row">
        <div className="flex justify-start lg:w-1/3 lg:justify-center">
          <Items />
        </div>
        <div className="flex justify-center lg:w-2/3 lg:justify-start">
          <div className="flex h-[581px] w-5/6 flex-col justify-between rounded-lg bg-[#35322F] px-[20px] py-[50px] sm:px-[40px] lg:h-[571px] lg:w-[622px]">
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-[500] text-[#FFFFFF]">
                My Profile
              </p>
              <p className="text-[16px] font-[400] text-[#FFFFFF]">
                This information will be displayed on your public profile
              </p>
            </div>
            <div className="flex flex-row items-center">
              <p className="w-1/3 text-[18px] font-[400] text-[#FFFFFF]">
                Profile Picture
              </p>
              <div className="flex w-2/3 flex-col justify-center">
                <p className="text-[18px] font-[400] text-[#808080]">
                  Max file size: 5 MB
                </p>
                <button className="w-[195px] rounded-lg border-[1px] bg-transparent p-[12px] text-[18px] font-[600]">
                  Change Photo
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[36px]">
              <div className="flex flex-row items-center justify-between">
                <p className="text-[18px] font-[400] text-[#FFFFFF]">
                  First Name
                </p>
                <input
                  placeholder="Emery"
                  className="h-[52px] w-[386px] rounded-lg border-[1px] bg-transparent p-[10px]"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-[18px] font-[400] text-[#FFFFFF]">
                  Last Name
                </p>
                <input
                  placeholder="Stanton"
                  className="h-[52px] w-[386px] rounded-lg border-[1px] bg-transparent p-[10px]"
                />
              </div>
            </div>
            <button className="ml-auto h-[52px] w-[210px] items-center rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
