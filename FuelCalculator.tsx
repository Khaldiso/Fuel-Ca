import React, { useState } from "react";

const fuelTypes = [
  "Diesel",
  "Gasoline 91",
  "Gasoline 95",
  "LPG",
  "NG"
];

const units = [
  "Liter",
  "Tonne",
  "Kg"
];

export default function FuelCalculator() {
  const [fuelType, setFuelType] = useState(fuelTypes[0]);
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState(units[0]);
  const [additional, setAdditional] = useState("");

  const total = (parseFloat(amount) || 0) + (parseFloat(additional) || 0);

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      padding: 32,
      maxWidth: 400,
      margin: "40px auto",
      fontFamily: "'Segoe UI', 'Arial Rounded MT Bold', Arial, sans-serif",
      boxShadow: "0 2px 12px rgba(0,128,0,0.08)"
    }}>
      <h2 style={{ color: "#218838", fontWeight: 700, marginBottom: 24 }}>
        Fuel Consumption Calculator
      </h2>
      <label style={{ color: "#218838", fontWeight: 500 }}>
        Fuel Type
        <select
          value={fuelType}
          onChange={e => setFuelType(e.target.value)}
          style={{ marginLeft: 12, padding: 6, borderRadius: 6, border: "1px solid #218838" }}
        >
          {fuelTypes.map(f => <option key={f}>{f}</option>)}
        </select>
      </label>
      <br /><br />
      <label style={{ color: "#218838", fontWeight: 500 }}>
        Amount
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ marginLeft: 12, padding: 6, borderRadius: 6, border: "1px solid #218838", width: 100 }}
        />
      </label>
      <select
        value={unit}
        onChange={e => setUnit(e.target.value)}
        style={{ marginLeft: 12, padding: 6, borderRadius: 6, border: "1px solid #218838" }}
      >
        {units.map(u => <option key={u}>{u}</option>)}
      </select>
      <br /><br />
      <label style={{ color: "#218838", fontWeight: 500 }}>
        Additional Amount (optional)
        <input
          type="number"
          value={additional}
          onChange={e => setAdditional(e.target.value)}
          placeholder="Add more"
          style={{ marginLeft: 12, padding: 6, borderRadius: 6, border: "1px solid #218838", width: 100 }}
        />
      </label>
      <br /><br />
      <div style={{
        background: "#e9fbe5",
        color: "#218838",
        fontWeight: 600,
        borderRadius: 8,
        padding: 16,
        fontSize: 18,
        textAlign: "center"
      }}>
        Total: {total} {unit}
      </div>
    </div>
  );
}
