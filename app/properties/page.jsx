"use client";
import Link from "next/link";
export default function PropertiesPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <h1>Browse Properties</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
        {[
          { id: 1, title: "Luxury Home in Oakville", price: 1250000 },
          { id: 2, title: "Modern Condo in Toronto", price: 650000 },
          { id: 3, title: "Spacious Family Home in Milton", price: 890000 },
          { id: 4, title: "Investment Property in Mississauga", price: 520000 },
          { id: 5, title: "Charming Home in Burlington", price: 750000 },
          { id: 6, title: "Townhouse in Brampton", price: 580000 },
        ].map(p => (
          <Link key={p.id} href={`/properties/${p.id}`}><div style={{ backgroundColor: "#f8f7f5", borderRadius: "8px", padding: "20px" }}><h3>{p.title}</h3><p style={{ color: "#c89b5a", fontWeight: "bold" }}>${(p.price/1000000).toFixed(2)}M</p></div></Link>
        ))}
      </div>
    </div>
  );
}
