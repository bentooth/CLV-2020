import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import { contacts, mapEmbedUrl } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14">
      <div className="overflow-hidden border border-border">
        <iframe
          src={mapEmbedUrl}
          title="CLV Construction LLC location"
          className="h-64 w-full border-0 md:h-80"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.name} contact={contact} />
        ))}
      </div>
    </section>
  );
}
