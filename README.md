# AI Chat Full Project

Proyek ini berisi **backend (Node.js + Express)** dan **frontend (HTML/CSS/JS)**.

## 🚀 Backend
1. Masuk ke folder `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Tambahkan API key OpenAI:
   ```bash
   export OPENAI_API_KEY=your_api_key_here
   ```
4. Jalankan server:
   ```bash
   npm start
   ```

## 🌍 Deploy ke Render
1. Push folder `backend/` ke GitHub repo baru.
2. Di Render, buat Web Service.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Tambahkan Environment Variable `OPENAI_API_KEY`
6. Deploy → dapat URL misalnya:
   ```
   https://ai-chat-backend.onrender.com/chat
   ```

## 💻 Frontend
- Masuk folder `frontend/`
- Buka `index.html` di browser atau upload ke GitHub Pages.
- Edit `widget.js` → ganti `BACKEND_URL` sesuai URL backend.
