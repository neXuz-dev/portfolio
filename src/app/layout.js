import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rémi Job-Dorge // Systems Software Engineer",
  description:
    "Portfolio of Rémi Job-Dorge - Systems Software Engineer & Unreal Engine 5 developer. Low-level C++, Rust, reverse engineering, real-time systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
