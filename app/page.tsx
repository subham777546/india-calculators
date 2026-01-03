import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Simple Financial Calculators for India
        </h1>
        <p className="text-gray-600 text-lg">
          Fast, accurate and easy-to-use calculators for EMI, SIP and
          Income Tax.
        </p>
      </section>

      {/* Calculator Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* EMI */}
        <Link
          href="/emi-calculator"
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            EMI Calculator
          </h2>
          <p className="text-gray-600">
            Calculate monthly EMI, total interest and total payment
            for loans.
          </p>
        </Link>

        {/* SIP */}
        <Link
          href="/sip-calculator"
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            SIP Calculator
          </h2>
          <p className="text-gray-600">
            Estimate SIP returns and total investment growth easily.
          </p>
        </Link>

        {/* Income Tax */}
        <Link
          href="/income-tax-calculator"
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Income Tax Calculator
          </h2>
          <p className="text-gray-600">
            Compare Old vs New tax regime and calculate take-home
            income.
          </p>
        </Link>

        {/* FD */}
<Link
  href="/fd-calculator"
  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
>
  <h2 className="text-xl font-semibold text-gray-900 mb-2">
    FD Calculator
  </h2>
  <p className="text-gray-600">
    Calculate Fixed Deposit maturity amount and interest earned easily.
  </p>
</Link>

      </section>
    </div>
  );
}
