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
          <div className="flex h-[581px] w-5/6 flex-col justify-between rounded-lg bg-[#35322F] px-[20px] py-[50px] sm:px-[40px] lg:h-[403px] lg:w-[622px]">
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-[500] text-[#FFFFFF]">Settings</p>
              <p className="text-[16px] font-[400] text-[#FFFFFF]">
                This information will be changed on your public profile
              </p>
            </div>

            <div className="flex flex-row">
              <p className="w-1/3 text-[18px] font-[400] text-[#FFFFFF]">
                Email
              </p>
              <div className="flex w-2/3 flex-col">
                <p className="text-[18px] font-[400] text-[#808080]">
                  emery.stanton@gmail.com
                </p>
                <p className="text-[18px] font-[400] text-[#AFD275]">
                  Change email
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <p className="w-1/3 text-[18px] font-[400] text-[#FFFFFF]">
                Password
              </p>
              <p className="text-[18px] font-[400] text-[#AFD275]">
                Change password
              </p>
            </div>

            <div className="flex flex-row">
              <p className="w-1/3 text-[18px] font-[400] text-[#FFFFFF]">
                Payment
              </p>
              <p className="text-[18px] font-[400] text-[#AFD275]">
                Change payment method
              </p>
              <img
                className="ml-auto"
                src="/images/games/sheet/bankcard_02.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
