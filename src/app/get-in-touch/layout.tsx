import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "Contact CREATUAL for web development, graphic design, and digital innovation services.",
  alternates: { canonical: "/get-in-touch" },
};

export default function GetInTouchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
