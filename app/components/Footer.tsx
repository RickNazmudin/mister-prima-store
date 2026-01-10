export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Deskripsi */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Mister Prima
            </h3>
            <p className="text-gray-400 text-sm">
              'Sahabat Rahasia' bagi pria dewasa yang ingin menjaga stamina dan
              keharmonisan rumah tangga dengan cara yang AMAN. Kami hanya
              menyediakan produk vitalitas yang 100% Original dan Terdaftar
              BPOM, serta menjamin privasi pengiriman Anda tetap tertutup rapat.
            </p>
          </div>

          {/* Link Navigasi */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#produk" className="hover:text-cyan-400 transition">
                  Produk
                </a>
              </li>
              <li>
                <a href="#manfaat" className="hover:text-cyan-400 transition">
                  Manfaat
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-cyan-400 transition">
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hubungi Kami
            </h4>
            <p className="text-gray-400 text-sm mb-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/6289617257030"
                className="hover:text-cyan-400"
              >
                +62 896-1725-7030
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-6">
              © {new Date().getFullYear()} Mister Prima. Semua hak cipta
              dilindungi.
              <br />
              Produk ini bukan obat dan tidak dimaksudkan untuk mendiagnosis,
              mengobati, menyembuhkan atau mencegah penyakit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
