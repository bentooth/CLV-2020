import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/calculator", label: "Payment Calculator" },
  { href: "/contact", label: "Contact" },
];

const email = "LennyVera1@gmail.com";
const phone = "(956) 454-4141";
const phoneHref = "tel:9564544141";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-accent bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 text-center md:grid-cols-[1.2fr_1fr_1fr] md:gap-12 md:px-6 md:py-12 md:text-left">
        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <Image
              src="/logos/CLV-Logo-transparent.png"
              alt="CLV Construction"
              width={320}
              height={160}
              className="h-28 w-auto md:h-36"
            />
          </Link>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">
            Quick Links
          </h2>
          <ul className="flex flex-col items-center gap-2 md:items-start">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-bold text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">
            Contact
          </h2>
          <ul className="flex flex-col items-center gap-2 md:items-start">
            <li>
              <a
                href={phoneHref}
                className="font-bold text-foreground transition-colors hover:text-accent"
              >
                {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="font-bold text-foreground transition-colors hover:text-accent"
              >
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center">
        <p className="text-base font-bold tracking-wide text-foreground">
          &copy; {new Date().getFullYear()} CLV Construction LLC
        </p>
      </div>
    </footer>
  );
}
