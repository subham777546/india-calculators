"use client";

import { useState } from "react";
import Head from "next/head";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState<"new" | "old">("new");
  const [ded80c, setDed80c] = useState("");
  const [ded80d, setDed80d] = useState("");

  const incomeNum = Number(income);
  const d80c = Math.min(Number(ded80c) || 0, 150000);
  const d80d = Number(ded80d) || 0;
  const standardDeduction = 50000;

  /* ---------- TAX LOGIC ---------- */

  const newRegimeTax = (income: number) => {
    let tax = 0;
    if (income <= 300000) tax = 0;
    else if (income <= 600000) tax = (income - 300000) * 0.05;
    else if (income <= 900000) tax = 15000 + (income - 600000) * 0.1;
    else if (income <= 1200000) tax = 45000 + (income - 900000) * 0.15;
    else if (income <= 1500000) tax = 90000 + (income - 1200000) * 0.2;
    else tax = 150000 + (income - 1500000) * 0.3;

    if (income <= 700000) tax = 0;
    return tax;
  };

  const oldRegimeTax = (income: number) => {
    const taxable =
      income - standardDeduction - d80c - d80d;

    if (taxable <= 0) return 0;

    let tax = 0;
    if (taxable <= 250000) tax = 0;
    else if (taxable <= 500000)
      tax = (taxable - 250000) * 0.05;
    else if (taxable <= 1000000)
      tax = 12500 + (taxable - 500000) * 0.2;
    else
      tax = 112500 + (taxable - 1000000) * 0.3;

    if (taxable <= 500000) tax = 0;
    return tax;
  };

  const newTax = incomeNum ? newRegimeTax(incomeNum) : 0;
  const oldTax = incomeNum ? oldRegimeTax(incomeNum) : 0;

  const tax = regime === "new" ? newTax : oldTax;
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  const takeHome = incomeNum - totalTax;

  const format = (n: number) =>
    n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const chartData = [
    { name: "New Regime", Tax: newTax },
    { name: "Old Regime", Tax: oldTax },
  ];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which tax regime is better: Old or New?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The better tax regime depends on your income and deductions. If you claim deductions like 80C, 80D and HRA, the Old Regime may be beneficial. Otherwise, the New Regime usually results in lower tax."
      }
    },
    {
      "@type": "Question",
      "name": "Is income up to ₹7 lakh tax-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Under the New Tax Regime, income up to ₹7 lakh is tax-free due to rebate under Section 87A."
      }
    },
    {
      "@type": "Question",
      "name": "Does this calculator include standard deduction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. A standard deduction of ₹50,000 is applied automatically under the Old Tax Regime."
      }
    },
    {
      "@type": "Question",
      "name": "Is health and education cess included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. A 4% health and education cess is included in the total tax calculation."
      }
    }
  ]
};

  return (
    <>
      <Head>
        <title>Income Tax Calculator India – Old vs New Regime</title>
        <meta
          name="description"
          content="Compare Old vs New Income Tax Regime in India. Calculate tax, deductions, cess and take-home income instantly."
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>

      </Head>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Income Tax Calculator
          </h1>

          {/* Annual Income */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Annual Income (₹)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter your annual income"
              className="w-full p-3 bg-white border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Regime Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setRegime("new")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                regime === "new"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              New Regime
            </button>
            <button
              onClick={() => setRegime("old")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                regime === "old"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Old Regime
            </button>
          </div>

          {/* Old Regime Deductions */}
          {regime === "old" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Section 80C (Max ₹1,50,000)
                </label>
                <input
                  type="number"
                  value={ded80c}
                  onChange={(e) => setDed80c(e.target.value)}
                  placeholder="PPF, ELSS, LIC etc."
                  className="w-full p-3 bg-white border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Section 80D (Medical Insurance)
                </label>
                <input
                  type="number"
                  value={ded80d}
                  onChange={(e) => setDed80d(e.target.value)}
                  placeholder="Health insurance premium"
                  className="w-full p-3 bg-white border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </>
          )}

          {/* Result Box */}
          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="text-gray-900 font-semibold">
              Income Tax: ₹{tax ? format(tax) : "—"}
            </p>
            <p className="text-gray-700">
              Cess (4%): ₹{tax ? format(cess) : "—"}
            </p>
            <p className="text-gray-900 font-semibold mt-1">
              Take Home Income: ₹{incomeNum ? format(takeHome) : "—"}
            </p>
          </div>

          {/* Comparison Chart */}
          {incomeNum > 0 && (
            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  barCategoryGap="40%"
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <XAxis dataKey="name" tick={{ fill: "#374151" }} />
                  <YAxis tick={{ fill: "#374151" }} />
                  <Tooltip
                    formatter={(v) => `₹${format(Number(v))}`}
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #d1d5db",
                    }}
                  />
                  <Bar
                    dataKey="Tax"
                    fill="#2563eb"
                    barSize={28}
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          {/* FAQ Section */}
<section className="mt-10">
  <h2 className="text-xl font-bold text-gray-900 mb-4">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="font-semibold text-gray-900">
        Which tax regime is better: Old or New?
      </h3>
      <p className="text-gray-700">
        The better tax regime depends on your income and deductions.
        If you claim deductions like 80C, 80D and HRA, the Old Regime
        may be beneficial. Otherwise, the New Regime usually results
        in lower tax.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Is income up to ₹7 lakh tax-free?
      </h3>
      <p className="text-gray-700">
        Yes. Under the New Tax Regime, income up to ₹7 lakh is tax-free
        due to rebate under Section 87A.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Does this calculator include standard deduction?
      </h3>
      <p className="text-gray-700">
        Yes. For the Old Tax Regime, a standard deduction of ₹50,000 is
        applied automatically.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Is health and education cess included?
      </h3>
      <p className="text-gray-700">
        Yes. A 4% health and education cess is added to the calculated
        income tax.
      </p>
    </div>
  </div>
</section>

        </div>
      </div>
    </>
  );
}
