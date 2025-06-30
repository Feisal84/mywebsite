"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pic3 from "./asset/kingfaisal.jpg.jpg"; // Example image import
import "./globals.css";
import "./styles/header.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  // Add language state
  const [currentLang, setCurrentLang] = useState('en');
  const [langDropdown, setLangDropdown] = useState(false);

  // Dummy translation function (replace with your actual implementation)
  const t = (key: string, lang: string) => key;

  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  useEffect(() => {
    // Optionally, load theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
  <header className="main-header shadow-md mb-20">
    <nav className="container navbar p-4 mx-auto flex justify-between items-center">
      <Image src={Pic3} alt="Logo" className="Image-Pic3 h-10 w-auto " />
      <div className="flex gap-4">
        <Link href="/" className="hover:underline font-bold">Home</Link>
        <Link href="/shop" className="hover:underline font-bold">Shop</Link>
        <Link href="/about" className="hover:underline font-bold">About me</Link>
        <Link href="/contact" className="hover:underline font-bold">Contact</Link>
      </div>

<div className="flex-1 flex justify-end items-center gap-4">
  <div
    className="dropdown relative"
    onMouseEnter={() => setLangDropdown(true)}
    onMouseLeave={() => setLangDropdown(false)}
    tabIndex={0}
    style={{ zIndex: 100 }}
  >
    <button
      
      className="btn btn-outline-gray rounded-full px-4 py-2 hover:bg-gray-800 transition-colors flex items-center gap-2"
      type="button"
      aria-haspopup="listbox"
      aria-expanded={langDropdown}
    >
      {t(currentLang.toUpperCase(), currentLang)}
      <svg style={{ marginLeft: 6 }} width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 6l6 6 6-6"/></svg>
    </button>
    <ul
      className={`dropdown-menu absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-150 ${langDropdown ? 'block' : 'hidden'}`}
      style={{ minWidth: '7rem' }}
      role="listbox"
    >
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#de" onClick={() => setCurrentLang('de')}>{t('German', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#en" onClick={() => setCurrentLang('en')}>{t('English', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#tr" onClick={() => setCurrentLang('tr')}>{t('Turkish', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#es" onClick={() => setCurrentLang('es')}>{t('Spanish', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#fr" onClick={() => setCurrentLang('fr')}>{t('French', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#ru" onClick={() => setCurrentLang('ru')}>{t('Russian', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#ar" onClick={() => setCurrentLang('ar')}>{t('Arabic', currentLang)}</a></li>
      <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#sq" onClick={() => setCurrentLang('sq')}>{t('Albanian', currentLang)}</a></li>
    </ul>
  </div>
  <div className="ThemeToggle ml-20">
    <button
      className="btn btn-outline-gray rounded-full p-2 hover:bg-gray-800 transition-colors"
      onClick={handleThemeToggle}
      title="Toggle dark/light mode"
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#22c55e" className="bi bi-moon" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#222" className="bi bi-brightness-high" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
      )}
    </button>
  </div>
</div>
    </nav>
  </header>
  <main className="flex-1 container mx-auto p-4">
    {/* Dashboard section for homepage only */}
    {/* {typeof window !== "undefined" && window.location.pathname === "/" && <Dashboard />} */}
    {children}
  </main>
  <footer className="bg-gray-900 text-white text-center p-4 mt-8">
    &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
    <div className="mt-2 flex justify-center gap-4">
      <Link href="/" className="hover:underline font-bold ">Impressum</Link>
        <Link href="/" className="hover:underline font-bold">Datenschutz</Link>
    </div>
  </footer>
</body>
</html>
  );
}
