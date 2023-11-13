import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Services`,
  description: `${SITE_TITLE} - Services`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Footer />
    </main>
  );
}
