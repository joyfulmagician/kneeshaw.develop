import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { SITE_TITLE } from "@/utils/constants";
import Demo from "@/components/signup/Demo";
import Container from "@/components/signup/Container";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign Up`,
  description: `${SITE_TITLE} - Sign Up`,
};

export default function SignUp() {
  return (
    <Container>
      <Header />

      <section className="flex items-center justify-center">
        <Demo />
      </section>

      <Footer />
    </Container>
  );
}
