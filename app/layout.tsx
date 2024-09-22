import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/JsonLd";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "RemitCache",
    template: `%s | RemitCache`,
  },
  description: "Streamline your money transfers and receive instant notifications for budget updates and transfer activities",
  keywords: "remittance, cache, financial technology, transactions, budget, savings",
  openGraph: {
    title: "RemitCache",
    description: "Streamline your money transfers and receive instant notifications for budget updates and transfer activities",
    url: "https://www.remitcache.com",
    siteName: "RemitCache",
    images: [
      {
        url: "https://www.remitcache.com/og-facebook.png",
        width: 1200,
        height: 630,
        alt: "RemitCache Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemitCache",
    description: "Streamline your money transfers and receive instant notifications for budget updates and transfer activities",
    images: ["https://www.remitcache.com/og-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RemitCache",
    "url": "https://www.remitcache.com",
    "description": "Streamline your money transfers and receive instant notifications for budget updates and transfer activities",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.remitcache.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="scroll-smooth px-5 md:px-10">
	          {children}
					</main>
          <Footer />
        </ThemeProvider>
        <TailwindIndicator />
        <Toaster
					toastOptions={{
						unstyled: true,
						classNames: {
							toast: "border rounded-lg w-full p-4 bg-black text-foreground flex flex-row items-center gap-2",
							error: "border-destructive text-red-200",
							success: "border-green-500 text-green-200",
							info: "border-blue-500 text-blue-200",
						}
					}}
				/>
        <Analytics />
      </body>
    </html>
  );
}
