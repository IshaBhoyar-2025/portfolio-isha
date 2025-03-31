"use client"; // Required for using useState

import { useState, ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

// Use Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio - Isha Bhoyar</title>
        <meta name="description" content="Isha Bhoyar Portfolio" />
        <meta name="keywords" content="Portfolio, Developer, Designer" />

        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Bootstrap Icons (CDN to avoid import errors) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />

        {/* External CSS Files (Ensure correct paths) */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="header dark-background flex flex-col">
          {/* Menu Toggle Button */}
          <button
            className="header-toggle d-xl-none bi bi-list cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          ></button>

          {/* Profile Image */}
          <div className="profile-img">
            <Image
              src="/assets/img/isha-portfolio.jpg"
              alt="Isha Bhoyar Profile"
              className="img-fluid rounded-circle"
              width={100}
              height={100}
            />
          </div>

          {/* Name */}
          <h1 className="sitename">Isha Bhoyar</h1>

          {/* Social Links */}
          <div className="social-links text-center space-x-4">
            <a
              href="https://www.linkedin.com/in/isha-bhoyar-395054217/"
              className="text-gray-600 hover:text-blue-600 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/IshaBhoyar-2025"
              className="text-gray-600 hover:text-black text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>


          {/* Navigation Menu */}
          <nav id="navmenu" className={`navmenu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#hero" className="active">
                  <i className="bi bi-house navicon"></i> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bi bi-person navicon"></i> About
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="bi bi-file-earmark-text navicon"></i> Resume
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <i className="bi bi-images navicon"></i> Projects
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="bi bi-hdd-stack navicon"></i> Services
                </a>
              </li>
              <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>

            </ul>
          </nav>
        </header>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
