# Tall Fit 👗📏

**Tall Fit** is a full-stack, rules-based fit-comparison engine designed for tall women (5'7"+). It solves a specific problem: most brands publish body measurements (bust, waist, hips) but omit garment measurements (garment length, inseam). This makes it impossible for tall women to know if a piece of clothing will actually be long enough.

This project allows users to input their measurements in centimetres/inches and compares them against published brand garment measurements to return a transparent verdict (`likely fit`, `likely short`, `likely long`, or `can't assess`).

## 🚀 Tech Stack (Planned)
* **Frontend:** Vite + React + TypeScript + Tailwind CSS
* **Backend:** Node.js + Express + TypeScript
* **Database:** PostgreSQL
* **Architecture:** Monorepo with shared Zod schemas and pure rules-based logic (No runtime AI/LLM).

## 📊 Data Attribution & Credits

This project relies on factual garment measurements published by brands. We do not host brand images, logos, or product descriptions. Every product in the demo links directly back to the brand's official website.

### Deniverse
* **Status:** Confirmed in writing (11 Oct 2026).
* **Founder:** Pragya Awasthi.
* **Data Used:** Inseam, outseam, waist, and hip garment measurements.
* **Usage Rights:** All data rights remain exclusively with Deniverse.Used under written permission for non-commercial student demonstration. 
* **Links:** Every entry links back to the respective Deniverse product page.

### Twelve Twelve Fits
* **Status:** Permission requested / Under-Approvment for non-commercial student demo.
* **Founders:** Gulsheen Anand & Ishmeet Banga.
* **Data Used:** Waist, Hip, Regular Length (42"), and Tall Length (45") garment measurements.
* **Usage Rights:** All data rights remain exclusively with Twelve Twelve Fits. The data is used here strictly for educational, non-commercial portfolio purposes.
* **Links:** Every entry links back to the respective Twelve Twelve Fits product page.

*(Additional brands will be listed here as written permission is confirmed.)*

## ⚖️ License & Educational Use
This repository is a personal, non-commercial student portfolio project created for educational purposes. It is not affiliated with, endorsed by, or sponsored by any of the brands mentioned. Brand data is hand-entered based on publicly available size charts, subject to the permissions granted by the respective brands. 