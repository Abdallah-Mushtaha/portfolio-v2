import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdallah Mushtaha | Frontend Developer",
  description:
    "A Frontend Developer passionate about building modern, fast, and responsive web apps using React.js and Next.js.",
  keywords: [
    "Abdallah Mushtaha",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Abdallah Mushtaha" }],
  robots: "index, follow",


  openGraph: {
    title: "Abdallah Mushtaha | Frontend Developer",
    description:
      "Explore the portfolio of Abdallah Mushtaha, a frontend developer specializing in React and Next.js.",
    url: "https://your-website-link.com", // Web-site linke dont forget 
    siteName: "Abdallah Mushtaha",
    type: "website",
    images: [
      {
        url: "/Images/letterAbood.png",
        width: 1200,
        height: 630,
        alt: "Abdallah Mushtaha Portfolio",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Abdallah Mushtaha | Frontend Developer",
    description:
      "Building modern, responsive, and high-performance web apps using React.js and Next.js.",
    creator: "@AboodMushtaha0",
    images: ["/og-image.png"],
  },

  // Favicon
  icons: {
    icon: "/Images/letterAbood.png",
    shortcut: "/Images/letterAbood.png",
    apple: "/Images/letterAbood.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <link rel="canonical" href="https://your-website-link.com" />
        <meta name="google-site-verification" content="Hm4A1vJm9eT5xdjEigYhD8d6vqu3yXVZqzKlOt1QAXw" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  );
}
