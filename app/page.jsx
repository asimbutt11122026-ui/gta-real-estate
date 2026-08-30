"use client";
import Link from "next/link";
export default function HomePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <section style={{ textAlign: "center", marginBottom: "80px", padding: "60px 20px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "20px", fontFamily: "Georgia, serif" }}>
          Find Your Dream Home in the GTA
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
          Discover premium properties across Halton and Peel regions.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/properties" style={{ backgroundColor: "#c89b5a", color: "white", padding: "15px 30px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>Browse Properties</Link>
          <Link href="/contact" style={{ backgroundColor: "transparent", color: "#1a2a3a", padding: "15px 30px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", border: "2px solid #1a2a3a" }}>Get in Touch</Link>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "80px" }}>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "36px", fontWeight: "bold", color: "#c89b5a" }}>267+</div><p>Active Listings</p></div>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "36px", fontWeight: "bold", color: "#c89b5a" }}>$825K</div><p>Average Price</p></div>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "36px", fontWeight: "bold", color: "#c89b5a" }}>7+</div><p>Communities</p></div>
        <div style={{ textAlign: "center" }}><div style={{ fontSize: "36px", fontWeight: "bold", color: "#c89b5a" }}>28 days</div><p>Avg. Days on Market</p></div>
      </section>
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "40px", textAlign: "center" }}>Featured Communities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {["Oakville", "Mississauga", "Burlington", "Milton", "Brampton", "Caledon"].map((name) => (
            <Link key={name} href="/communities" style={{ padding: "30px", backgroundColor: "#f8f7f5", borderRadius: "8px", textDecoration: "none", border: "2px solid transparent" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1a2a3a" }}>{name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
