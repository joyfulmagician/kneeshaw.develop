import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import TitanSagaMorePage from "@/components/games/TitanSagaMorePage";
import OldSaltMorePage from "@/components/games/OldSaltMorePage";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function PageGet({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />
      <section>
        {params.id == "1" && <TitanSagaMorePage />}
        {params.id === "2" && <OldSaltMorePage />}
      </section>
      <Footer />
    </main>
  );
}
