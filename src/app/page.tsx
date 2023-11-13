import { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#211D19]">
      <Header />

      <section className="mt-[100px] flex flex-col gap-[40px] text-center">
        <h3 className="text-[40px] font-light text-[#EDF1F3]">
          Crafting innovation gameplay experiences through
        </h3>

        <div>
          <h1 className="text-[56px] font-bold leading-[70px] tracking-[0.18em] text-[#AFD275]">
            Kneeshaw
          </h1>
          <h1 className="text-[56px] font-bold leading-[70px] tracking-[0.18em] text-[#AFD275]">
            Developments
          </h1>
        </div>
      </section>
      <section className="mt-[100px] flex flex-row justify-center rounded-[16px] bg-[#39352F] px-[15px] py-[10px]">
        <button className="h-[70px] w-[335px] rounded-[16px] bg-[#E7717D] text-[22px] font-bold text-[#EDF1F3]">
          Play with Us
        </button>
        <button className="h-[70px] w-[335px] rounded-[16px] text-[22px] font-bold text-[#EDF1F3B2]">
          Create with Us
        </button>
      </section>
      <section className="mt-[97px] flex flex-col gap-[74px] text-[20px] font-light text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-9 border-[2px] border-[#E7717D]" />
          <div className="col-span-9 my-[30px] ml-[40px]">
            Welcome to Kneeshaw Developments, the premier gaming development
            website where you'll find the best games for gamers of all ages. Our
            passion for gaming is evident in every game we create, and we are
            dedicated to providing our players with immersive and engaging
            experiences that will keep them coming back for more.
          </div>
          <div className="col-start-1 col-end-5 border-[2px] border-[#E7717D]" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9 col-end-13 border-[2px] border-[#E7717D]" />
          <div className="col-span-9 col-end-13 my-[30px] mr-[40px] text-right">
            Welcome to Kneeshaw Developments, the premier gaming development
            website where you'll find the best games for gamers of all ages. Our
            passion for gaming is evident in every game we create, and we are
            dedicated to providing our players with immersive and engaging
            experiences that will keep them coming back for more.
          </div>
          <div className="col-span-5 col-end-13 border-[2px] border-[#E7717D]" />
        </div>
      </section>
      <section className="mt-[150px] flex flex-col items-center gap-[99px]">
        <h2 className="text-[40px] font-light text-[#EDF1F3]">
          Enjoy our library of games
        </h2>
        <div className="mx-[40px] flex flex-row gap-[40px] rounded-[14px] bg-[#24201C] p-[40px] xl:mx-[100px]">
          <div className="flex flex-1 flex-col gap-[40px]">
            <h1 className="text-[56px] font-bold text-[#AFD275]">
              Titan Saga:
              <br />
              Chanins of Kronos
            </h1>
            <p className="text-[18px] font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className="mt-[40px] h-[52px] w-[159px] rounded-[10px] bg-[#AFD275] font-bold text-white">
              View More
            </button>
          </div>
          <div className="flew-row flex flex-1 gap-[40px]">
            <img src="/images/library1.png" alt="library1.png" />
            <div className="flex flex-col gap-[40px]">
              <img src="/images/library2.png" alt="library2.png" />
              <img src="/images/library3.png" alt="library3.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[40px]">
        <div className="mx-[80px] flex flex-row justify-between">
          <img src="/images/smallview1.png" alt="smallview1" />
          <img src="/images/smallview2.png" alt="smallview2" />
          <img src="/images/smallview3.png" alt="smallview3" />
          <img src="/images/smallview4.png" alt="smallview4" />
          <img src="/images/smallview5.png" alt="smallview5" />
          <img src="/images/smallview6.png" alt="smallview6" />
          <img src="/images/smallview7.png" alt="smallview7" />
        </div>
        <div></div>
      </section>
      <Footer />
    </main>
  );
}
