import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Demo from "@/components/signin/Demo";
import Container from "@/components/signup/Container";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`,
};

export default function Marketplace() {
  return (
    <Container>
      <Header />
      <Demo />
      <Footer />
    </Container>
  );
}
