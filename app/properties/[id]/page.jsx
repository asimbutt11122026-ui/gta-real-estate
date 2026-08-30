"use client";
import Link from "next/link";

export default function PropertiesPage() {
  const properties = [
    { id: 1, title: "Luxury Home in Oakville", price: 1250000 },
    { id: 2, title: "Modern Condo in Toronto", price: 650000 },
    { id: 3, title: "Spacious Family Home in Milton", price: 890000 },
    { id: 4, title: "Investment Property in Mississauga", price: 520000 },
    { id: 5, title: "Charming Home in Burlington", price: 750000 },
    { id: 6, title: "Townhouse in Brampton", price: 580000 },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1a2a3a" }}>Browse Properties</h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>Find your perfect home</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
        {properties.map(property => (
          <Link key={property.id} href={`/properties/${property.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ backgroundColor: "#f8f7f5", borderRadius: "8px", padding: "20px", cursor: "pointer" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1a2a3a" }}>{property.title}</h3>
              <p style={{ fontSize: "24px", color: "#c89b5a", fontWeight: "bold" }}>${(property.price / 1000000).toFixed(2)}M</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
