import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import CartWizard from "@/components/cart";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Cart`,
  description: `${SITE_TITLE} - Cart`,
};

export default function Cart() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />

      <CartWizard />

      <Footer />
    </main>
  );
}
