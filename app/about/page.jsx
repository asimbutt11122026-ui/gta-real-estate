"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <section style={{ textAlign: "center", marginBottom: "60px", padding: "60px 20px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1a2a3a", margin: "0 0 20px 0", fontFamily: "Georgia, serif" }}>About GTA Real Estate</h1>
        <p style={{ fontSize: "18px", color: "#666", margin: 0 }}>Your trusted partner in Greater Toronto Area real estate</p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "80px" }}>
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "20px", fontFamily: "Georgia, serif" }}>Our Story</h2>
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.8", marginBottom: "15px" }}>Founded with a passion for connecting people with their dream homes, GTA Real Estate has been serving the Greater Toronto Area for over a decade. We specialize in residential and investment properties across Halton and Peel regions.</p>
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.8" }}>Our team of experienced agents is dedicated to providing exceptional service, market expertise, and personalized attention to every client.</p>
        </div>

        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "20px", fontFamily: "Georgia, serif" }}>Why Choose Us?</h2>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "5px" }}>Local Expertise</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Deep knowledge of Halton and Peel markets</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "5px" }}>Professional Team</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Certified agents committed to your success</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "5px" }}>Full Service</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>From search to closing, we handle it all</p>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#f8f7f5", padding: "60px 40px", borderRadius: "8px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "20px", fontFamily: "Georgia, serif" }}>Ready to Get Started?</h2>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}>Let's find your perfect home together.</p>
        <Link href="/contact" style={{ backgroundColor: "#c89b5a", color: "white", padding: "15px 40px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>Contact Us</Link>
      </section>
    </div>
  );
}
