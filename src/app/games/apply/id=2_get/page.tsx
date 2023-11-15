import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function Game2_getPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[101px] flex h-[601px] flex-row gap-[80px] p-[50px]">
        <img
          className="hidden w-1/2 object-scale-down lg:block"
          src="/images/image05.png"
        />
        <div className="flex w-1/2 flex-col gap-[25px] p-[50px]">
          <p className="text-left text-[40px]">Old Salt</p>
          <p className="text-left text-[20px]">
            The game is a survival adventure that requires the player to manage
            their character's hunger, thirst, and health while exploring the
            island for resources and materials to help them survive.
          </p>
          <div className="text-[18px]">
            <p className="text-[#AFD275]">Total Price:</p>
            <p className="text-[#EDF1F3]">$ 123.00 USD</p>
          </div>
          <div className="text-[18px]">
            <p className="text-[#AFD275]">Quanlity</p>
            <p className="text-[#EDF1F3]">$ 123.00 USD</p>
          </div>
          <button className="h-[52px] w-[136px] rounded-xl bg-[#B1CE75]">
            Add to Cart
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
