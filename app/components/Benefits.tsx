export default function Benefits() {
  const benefits = [
    {
      title: "Jaminan 100% Aman & BPOM (Bebas Rasa Was-was)",
      desc: "Kesehatan Anda adalah prioritas kami. Mister Prima hanya menyediakan produk yang terdaftar resmi di BPOM dan Halal. Kami TIDAK MENJUAL obat racikan ilegal yang membahayakan jantung dan ginjal Anda.",
    },
    {
      title: "Privasi, Anti-Malu Terjaga Ketat",
      desc: "Belanja tanpa canggung! Kami menjamin kerahasiaan pesanan Anda. Paket dikirim dengan kemasan polos tertutup, dan nama produk di resi pengiriman akan disamarkan/dipotong (tergantung ekspedisi). Tetangga atau kurir tidak akan tahu isinya.",
    },
    {
      title: "Garansi Produk Original (Anti Barang KW)",
      desc: "Jangan tergiur harga murah tapi isinya tepung! Mister Prima bekerjasama langsung dengan Official Store & Distributor Resmi. Jika produk yang kami rekomendasikan terbukti palsu, kami pandu Anda untuk klaim garansi uang kembali.",
    },
    {
      title: "Kurasi Produk Terbaik (Tidak Perlu Bingung Pilih)",
      desc: "Terlalu banyak pilihan di pasaran bikin pusing? Mister Prima sudah menyeleksi hanya produk-produk terbaik dengan rating tinggi dan ulasan positif. Kami pilihkan yang paling ampuh dan aman, Anda tinggal pakai.",
    },
  ];

  return (
    <section id="manfaat" className="py-20 md:py-28 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Manfaat Utama belanja di Mister Prima
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-cyan-600/60 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl font-black text-cyan-600/30 mb-6 group-hover:text-cyan-500/50 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
