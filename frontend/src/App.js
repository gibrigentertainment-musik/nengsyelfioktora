import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          maxWidth: 700,
          background: "#fff",
          padding: 40,
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,.1)",
          textAlign: "center",
        }}
      >
        <h1>Nengsyelfi Oktora</h1>

        <p>
          Selamat datang di website saya.
        </p>

        <button
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Hubungi Saya
        </button>
      </div>
    </div>
  );
}

export default App;
