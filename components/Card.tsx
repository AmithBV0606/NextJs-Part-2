import React from "react";

const cardStyle = {
  padding: "100px",
  margin: "10px",
  boxShadow: "0 4px 8px o rgba(0, 0, 0, 0, 0.2)",
  border: "1px solid #fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Card({ children }: { children: React.ReactNode }) {
  return <div style={cardStyle}>{children}</div>;
}