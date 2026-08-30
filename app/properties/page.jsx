"use client";
import { useState, useMemo } from "react";
import { mockProperties } from "@/lib/mock-data";
import PropertyCard from "@/components/properties/property-card";

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("price-asc");

  const filtered = useMemo(() => {
    let result = mockProperties;
    if (filterType !== "All") result = result.filter(p => p.type === filterType);
    if (searchTerm) result = result.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    return result;
  }, [searchTerm, filterType, sortBy]);

  return (
    <div style={{maxWidth: "1200px", margin: "0 auto", padding: "60px 20px"}}>
      <h1 style={{fontSize: "48px", color: "#1a2a3a"}}>Browse Properties</h1>
      
      <div style={{marginBottom: "30px"}}>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{width: "100%", padding: "12px"}} />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={{marginTop: "10px", padding: "12px"}}>
          <option>All</option>
          <option>House</option>
          <option>Condo</option>
          <option>Townhouse</option>
        </select>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px"}}>
        {filtered.map(property => (<PropertyCard key={property.id} property={property} />))}
      </div>
    </div>
  );
}
