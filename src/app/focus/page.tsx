"use client";

import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";

const websites = [
  { image: "/images/sc-10.png", alt: "Carori Lifestyle", title: "Carori Lifestyle - Products Display Site", category: "Website", href: "https://carori.sg" },
  { image: "/images/sc-11.png", alt: "A Sense Of Being", title: "A Sense Of Being - Online Shop", category: "Website", href: "https://asenseofbeing.com" },
  { image: "/images/sc1.png", alt: "SimplyVCard", title: "SimplyVCard - Virtual Business Card Subscription", category: "Website", href: "https://simplyvcard.com" },
  { image: "/images/sc2.png", alt: "Yachting Singapore", title: "Yachting Singapore - Corporate Site", category: "Website", href: "https://yachtingsingapore.com" },
  { image: "/images/sc3.png", alt: "JustCo Zone", title: "JustCo Zone - Online Booking (Dual Language)", category: "Microsite", href: "https://notforsales.com/justco/jpn/index.html" },
  { image: "/images/sc4.png", alt: "Singapore Taxi Academy", title: "Singapore Taxi Academy - Courses and Testings", category: "Website", href: "https://www.taxi.org.sg" },
  { image: "/images/sc7.png", alt: "Ground Transport Concierge", title: "Ground Transport Concierge - Online Booking", category: "Website", href: "https://main.d3g827c1vy3kwz.amplifyapp.com" },
  { image: "/images/sc5.png", alt: "United Automobile Services", title: "United Automobile Services - Business Site", category: "Website", href: "https://united-automobile.com" },
  { image: "/images/sc6.png", alt: "Lian Hup Huat", title: "Lian Hup Huat Food Industries - Business Site", category: "Website", href: "https://lianhuphuat.com" },
  { image: "/images/sc8.png", alt: "SATS Staff Transport", title: "SATS Staff Transport - Online Booking", category: "Website", href: "https://notforsales.com/SATS-DM/index.html" },
  { image: "/images/ip-1.jpg", alt: "IPL", title: "IPL - Business Site", category: "Website", href: "https://ipl.com.sg/index.html" },
  { image: "/images/sc9.png", alt: "Brick & Tungsten", title: "Brick & Tungsten - Business Site", category: "Website (legacy)", href: "https://notforsales.com/brick/index.html" },
];

const creativeWorks = [
  { image: "/images/nc11.png", title: "Brand Identity", category: "Logo Design", modalKey: "nc1" as const },
  { image: "/images/nc22.png", title: "Wayfinding - Signage Consulting", category: "Consulting", modalKey: "nc2" as const },
  { image: "/images/nc33.png", title: "iKiosk + UI/UX Design", category: "Multi-Disciplines", modalKey: "nc3" as const },
  { image: "/images/lc-1.png", title: "Outdoor Billboard Advertisement", category: "Video Editing", modalKey: "nc4" as const },
  { image: "/images/lc-2.jpg", title: "Interior Design", category: "3D Renderings", modalKey: "ag1" as const },
];

const modals: Record<string, { images: string[]; caption?: string; video?: string }> = {
  nc1: { images: ["/images/nc1.png", "/images/nc-2.png", "/images/nca.jpg", "/images/ta-1.png"] },
  nc2: { images: ["/images/nc-3.jpg", "/images/nc2-1.png", "/images/nc2-2.png", "/images/nc2-3.png", "/images/nc2-4.png", "/images/nc2-7.png", "/images/nc2-5.png", "/images/nc2-6.png"], caption: "*In collaboration with Meinhardt Light Studio" },
  nc3: { images: ["/images/nc3-1.png", "/images/nc3-2.png", "/images/nc3-3.png", "/images/nc3-8.png", "/images/nc3-9.png", "/images/nc3-10.png", "/images/nc3-7.png", "/images/nc3-4.png"], caption: "*In collaboration with Changi Airport Group, Woodlands Transport, Singapore Taxi Academy, Sketchit" },
  nc4: { images: [], video: "/images/UA-540p.mp4", caption: "Airtime: 15 Seconds" },
  ag1: { images: ["/images/ag-1.png", "/images/ag-2.png", "/images/ag-3.png", "/images/ag-4.png"] },
};

export default function FocusPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="animate-fade-in px-4 mb-40">
        <h1 className="mt-20 text-center text-[2.8rem] font-bold text-white opacity-70 sm:text-[4rem]">
          FUNCTIONAL AND EFFECTIVE
        </h1>
        <p className="mt-2 text-center text-sm font-light tracking-wide text-white/70 lg:text-lg">
          Embracing Cutting-Edge Technologies and Innovative Design Solutions.
        </p>

        {/* Websites */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {websites.map((w) => (
            <PortfolioCard key={w.href} image={w.image} alt={w.alt} title={w.title} category={w.category} href={w.href} />
          ))}
        </div>

        <hr className="mx-auto my-10 max-w-6xl border-white/20" />

        {/* Creative works */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {creativeWorks.map((w) => (
            <PortfolioCard
              key={w.modalKey}
              image={w.image}
              alt={w.title}
              title={w.title}
              category={w.category}
              onClick={() => setActiveModal(w.modalKey)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal && modals[activeModal] && (
        <Modal
          open
          onClose={() => setActiveModal(null)}
          images={modals[activeModal].images}
          caption={modals[activeModal].caption}
          video={modals[activeModal].video}
        />
      )}

    </>
  );
}
