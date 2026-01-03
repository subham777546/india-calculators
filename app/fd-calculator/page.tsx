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

  return (
    <>
      <Head>
        <title>FD Calculator India – Fixed Deposit Maturity Calculator</title>
        <meta
          name="description"
          content="Calculate Fixed Deposit maturity amount and interest earned using our FD Calculator for India."
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
        </div>
      </div>
    </>
  );
}
