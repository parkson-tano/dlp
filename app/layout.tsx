// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

// types/metadata.ts
export interface Metadata {
  title: string;
  description: string;
  image: string; // Assuming image is required
}

export const metadata: Metadata = {
  title: "Digital Life Prince",
  description: "Get ready for the next bull run",
  image: "/crypto_course.jpeg", // Replace with your image URL
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


