"use client";

import { useState } from "react";
import Head from "next/head";

export default function FDCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [frequency, setFrequency] = useState("4"); // Quarterly default

  const P = Number(principal);
  const r = Number(rate) / 100;
  const t = Number(years);
  const n = Number(frequency);

  const maturityAmount =
    P && r && t
      ? P * Math.pow(1 + r / n, n * t)
      : 0;

  const interestEarned = maturityAmount - P;

  const format = (num: number) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Fixed Deposit (FD)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A Fixed Deposit (FD) is a financial instrument offered by banks and NBFCs where you invest a lump sum for a fixed tenure at a predetermined interest rate."
      }
    },
    {
      "@type": "Question",
      "name": "How is FD maturity amount calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "FD maturity amount is calculated using compound interest based on the principal amount, interest rate, tenure, and compounding frequency."
      }
    },
    {
      "@type": "Question",
      "name": "Which compounding frequency gives higher FD returns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "More frequent compounding such as quarterly compounding generally gives slightly higher returns compared to yearly or half-yearly compounding."
      }
    },
    {
      "@type": "Question",
      "name": "Is FD interest taxable in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, interest earned on Fixed Deposits is taxable as per the investor's income tax slab in India."
      }
    }
  ]
};

  return (
    <>
      <Head>
        <title>FD Calculator India – Fixed Deposit Maturity Calculator</title>
        <meta
          name="description"
          content="Calculate Fixed Deposit maturity amount and interest earned using our FD Calculator for India."
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>

      </Head>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
            FD Calculator
          </h1>

          {/* Principal */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Principal Amount (₹)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter deposit amount"
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Interest Rate */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Interest Rate (% p.a.)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter interest rate"
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Time Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Enter time in years"
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Frequency */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Compounding Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-600"
            >
              <option value="1">Yearly</option>
              <option value="2">Half-Yearly</option>
              <option value="4">Quarterly</option>
            </select>
          </div>

          {/* Result */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="text-gray-900 font-semibold">
              Maturity Amount: ₹{maturityAmount ? format(maturityAmount) : "—"}
            </p>
            <p className="text-gray-700 mt-1">
              Interest Earned: ₹{maturityAmount ? format(interestEarned) : "—"}
            </p>
          </div>
          {/* FAQ Section */}
<section className="mt-10">
  <h2 className="text-xl font-bold text-gray-900 mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4 text-gray-700">
    <div>
      <h3 className="font-semibold text-gray-900">
        What is a Fixed Deposit (FD)?
      </h3>
      <p>
        A Fixed Deposit is a safe investment option where you deposit a lump sum
        for a fixed period and earn interest at a predetermined rate.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        How is FD maturity calculated?
      </h3>
      <p>
        FD maturity is calculated using compound interest depending on the
        deposit amount, interest rate, tenure, and compounding frequency.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Which FD compounding frequency is best?
      </h3>
      <p>
        Quarterly compounding usually offers slightly higher returns compared
        to yearly or half-yearly compounding.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Is FD interest taxable?
      </h3>
      <p>
        Yes, FD interest is taxable in India and added to your total income as
        per applicable income tax slab.
      </p>
    </div>
  </div>
</section>

        </div>
      </div>
    </>
  );
}
