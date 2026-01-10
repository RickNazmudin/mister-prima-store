"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { UserCircle } from "lucide-react"; // icon pria sederhana

const testimonials = [
  {
    text: "Baru 10 hari minum rutin, stamina udah beda banget. Istri sampe bilang 'kok sekarang lebih tahan lama ya?' 😅 Mantap lah pokoknya!",
    name: "Budi Santoso",
    age: "38 tahun",
  },
  {
    text: "Awalnya ragu, tapi setelah coba 2 minggu efeknya langsung kerasa. Energi harian naik, gak gampang capek lagi. Aman, no side effect berat. Rekomendasi deh!",
    name: "Andi Pratama",
    age: "45 tahun",
  },
  {
    text: "Produk ini bikin percaya diri balik lagi. Performa di ranjang jauh lebih oke, istri seneng banget. Harga worth it buat kualitasnya.",
    name: "Rizal Mahendra",
    age: "42 tahun",
  },
  {
    text: "Saya yang kerja kantoran biasanya capek pulang, sekarang malah masih semangat olahraga malam. Stamina naik signifikan, thanks Mister Prima!",
    name: "Dedi Kurniawan",
    age: "40 tahun",
  },
  {
    text: "Efeknya cepet banget, hari ke-5 udah terasa bedanya. Gak bikin jantung berdebar-debar, aman buat yang punya riwayat tekanan darah tinggi.",
    name: "Hendra Wijaya",
    age: "47 tahun",
  },
  {
    text: "Akhirnya nemu suplemen yang beneran works tanpa bohong-bohongan. Vitalitas balik, mood juga lebih baik. Pesan lagi nih bulan depan!",
    name: "Slamet Riyadi",
    age: "44 tahun",
  },
  {
    text: "Buat yang suami-suami 40an kayak saya, ini beneran ngebantu. Gak cuma stamina intim, energi sehari-hari juga naik level. Puas!",
    name: "Agus Setiawan",
    age: "41 tahun",
  },
  {
    text: "Awalnya cuma iseng coba, eh ternyata cocok banget. Istri sampe kaget kok sekarang lebih aktif. Gak nyangka ada toko seperti Mister Prima.",
    name: "Fajar Nugroho",
    age: "39 tahun",
  },
];

export default function Testimonial() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Apa Kata Pelanggan Kami?
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="!pb-12 md:!pb-16"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800/70 h-full flex flex-col shadow-xl shadow-black/30">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon kecil sebagai avatar */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center flex-shrink-0 border-2 border-cyan-500/30">
                    <UserCircle
                      className="w-10 h-10 md:w-12 md:h-12 text-cyan-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400">{item.age}</p>
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="text-5xl md:text-6xl text-cyan-900/30 absolute -top-2 -left-2">
                    “
                  </div>
                  <p className="text-gray-200 italic leading-relaxed text-base md:text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
