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

      <section className="mt-[101px] flex flex-col items-center gap-[80px] py-[50px] 2xl:flex-row">
        <img
          className="hidden h-[601px] w-1/3 object-scale-down 2xl:block"
          src="/images/image05.png"
        />
        <div className="flex w-2/3 flex-col items-center justify-between gap-[25px] 2xl:items-start 2xl:p-[50px]">
          <p className="text-center text-[40px] 2xl:text-left">Old Salt </p>
          <p className="text-center text-[20px] 2xl:text-left">
            The game is a survival adventure that requires the player to manage
            their character's hunger, thirst, and health while exploring the
            island for resources and materials to help them survive.
          </p>
          <div className="text-center text-[18px] 2xl:text-left">
            <p className="text-[#AFD275]">Total Price:</p>
            <p className="text-[#EDF1F3]">$ 123.00 USD</p>
          </div>
          <div className="text-center text-[18px] 2xl:text-left">
            <p className="text-[#AFD275]">Quanlity</p>
            <p className="text-[#EDF1F3]">$ 123.00 USD</p>
          </div>
          <button className="flex h-[52px] w-[136px] items-center justify-center rounded-xl bg-[#B1CE75]">
            Add to Cart
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
