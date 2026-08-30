"use client";
import Link from "next/link";

export default function PropertyDetailPage({ params }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <Link href="/properties">← Back</Link>
      <h1 style={{ marginTop: "30px", fontSize: "36px", fontWeight: "bold" }}>Property ID: {params.id}</h1>
      <p style={{ fontSize: "18px", color: "#666" }}>Property detail page</p>
    </div>
  );
}
