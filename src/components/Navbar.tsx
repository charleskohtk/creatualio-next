"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between opacity-75">
      <Link href="/">
        <Image
          src="/images/creatual-logo-main.svg"
          className="cursor-pointer"
          alt="creatual-logo"
          width={138}
          height={40}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden items-center gap-1 text-sm font-light text-white lg:flex">
        <Link href="/" className="px-3 py-2 tracking-wide uppercase hover:opacity-80">
          Main
        </Link>
        <span className="font-thin text-white">/</span>
        <Link href="/focus" className="px-3 py-2 tracking-wide uppercase hover:opacity-80">
          Focus
        </Link>
        <span className="font-thin text-white">/</span>
        <Link href="/get-in-touch" className="px-3 py-2 tracking-wide uppercase hover:opacity-80">
          Get In Touch
        </Link>
        <div className="ml-4 flex gap-2">
          <a href="https://www.facebook.com/profile.php?id=61562181302719" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook-w.svg" alt="Facebook" width={30} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/tiankeng-koh-81853b334" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram-w.svg" alt="LinkedIn" width={30} height={24} />
          </a>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex flex-col gap-1.5 lg:hidden"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
      </button>

      {/* Mobile offcanvas */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="relative z-10 flex h-full w-72 flex-col bg-[#01418aeb] p-6 text-white">
            <button
              className="mb-8 self-end text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <Link href="/" className="py-3 text-lg font-light uppercase" onClick={() => setMenuOpen(false)}>
              Main
            </Link>
            <Link href="/focus" className="py-3 text-lg font-light uppercase" onClick={() => setMenuOpen(false)}>
              Focus
            </Link>
            <Link href="/get-in-touch" className="py-3 text-lg font-light uppercase" onClick={() => setMenuOpen(false)}>
              Get In Touch
            </Link>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61562181302719" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook-w.svg" alt="Facebook" width={30} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/tiankeng-koh-81853b334" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram-w.svg" alt="LinkedIn" width={30} height={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
