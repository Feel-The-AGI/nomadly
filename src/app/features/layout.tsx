import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "An integrated intelligence solution for space market expansion. From strategic market intelligence to regulatory guidance and partner identification.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
