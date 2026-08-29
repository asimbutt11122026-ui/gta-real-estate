"use client";

import { useState } from "react";

export default function TestEmailPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send email");
      } else {
        setResult(data.message);
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      setError("Error sending email: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "40px 20px", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>?? Test Email Form</h1>
        <p>Send a test email to verify Resend integration</p>
      </div>

      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: "#f8f7f5",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ 
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#1a2a3a"
          }}>
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@gmail.com"
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <small style={{ color: "#666" }}>
            We will send the test email to this address
          </small>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ 
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#1a2a3a"
          }}>
            Test Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your test message..."
            required
            rows="6"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#999" : "#c89b5a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Test Email ??"}
        </button>
      </form>

      {result && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#d4edda",
          color: "#155724",
          borderRadius: "4px",
          border: "1px solid #c3e6cb",
        }}>
          <strong>? Success!</strong> {result}
        </div>
      )}

      {error && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "4px",
          border: "1px solid #f5c6cb",
        }}>
          <strong>? Error:</strong> {error}
        </div>
      )}

      <div style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#e7f3ff",
        borderRadius: "4px",
        borderLeft: "4px solid #c89b5a",
      }}>
        <h3 style={{ color: "#1a2a3a", marginTop: 0 }}>?? Testing Info</h3>
        <ul style={{ color: "#666", lineHeight: "1.8" }}>
          <li><strong>From:</strong> onboarding@resend.dev</li>
          <li><strong>To:</strong> Your email</li>
          <li><strong>Check:</strong> Inbox and spam folder</li>
        </ul>
      </div>
    </main>
  );
}
