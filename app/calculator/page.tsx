import type { Metadata } from "next";
import Image from "next/image";
import PaymentCalculator from "@/components/PaymentCalculator";

export const metadata: Metadata = {
  title: "Payment Calculator",
};

export default function CalculatorPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-8rem)] items-center justify-center">
      <Image
        src="/calculator-background.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#1a1a1a]/35"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full px-4">
        <PaymentCalculator />
      </div>
    </section>
  );
}
