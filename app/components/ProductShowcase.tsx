import Image from "next/image";

// Data produk (mudah di-update nanti, termasuk BPOM & link affiliate per produk)
const products = [
  {
    id: 1,
    name: "Sido Muncul Libidione",
    description:
      "Produk herbal ini mengandung berbagai zat-zat alami yang memiliki banyak manfaat bagi kesehatan vitalitas pria. Contohnya ginkgo biloba folium, tribulus pasak bumi, hingga panax ginseng (30 kapsul)",
    normalPrice: "Rp 162.286",
    promoPrice: "Rp 113.600",
    image: "/images/Sido-Muncul.png",
    discount: "30%",
    bpomNumber: "TR102310881", // ← Ganti dengan nomor BPOM asli
    orderLink:
      "https://shopee.co.id/M10-Headset-Bluetooth-Full-Bass-Stereo-3500mAh-Power-Bank-Wireless-Earphone-Tahan-Air-TWS-With-Mic-i.891117459.23460038096", // ← Ganti dengan link affiliate khusus (misal Shopee/Tokopedia affiliate)
  },
  {
    id: 2,
    name: "Herbamojo 30 Kapsul",
    description:
      "Herbamojo 30 Kapsul adalah obat herbal yang cukup efektif dalam mengatasi disfungsi ereksi. Obat ini memiliki banyak manfaat bagi pria, terutama dalam meningkatkan stamina pria dan meningkatkan sistem imun. Obat kuat ini mengandung 7 kandungan ekstrak herbal, seperti jahe merah, maca, ginseng, pasak bumi, cabe jawa, hingga purwoceng. ",
    normalPrice: "Rp 233.562",
    promoPrice: "Rp 170.500",
    image: "/images/herbamojo.jpg",
    discount: "27%",
    bpomNumber: "TR182322231", // ← Contoh, ganti dengan asli
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Herbamojo%2030%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 3,
    name: "Herbapoten 10 Tablet",
    description:
      "Herbapoten 10 Tablet mengandung ekstrak Eurycoma longifolia (pasak bumi) dengan dosis 200 mg yang dapat membantu memelihara stamina pria. Selain itu, obat ini juga bisa membantu mengatasi masalah gangguan seksual seperti impoten dan disfungsi ereksi. ",
    normalPrice: "Rp 126.667",
    promoPrice: "Rp 95.000",
    image: "/images/Herbapoten-10-Tablet.jpg",
    discount: "25%",
    bpomNumber: "TR192530591",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Herbapoten%2010%20Tablet%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 4,
    name: "Biosan 275 mg 6 Tablet",
    description:
      "Rekomendasi obat kuat berbahan herbal berikutnya ada Biosan 275 mg 6 Tablet. Obat ini mengandung ekstrak Tribulus terrestris (tanaman rujak polo) yang berguna untuk membantu memelihara stamina pria",
    normalPrice: "Rp 182.254",
    promoPrice: "Rp 129.400",
    image: "/images/Bisan-275mg-6Tablet.png",
    discount: "29%",
    bpomNumber: "TR152588141",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Biosan%20275%20mg%206%20Tablet%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 5,
    name: "X-Gra 150 mg 10 Kapsul",
    description:
      "X-Gra 150 mg 10 Kapsul adalah obat herbal yang bermanfaat untuk membantu meningkatkan stamina dan kesegaran tubuh, serta mengatasi disfungsi ereksi. Komposisi X-Gra 150 mg 10 Kapsul terdiri dari berbagai ekstrak herbal pilihan, Contohnya, ekstrak Ganoderma lucidum (jamur lingzhi), Eurycomae radix (pasak bumi), ginseng, hingga Retrofracti fructus (buah cabe jawa).",
    normalPrice: "Rp 50.000",
    promoPrice: "Rp 29.000",
    image: "/images/X-Gra-150mg-10Kapsul.png",
    discount: "30%",
    bpomNumber: "FF142300581",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20X-Gra%20150%20mg%2010%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 6,
    name: "Konilife Fertilive 30 Kapsul",
    description:
      "Konilife Fertilive 30 Kapsul merupakan obat tradisional atau herbal yang bisa digunakan sebagai obat kuat pria. Produk ini mengandung ekstrak akar ashwagandha yang efektif untuk membantu memelihara stamina pria.",
    normalPrice: "Rp 240.000",
    promoPrice: "Rp 168.000",
    image: "/images/Konilife-Fertilive-30Kapsul.png",
    discount: "30%",
    bpomNumber: "TR212346461",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Konilife%20Fertilive%2030%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 7,
    name: "Unigen TR 15 Kapsul",
    description:
      "Obat ini memiliki kandungan ekstrak kayu muira puama 250 mg, ekstrak daun damiana 100 mg, ekstrak akar panax ginseng 25 mg, setra ekstrak buah polo 100 mg.  Kandungan tersebut mampu membantu untuk meningkatkan vitalitas pria.",
    normalPrice: "Rp 341.067",
    promoPrice: "Rp 255.800",
    image: "/images/UnigenTR-15Kapsul.png",
    discount: "25%",
    bpomNumber: "TR202340261",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Unigen%20TR%2015%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 8,
    name: "Borobudur Tongli 100 Kapsul",
    description:
      "Borobudur Tongli 100 kapsul merupakan obat kuat dengan kandungan ekstrak pasak bumi atau tongkat ali (eurycomae radix extract) 550 mg, yang berkhasiat untuk membantu memelihara stamina pria. ",
    normalPrice: "Rp 140.000",
    promoPrice: "Rp 105.000",
    image: "/images/Borobudur-Tongli-100Kapsul.png",
    discount: "25%",
    bpomNumber: "TR042339151",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Borobudur%20Tongli%20100%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 9,
    name: "Srongpas Gingseng 2 Kapsul",
    description:
      "Srongpas Ginseng mengandung pasak bumi dan ginseng yang baik untuk memperkuat stamina pria. Ginseng bermanfaat untuk meningkatkan stamina, libido, dan gairah seks pria Selain itu, jenis ginseng merah juga kerap menjadi obat alternatif untuk mengatasi impotensi.Baik untuk pria yang sehat maupun mereka mempunyai kecenderungan mengalami ketidaksuburan. Sementara itu, bagian kulit kayu dan akar pasak bumi kerap menjadi obat alternatif untuk kondisi disfungsi ereksi, meningkatkan stamina, dan meningkatkan libido.",
    normalPrice: "Rp 3.571",
    promoPrice: "Rp 2.500",
    image: "/images/Srongpas-Gingseng-2Kapsul.png",
    discount: "30%",
    bpomNumber: "TR173306991",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Srongpas%20Gingseng%202%20Kapsul%20promo", // ← Ganti dengan link affiliate khusus
  },
  {
    id: 10,
    name: "Viagra MMC original isi 10 Tablet",
    description:
      "Viagra MMC original adalah obat kuat pria yang mengandung sildenafil citrate. Kandungan ini bekerja dengan melebarkan pembuluh darah dan meningkatkan aliran darah ke penis saat terjadi rangsangan seksual.",
    normalPrice: "Rp 152.778",
    promoPrice: "Rp 110.000",
    image: "/images/viagra-mmc.png",
    discount: "28%",
    bpomNumber: "DKI1690401417A1",
    orderLink:
      "https://wa.me/628123456789?text=Saya%20mau%20pesan%20Viagra%20MMC%20100%20mg%201%20Tablet%20promo", // ← Ganti dengan link affiliate khusus
  },
  // Tambahkan produk baru di sini nanti
];

