"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/calculator", label: "Payment Calculator" },
  { href: "/contact", label: "Contact" },
];

const email = "LennyVera1@gmail.com";
const phone = "(956) 454-4141";
const phoneHref = "tel:9564544141";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="border-b-2 border-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-24 md:px-6 md:py-5">
          <Link
            href="/"
            className="md:col-start-2 md:row-start-1 md:justify-self-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/CLV-Logo-transparent.png"
              alt="CLV Construction"
              width={220}
              height={110}
              className="h-16 w-auto md:h-24"
              priority
            />
          </Link>

          <div className="flex w-full min-w-0 items-center justify-between gap-2 md:contents">
            <a
              href={`mailto:${email}`}
              className="group flex min-w-0 items-center gap-1.5 md:col-start-1 md:row-start-1 md:items-start md:justify-self-end md:gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-white transition-colors group-hover:bg-accent-soft md:h-11 md:w-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 md:h-5 md:w-5"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l.004.004 9.246 5.688a1.5 1.5 0 0 0 1.5 0L22.496 6.912l.004-.004Z" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col gap-0.5 md:gap-1">
                <span className="hidden w-fit bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-accent-soft md:inline-block md:text-xs">
                  Get in Touch
                </span>
                <span className="truncate text-xs font-bold text-accent md:text-lg">
                  {email}
                </span>
              </span>
            </a>

            <a
              href={phoneHref}
              className="group flex shrink-0 items-center gap-1.5 md:col-start-3 md:row-start-1 md:items-start md:justify-self-start md:gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-accent text-white transition-colors group-hover:bg-accent-soft md:h-11 md:w-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 md:h-5 md:w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="flex flex-col gap-0.5 md:gap-1">
                <span className="hidden w-fit bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-accent-soft md:inline-block md:text-xs">
                  Give Us a Call
                </span>
                <span className="text-xs font-bold text-accent md:text-lg">
                  {phone}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <nav className="relative border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-2 md:justify-center md:px-6 md:py-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <ul
            id="primary-nav"
            className={`${
              open ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-border bg-white px-4 py-3 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
          >
            {navLinks.map((link, index) => {
              const isHashLink = link.href.includes("#");
              const active = isHashLink
                ? false
                : link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li
                  key={link.href}
                  className={open ? "nav-menu-item" : undefined}
                  style={
                    open
                      ? { animationDelay: `${index * 55}ms` }
                      : undefined
                  }
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-sm font-medium uppercase tracking-wide transition-colors md:py-0 ${
                      active
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
