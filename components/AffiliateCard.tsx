"use client";

import Image from "next/image";
import { useState } from "react";
import type { Affiliate } from "@/data/affiliates";

export default function AffiliateCard({ affiliate }: { affiliate: Affiliate }) {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <article
      className="flex flex-col overflow-hidden border-3 bg-white"
      style={{ borderColor: affiliate.accent, borderWidth: 3 }}
    >
      <div className="flex h-48 items-center justify-center px-4">
        <Image
          src={affiliate.logo}
          alt={affiliate.name}
          width={220}
          height={120}
          className="max-h-36 w-auto object-contain"
        />
      </div>

      <div className="flex justify-between gap-4 border-t border-border px-4 py-3 text-sm">
        <div>
          <p className="font-bold uppercase tracking-wide text-foreground">
            {affiliate.label}
          </p>
          <p className="mt-1 text-muted">{affiliate.detail}</p>
        </div>
        <div className="text-right">
          <p className="font-bold uppercase tracking-wide text-foreground">
            Website
          </p>
          <a
            href={affiliate.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-all text-accent hover:underline"
          >
            {affiliate.websiteLabel}
          </a>
        </div>
      </div>

      <div className="p-2">
        <button
          type="button"
          onClick={() => setShowPhone(true)}
          className="w-full px-4 py-3 text-center text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: affiliate.accent }}
        >
          {showPhone ? affiliate.phone : "Phone"}
        </button>
      </div>
    </article>
  );
}
