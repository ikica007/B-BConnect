# B&B CONNECT AMAR

Telekommunikation und Glasfaser Website.

## 🚀 Pokretanje lokalno (Local Development)

### Preduslovi:
- Node.js (v18+)
- npm ili bun

### Koraci:

1. **Instalacija zavisnosti (dependencies):**
   ```bash
   npm install
   ```

2. **Konfiguracija okruženja:**
   Kopirajte `.env.example` u `.env.local` ukoliko koristite Gemini API funkcionalnosti:
   ```bash
   cp .env.example .env.local
   ```
   I postavite `GEMINI_API_KEY`.

3. **Pokretanje razvojnog servera:**
   ```bash
   npm run dev
   ```
   Aplikacija će biti dostupna na `http://localhost:3000`.

4. **Build za produkciju:**
   ```bash
   npm run build
   ```

## 🛠️ Korištene tehnologije
- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP & Framer Motion
- Lucide React
