import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JobWizard from "@/components/job/wizard";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job`,
  description: `${SITE_TITLE} - Job`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen flex-col bg-[#211D19]">
      <Header />

      <JobWizard />

      <Footer />
    </main>
  );
}
