import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function Game1_getmorePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[101px] flex h-[601px] flex-row gap-[80px] p-[50px]">
        <img
          className="hidden w-1/2 object-scale-down lg:block"
          src="/images/image04.png"
        ></img>
        <div className="flex w-1/2 flex-col gap-[25px] p-[50px]">
          <p className="text-left text-[40px]">Titan Saga: Chains of Kronos</p>
          <p className="text-left text-[20px]">
            It is a turn-based RPG (role-playing game) that takes place in a
            fantasy world filled with magic and mythical creatures. The game
            features a deep and immersive story, with players taking on the role
            of a hero tasked with saving the world from destruction.
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
