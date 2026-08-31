"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a2a3a" }}>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px", boxSizing: "border-box" }} />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a2a3a" }}>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px", boxSizing: "border-box" }} />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a2a3a" }}>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px", boxSizing: "border-box" }} />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a2a3a" }}>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px", boxSizing: "border-box", fontFamily: "inherit" }} />
      </div>
      <button type="submit" disabled={loading} style={{ backgroundColor: "#c89b5a", color: "white", padding: "12px", borderRadius: "4px", border: "none", fontWeight: "bold", fontSize: "16px", cursor: "pointer", opacity: loading ? 0.6 : 1 }}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      {submitted && <p style={{ color: "#0aa85f", fontWeight: "bold" }}>✓ Message sent successfully!</p>}
    </form>
  );
}
