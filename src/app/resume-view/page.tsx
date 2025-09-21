import Link from "next/link";

export default function ResumeView() {
  return (
    <div style={{ textAlign: "center", margin: "50px", fontFamily: "sans-serif" }}>
      <iframe
        src="/resume.pdf"
        style={{ width: "80%", height: "80vh", border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>
      <br />
      <a
        href="/resume.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "12px 25px",
          paddingBottom:"12px",
          background: "#4f46e5",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Download Resume
      </a>
      <br />
      <Link href="/about" className="reume-link">
          Back to Portfolio
      </Link>
    </div>
  );
}
