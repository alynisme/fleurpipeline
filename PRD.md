PRD: FleurFinder

1. Problem Statement
[Lelaki yang sudah memiliki pasangan baik yang sudah long term berpacaran atau sedang dalam masa pdkt. Seringkali merasakan anxiety berupa overthinking disaat dihadapkan dengan keputusan untuk memilih hadiah yang tepat untuk pasangannya. Apalagi memilih buket bunga yang terkadang dipengaruhi oleh mood dan preferensi cewe pun berbeda-beda) 

1. Target User
- Primer: [Lelaki berusia 17-27 tahun yang tinggal di kota seperti Bandung, Jakarta, Surbaya, dan sering overthinking saat memilih bunga untuk pasangannya]


1. User Stories (3-5 cerita inti)
- Sebagai owner bisnis buket bunga kawat bulu, saya mau customer bisa diberikan arahan yang tepat saat memilih buket bunga supaya pasangan yang menerimanya tidak kecewa dengan hasil buket bunganya karena cowonya tidak bisa memilih buket bunga yang tepat.


 4. Features (MVP — maksimal 5)
[Fitur 1: Direct Recommendation (Core Feature)
User memilih situasi sederhana (Anniversary, Apology, PDKT) → langsung mendapatkan 1–3 rekomendasi bouquet.
Tidak termasuk: input kompleks seperti mood analysis atau AI prediction.]
[Fitur 2: Simple Input Flow (2–3 step max)
User hanya memilih:
Occasion
Budget
→ langsung ke hasil
Tidak termasuk: form panjang atau personalization yang terlalu detail.
Fitur 3: Product Display (Visual Output)
Menampilkan bouquet rekomendasi lengkap dengan:
- Foto
- Harga
- Deskripsi singkat (kenapa cocok)
Tidak termasuk: katalog lengkap semua produk.
Fitur 4: Order Redirect / CTA
Button untuk langsung order via:
WhatsApp / Instagram DM
Tidak termasuk: full checkout system di web (no cart, no payment gateway).


1. Tech Stack
- Frontend: Next.js 15 + TypeScript + Tailwind CSS
Backend/DB: Supabase (PostgreSQL + Auth)
Payment (jika perlu): Midtrans
Hosting: Vercel
AI Tools: Claude Code (CLI), v0.dev (prototype)

1. Success Metrics (cara mengukur berhasil)
- [≥ 60% user menyelesaikan flow sampai melihat rekomendasi
≥ 30% user klik tombol “Order” (WA/DM)
- ≥ 20% dari yang klik benar-benar melakukan order
- User menyatakan “lebih yakin memilih” (feedback kualitatif)
- Waktu memilih bouquet berkurang (lebih cepat dari browsing manual)

7. Out of Scope (PENTING — daftar yang TIDAK akan dibuat)
- Fitur AI complex (emotion prediction, mood analysis)
- Full e-commerce checkout system (cart, payment, tracking)
- Custom bouquet builder detail (pilih bunga satu-satu)
- User account / login system
Integrasi WhatsApp Business API otomatis