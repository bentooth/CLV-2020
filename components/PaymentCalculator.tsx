"use client";

import { FormEvent, useState } from "react";

function isNumber(n: string) {
  return !isNaN(parseFloat(n)) && isFinite(Number(n));
}

function roundDecimals(pmt: number, decimals: number) {
  const result1 = pmt * Math.pow(10, decimals);
  const result2 = Math.round(result1);
  return result2 / Math.pow(10, decimals);
}

function calculatePayment(pv: number, ir: number, np: number) {
  const pmt = (pv * ir) / (1 - Math.pow(1 / (1 + ir), np));
  return roundDecimals(pmt, 2);
}

export default function PaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (!isNumber(loanAmount)) {
      setError("Please enter a valid loan amount. ie. 250000");
      return;
    }

    if (!isNumber(interestRate)) {
      setError("Please enter a valid interest rate. ie. 6.5");
      return;
    }

    if (!isNumber(loanTerm)) {
      setError("Please enter a valid loan term. ie. 60");
      return;
    }

    const payment = calculatePayment(
      Number(loanAmount),
      Number(interestRate) / 1200,
      Number(loanTerm) * 12,
    );
    setMonthlyPayment(payment);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto my-10 flex w-full max-w-md flex-col gap-4 bg-background px-5 py-8 md:my-14 md:px-6 md:py-10"
    >
      <h1 className="text-center text-2xl font-bold tracking-wide md:text-3xl">
        Monthly Payment Calculator
      </h1>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium uppercase tracking-wide text-muted">
          Loan Amount
        </span>
        <div className="flex overflow-hidden border border-border">
          <span className="flex items-center bg-surface px-3 text-muted">$</span>
          <input
            type="text"
            inputMode="decimal"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="250000"
            className="w-full px-3 py-3 outline-none focus:ring-2 focus:ring-accent/30"
            aria-label="Loan amount"
          />
        </div>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium uppercase tracking-wide text-muted">
          Loan Term
        </span>
        <div className="flex overflow-hidden border border-border">
          <input
            type="text"
            inputMode="decimal"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="30"
            className="w-full px-3 py-3 outline-none focus:ring-2 focus:ring-accent/30"
            aria-label="Loan term in years"
          />
          <span className="flex items-center bg-surface px-3 text-muted">yrs</span>
        </div>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium uppercase tracking-wide text-muted">
          Interest Rate
        </span>
        <div className="flex overflow-hidden border border-border">
          <input
            type="text"
            inputMode="decimal"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="6.5"
            className="w-full px-3 py-3 outline-none focus:ring-2 focus:ring-accent/30"
            aria-label="Interest rate"
          />
          <span className="flex w-12 items-center justify-center bg-surface text-muted">
            %
          </span>
        </div>
      </label>

      {error ? (
        <p className="text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="bg-accent px-4 py-3 text-base font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-soft"
      >
        Calculate
      </button>

      <div className="border-t border-foreground/20 pt-4">
        <div className="flex items-center justify-between text-xl md:text-2xl">
          <span>Monthly Payment</span>
          <span>
            $
            <span className="tabular-nums">{monthlyPayment}</span>
          </span>
        </div>
      </div>
    </form>
  );
}
