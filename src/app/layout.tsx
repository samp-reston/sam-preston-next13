import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sam Preston | Full Stack Developer",
  description:
    "Samuel Preston | Fullstack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront.",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "Next.js",
    "React",
    "Tailwind",
    "Typescript",
    "Fullstack",
    "Developer",
    "Sam",
    "Preston",
    "Samuel",
    "Sam Preston",
    "Samuel Preston",
    "Samuel Preston Fullstack",
    "Samuel Preston Fullstack Developer",
    "Samuel Preston Fullstack Web Developer",
    "Samuel Presto",
  ],
  authors: [{ name: "Sam Preston" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Sam Preston",
  publisher: "Sam Preston",
  openGraph: {
    type: "website",
    title: "Sam Preston | Full Stack Developer",
    description:
      "Samuel Preston | Full Stack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront.",
    url: "https://www.sampreston.co.uk/",
  },
  twitter: {
    title: "Sam Preston | Full Stack Developer",
    description:
      "Samuel Preston | Full Stack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront.",
    site: "@samp_reston",
    creator: "@samp_reston",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center break-words bg-gradient-to-b from-primary to-base pb-16">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
