"use client";
import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <section style={{ textAlign: "center", marginBottom: "60px", padding: "60px 20px", backgroundColor: "#f8f7f5", borderRadius: "8px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#1a2a3a", margin: "0 0 20px 0", fontFamily: "Georgia, serif" }}>Get in Touch</h1>
        <p style={{ fontSize: "18px", color: "#666", margin: 0 }}>Have questions? Send us a message and we'll respond soon.</p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "60px" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "30px" }}>Send us a Message</h2>
          <ContactForm />
        </div>

        <div>
          <div style={{ backgroundColor: "#f8f7f5", padding: "30px", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1a2a3a", marginBottom: "20px" }}>Contact Information</h3>
            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "#666", textTransform: "uppercase", margin: "0 0 5px 0" }}>Phone</p>
              <p style={{ fontSize: "16px", color: "#1a2a3a", margin: 0 }}>(555) 123-4567</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "#666", textTransform: "uppercase", margin: "0 0 5px 0" }}>Email</p>
              <p style={{ fontSize: "16px", color: "#1a2a3a", margin: 0 }}>info@gtarealestate.com</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: "bold", color: "#666", textTransform: "uppercase", margin: "0 0 5px 0" }}>Address</p>
              <p style={{ fontSize: "16px", color: "#1a2a3a", margin: 0 }}>Greater Toronto Area, Ontario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
