import type { Metadata } from "next";

import { PartnersPage } from "@/components/partners/partners-page";

export const metadata: Metadata = {
  title: "Partner With Us — Cornell AI-Ready Workforce Initiative",
  description:
    "We build and validate realistic work simulations that measure whether people can actually do their work well with AI in it — not whether they finished a course or say they feel confident. Partner organizations shape what we build, run it with their own teams, and see the results first.",
};

export default function Partners() {
  return <PartnersPage />;
}
