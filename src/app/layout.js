"use client";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { useState } from "react";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>dittmptrr27 | Portfolio</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <div className={darkMode ? "dark" : ""}>
          <main className="bg-white dark:bg-gray-900 md:px-20 lg:px-40">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
