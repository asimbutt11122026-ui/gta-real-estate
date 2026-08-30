"use client";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Communities", href: "/communities" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header style={{
      backgroundColor: "#1a2a3a",
      color: "white",
      padding: "20px 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#c89b5a",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span>ðŸ </span>
          GTA Real Estate
        </Link>
        <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}>
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" style={{
          backgroundColor: "#c89b5a",
          color: "#1a2a3a",
          padding: "10px 20px",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
          Get Started
        </Link>
      </div>
    </header>
  );
}
