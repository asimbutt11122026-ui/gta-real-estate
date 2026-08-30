import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1a2a3a",
      color: "#f8f7f5",
      padding: "50px 20px 20px",
      marginTop: "60px",
      borderTop: "2px solid #c89b5a",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "40px",
        marginBottom: "40px",
      }}>
        <div>
          <h3 style={{ color: "#c89b5a", marginBottom: "15px" }}>ðŸ  About</h3>
          <p>GTA Real Estate specializes in helping buyers and sellers in the Greater Toronto Area.</p>
        </div>
        <div>
          <h3 style={{ color: "#c89b5a", marginBottom: "15px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link href="/" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link></li>
            <li><Link href="/properties" style={{ color: "#ccc", textDecoration: "none" }}>Properties</Link></li>
            <li><Link href="/communities" style={{ color: "#ccc", textDecoration: "none" }}>Communities</Link></li>
            <li><Link href="/about" style={{ color: "#ccc", textDecoration: "none" }}>About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#c89b5a", marginBottom: "15px" }}>Services</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link href="/properties" style={{ color: "#ccc", textDecoration: "none" }}>Buy Property</Link></li>
            <li><Link href="/sell" style={{ color: "#ccc", textDecoration: "none" }}>Sell Property</Link></li>
            <li><Link href="/contact" style={{ color: "#ccc", textDecoration: "none" }}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#c89b5a", marginBottom: "15px" }}>Contact</h3>
          <p style={{ color: "#ccc" }}>ðŸ“ž (555) 123-4567</p>
          <p style={{ color: "#ccc" }}>ðŸ“§ info@gtarealestate.com</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #333", paddingTop: "20px", textAlign: "center", color: "#999" }}>
        <p>&copy; 2026 GTA Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}
