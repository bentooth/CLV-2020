import type { Contact } from "@/data/contacts";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ContactCard({ contact }: { contact: Contact }) {
  return (
    <article className="bg-accent p-5 text-white shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-wide">{contact.name}</h2>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/80">
          {contact.title}
        </p>
      </div>
      <div className="space-y-2 text-base">
        <p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 hover:text-white/80"
          >
            <MailIcon />
            {contact.email}
          </a>
        </p>
        <p>
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-white/80"
          >
            <PhoneIcon />
            {contact.phone}
          </a>
        </p>
      </div>
    </article>
  );
}
