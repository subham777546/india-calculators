import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "India Calculators",
  description: "Simple, fast & accurate financial calculators for India",
  verification: {
    google: "x2TQhlm3bYPLiKk_crVPicoMj9B0p30_QyOj6PO_ZKY",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* NAVBAR */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="text-xl font-bold text-blue-600"
            >
              IndiaCalculators
            </Link>

            {/* Links */}
            <div className="flex gap-6 text-sm font-semibold">
              <Link
                href="/emi-calculator"
                className="text-gray-700 hover:text-blue-600"
              >
                EMI
              </Link>
              <Link
                href="/sip-calculator"
                className="text-gray-700 hover:text-blue-600"
              >
                SIP
              </Link>
              <Link
                href="/income-tax-calculator"
                className="text-gray-700 hover:text-blue-600"
              >
                Income Tax
              </Link>
              <Link
               href="/fd-calculator"
               className="text-gray-700 hover:text-blue-600"
                  >
                     FD
                 </Link>

            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="py-6">{children}</main>
      </body>
    </html>
  );
}
