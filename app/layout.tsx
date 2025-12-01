import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Home AI Security & Control",
  description:
    "AI-powered smart home solutions: parental control, facial recognition, and home internet guardian with premium devices like eufy FamiLock S3 Max and Sonoff NSPanel Smart Switch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
