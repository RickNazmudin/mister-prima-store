import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black text-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Jangan Tunda Lagi!
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 md:mb-12">
          Stok promo terbatas • Harga khusus hanya hari ini
        </p>

        <Link
          href="https://wa.me/6289617257030?text=Saya%20mau%20pesan%20Mister%20Prima%20sekarang"
          target="_blank"
          className="inline-block bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-12 py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-cyan-700/40 hover:shadow-cyan-600/60 hover:scale-105 transition duration-300"
        >
          Pesan Sekarang via WhatsApp
        </Link>

        <p className="mt-8 text-gray-400 text-sm">
          Pengiriman cepat • Pembayaran aman • Garansi uang kembali 7 hari
        </p>
      </div>
    </section>
  );
}
