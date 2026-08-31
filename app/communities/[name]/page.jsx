"use client";
import Link from "next/link";
import { mockCommunities } from "@/lib/mock-data";

export default function CommunityDetailPage({ params }) {
  const community = mockCommunities.find(c => c.id === params.name);
  if (!community) return <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}><h1>Community Not Found</h1><Link href="/communities">Back to Communities</Link></div>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <Link href="/communities" style={{ color: "#c89b5a", textDecoration: "none", fontWeight: "bold", display: "inline-block", marginBottom: "30px" }}>← Back to Communities</Link>
      
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", marginTop: "30px" }}>
        <div>
          <div style={{ fontSize: "200px", textAlign: "center", backgroundColor: "#ebe8e0", borderRadius: "8px", padding: "40px", marginBottom: "40px" }}>{community.image}</div>
          <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#1a2a3a", margin: "0 0 20px 0", fontFamily: "Georgia, serif" }}>{community.name}</h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "20px" }}>📍 {community.region} Region</p>
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>{community.description}</p>
          
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "15px" }}>Market Overview</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px", backgroundColor: "#f8f7f5", borderRadius: "8px", marginBottom: "30px" }}>
            <div><p style={{ color: "#666", margin: 0 }}>Average Price</p><p style={{ fontSize: "24px", fontWeight: "bold", color: "#c89b5a", margin: "5px 0 0 0" }}>${(community.avgPrice / 1000000).toFixed(1)}M</p></div>
            <div><p style={{ color: "#666", margin: 0 }}>Active Properties</p><p style={{ fontSize: "24px", fontWeight: "bold", color: "#1a2a3a", margin: "5px 0 0 0" }}>{community.properties}</p></div>
          </div>

          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "15px" }}>Highlights</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {community.highlights.map((h, i) => (<li key={i} style={{ padding: "8px 0", color: "#666" }}>✓ {h}</li>))}
          </ul>
        </div>

        <div>
          <div style={{ backgroundColor: "#1a2a3a", color: "white", padding: "30px", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px", marginTop: 0 }}>Interested in {community.name}?</h3>
            <p>Browse available properties in this community or contact our team for personalized recommendations.</p>
            <Link href="/properties" style={{ backgroundColor: "#c89b5a", color: "#1a2a3a", padding: "12px", display: "block", textAlign: "center", fontWeight: "bold", borderRadius: "4px", textDecoration: "none", marginBottom: "15px" }}>View Properties</Link>
            <Link href="/contact" style={{ backgroundColor: "transparent", color: "#c89b5a", padding: "12px", display: "block", textAlign: "center", fontWeight: "bold", borderRadius: "4px", textDecoration: "none", border: "2px solid #c89b5a" }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
