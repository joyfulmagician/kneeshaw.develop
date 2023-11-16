import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import Demo from "@/components/signin/Demo";
import Container from "@/components/signup/Container";

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
