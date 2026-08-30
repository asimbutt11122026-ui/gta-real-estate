"use client";
import Link from "next/link";
export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div style={{backgroundColor: "#f8f7f5", borderRadius: "8px", padding: "0"}}>
        <div style={{fontSize: "80px", textAlign: "center", padding: "20px", backgroundColor: "#ebe8e0"}}>{property.image}</div>
        <div style={{padding: "20px"}}>
          <h3 style={{fontSize: "18px", fontWeight: "bold", color: "#1a2a3a"}}>{property.title}</h3>
          <p style={{fontSize: "24px", color: "#c89b5a"}}>${property.price.toLocaleString()}</p>
          <p>{property.beds} Beds | {property.baths} Baths | {property.sqft} Sqft</p>
          <p>📍 {property.address}</p>
        </div>
      </div>
    </Link>
  );
}
