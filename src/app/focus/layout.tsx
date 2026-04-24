import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore CREATUAL's portfolio of web development, brand identity, signage consulting, UI/UX design, and creative works.",
  alternates: { canonical: "/focus" },
};

export default function FocusLayout({ children }: { children: React.ReactNode }) {
  return children;
}
