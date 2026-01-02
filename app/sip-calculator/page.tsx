"use client";

import { useState } from "react";
import Head from "next/head";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const investNum = Number(monthlyInvestment);
  const rateNum = Number(rate);
  const yearsNum = Number(years);

  const months = yearsNum * 12;
  const monthlyRate = rateNum / 12 / 100;

  // SIP Formula
  const maturityAmount =
    investNum && rateNum && yearsNum
      ? investNum *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate)
      : 0;

  const investedAmount = investNum * months;
  const estimatedReturns = maturityAmount - investedAmount;

  const format = (num: number) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <>
      <Head>
        <title>SIP Calculator India – Calculate Mutual Fund Returns</title>
        <meta
          name="description"
          content="Free SIP Calculator to estimate mutual fund returns in India. Calculate maturity amount, invested amount and gains instantly."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
            SIP Calculator
          </h1>

          {/* Monthly Investment */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Monthly Investment (₹)
            </label>
            <input
              type="number"
              placeholder="Enter monthly SIP amount"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Expected Return Rate */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Expected Return Rate (% per year)
            </label>
            <input
              type="number"
              placeholder="Enter expected return"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Time Period */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Time Period (Years)
            </label>
            <input
              type="number"
              placeholder="Enter investment duration"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Results */}
          <div className="mt-6 bg-blue-100 p-4 rounded-lg border border-blue-300">
            <p className="text-lg text-gray-900 font-semibold">
              Invested Amount: ₹
              {investedAmount ? format(investedAmount) : "—"}
            </p>
            <p className="text-gray-800">
              Estimated Returns: ₹
              {estimatedReturns ? format(estimatedReturns) : "—"}
            </p>
            <p className="text-gray-800">
              Maturity Amount: ₹
              {maturityAmount ? format(maturityAmount) : "—"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
