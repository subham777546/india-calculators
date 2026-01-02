"use client";

import { useState } from "react";
import Head from "next/head";

export default function EmiCalculator() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");

  const loanNum = Number(loan);
  const rateNum = Number(rate);
  const tenureNum = Number(tenure);

  const months = tenureNum * 12;
  const monthlyRate = rateNum / 12 / 100;

  const emi =
    loanNum && tenureNum
      ? rateNum === 0
        ? loanNum / months
        : (loanNum * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanNum;

  const format = (num: number) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <>
      <Head>
        <title>EMI Calculator India – Calculate Loan EMI Online</title>
        <meta
          name="description"
          content="Free EMI Calculator for home loan, car loan & personal loan in India. Calculate monthly EMI, total interest & total payment instantly."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
            EMI Calculator
          </h1>

          {/* Loan Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              placeholder="Enter loan amount"
              value={loan}
              onChange={(e) => setLoan(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Interest Rate */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Interest Rate (% per year)
            </label>
            <input
              type="number"
              placeholder="Enter interest rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tenure */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              Tenure (Years)
            </label>
            <input
              type="number"
              placeholder="Enter tenure in years"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-400 rounded-lg text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Results */}
          <div className="mt-6 bg-blue-100 p-4 rounded-lg border border-blue-300">
            <p className="text-lg text-gray-900 font-semibold">
              Monthly EMI: ₹{emi ? format(emi) : "—"}
            </p>
            <p className="text-gray-800">
              Total Interest: ₹{emi ? format(totalInterest) : "—"}
            </p>
            <p className="text-gray-800">
              Total Payment: ₹{emi ? format(totalPayment) : "—"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
