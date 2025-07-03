"use client";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import { useState } from "react";

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div dir="rtl" style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 16 }}>מפת הכיתה</h1>
        <Map />
        <form style={{ marginTop: 24, background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="name">שם:</label>
            <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} style={{ marginRight: 8 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="address">כתובת:</label>
            <input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} style={{ marginRight: 8 }} />
          </div>
          <button type="submit">הוסף מיקום</button>
        </form>
      </main>
    </div>
  );
}
