"use client";
import Link from "next/link";

export default function PropertyDetailPage({ params }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <Link href="/properties" style={{ color: "#c89b5a" }}>← Back</Link>
      <h1 style={{ marginTop: "30px" }}>Property ID: {params.id}</h1>
      <p>Property detail page coming soon...</p>
    </div>
  );
}
