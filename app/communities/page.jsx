"use client";
import { useState, useMemo } from "react";
import { mockCommunities } from "@/lib/mock-data";
import CommunityCard from "@/components/communities/community-card";

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");

  const filtered = useMemo(() => {
    let result = mockCommunities;
    if (filterRegion !== "All") result = result.filter(c => c.region === filterRegion);
    if (searchTerm) result = result.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  }, [searchTerm, filterRegion]);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <section style={{ textAlign: "center", marginBottom: "60px", padding: "60px 20px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1a2a3a", margin: "0 0 20px 0", fontFamily: "Georgia, serif" }}>Explore Our Communities</h1>
        <p style={{ fontSize: "18px", color: "#666", margin: 0 }}>Discover neighborhoods across Halton and Peel regions</p>
      </section>

      <section style={{ marginBottom: "60px", padding: "30px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#1a2a3a" }}>Search Communities</label>
          <input type="text" placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#1a2a3a" }}>Filter by Region</label>
          <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px" }}>
            <option>All</option>
            <option>Halton</option>
            <option>Peel</option>
          </select>
        </div>
        <p style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>Showing {filtered.length} of {mockCommunities.length} communities</p>
      </section>

      <section>
        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
            {filtered.map(community => (<CommunityCard key={community.id} community={community} />))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
            <p style={{ fontSize: "18px", color: "#666" }}>No communities found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
