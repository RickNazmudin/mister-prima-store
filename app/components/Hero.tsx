import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            // Alternatif lain (coba ganti salah satu):
            // backgroundImage: `url('https://www.shutterstock.com/image-vector/blue-color-pattern-gradient-grunge-260nw-2665109831.jpg')`,
            // atau upload gambar sendiri ke /public/images/hero-bg.jpg lalu pakai url('/images/hero-bg.jpg')
          }}
        />
        {/* Overlay gelap semi-transparan + gradient untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Overlay cyan subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Mister Prima
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed mb-10 md:mb-12">
          Selamat Datang di Mister Prima. Kami mengerti bahwa vitalitas adalah
          aset berharga bagi setiap pria. Mister Prima hadir sebagai sahabat
          terpercaya yang menyediakan solusi kesehatan pria dewasa dengan
          standar keamanan tertinggi. Kami menolak menjual produk ilegal.
          Seluruh katalog kami telah teruji klinis, terdaftar resmi di BPOM, dan
          direkomendasikan oleh para ahli.
          <br className="hidden sm:block" />
          Belanja tenang, privasi terjaga, dan rasakan perbedaannya malam ini.
          <br className="hidden sm:block mt-4" />
          Mau coba tapi malu beli di apotek? Pesan di Mister Prima aja. Paket
          dikirim polos tertutup, kurir pun gak akan tau isinya!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 mt-8 md:mt-10">
          <Link
            href="https://wa.me/6289617257030?text=Saya%20ingin%20pesan%20Mister%20Prima%20promo"
            target="_blank"
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg shadow-lg shadow-cyan-700/40 hover:shadow-cyan-600/60 hover:scale-105 transition duration-300 text-center"
          >
            Pesan Sekarang - Diskon 30%
          </Link>

          <Link
            href="#produk"
            className="w-full sm:w-auto border-2 border-cyan-500/70 text-cyan-400 px-8 sm:px-10 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition duration-300 text-center"
          >
            Lihat Detail Produk
          </Link>
        </div>

        {/* Trust badges - lebih compact di mobile */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-lg">✓</span> BPOM Terdaftar
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-lg">✓</span> 100% Bahan Alami
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-lg">✓</span> Garansi 7 Hari
          </div>
        </div>
      </div>
    </section>
  );
}