export default function ProductShowcase() {
  return (
    <section
      id="produk"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Koleksi Produk Mister Prima
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Semua produk original, terdaftar resmi BPOM, dan dikirim dengan
            privasi terjaga 100%. Pilih yang paling cocok untuk kebutuhan
            stamina & vitalitas Anda.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/70 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/30 flex flex-col h-full"
            >
              {/* Gambar Produk */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge Diskon */}
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg transform rotate-3">
                    Hemat {product.discount}
                  </div>
                )}
              </div>

              {/* Konten */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-3 flex-grow">
                  {product.description}
                </p>

                {/* No. Registrasi BPOM */}
                <div className="mb-4 text-xs md:text-sm">
                  <span className="text-cyan-400 font-semibold">
                    No. Registrasi BPOM:{" "}
                  </span>
                  <span className="text-gray-300">{product.bpomNumber}</span>
                </div>

                {/* Harga */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {product.promoPrice}
                  </span>
                  <span className="text-gray-500 line-through text-lg">
                    {product.normalPrice}
                  </span>
                </div>

                {/* Tombol Pesan dengan Link Terpisah */}
                <a
                  href={product.orderLink} // ← Pakai link khusus per produk
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl font-semibold text-white text-center shadow-md hover:shadow-cyan-600/50 hover:scale-105 transition-all duration-300"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Tambahan di Bawah */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400 mb-6">
            Stok promo terbatas • Semua produk 100% original & terdaftar BPOM
          </p>
          <a
            href="https://wa.me/6289617257030?text=Saya%20ingin%20lihat%20katalog%20lengkap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 transition"
          >
            Tanya Katalog Lengkap via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
