"use client";
import Link from "next/link";

export default function CommunityCard({ community }) {
  return (
    <Link href={`/communities/${community.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ backgroundColor: "#f8f7f5", borderRadius: "8px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s", border: "2px solid transparent" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = "#c89b5a"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "transparent"; }}>
        <div style={{ fontSize: "80px", textAlign: "center", padding: "30px", backgroundColor: "#ebe8e0" }}>{community.image}</div>
        <div style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1a2a3a", margin: "0 0 10px 0" }}>{community.name}</h3>
          <p style={{ fontSize: "14px", color: "#666", margin: "0 0 10px 0" }}>{community.region}</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#c89b5a", margin: "0 0 10px 0" }}>${(community.avgPrice / 1000000).toFixed(1)}M avg</p>
          <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{community.properties} properties</p>
        </div>
      </div>
    </Link>
  );
}
