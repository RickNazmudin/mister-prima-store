import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mister Prima | Rahasia Stamina Pria Sejati",
  description:
    "Rekomendasi produk kesehatan pria dewasa, resmi BPOM, dan terpercaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Script ini jalan SEBELUM React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const unwanted = ['bis_register', '__processed_', 'bis_skin_checked'];
                
                function cleanAttributes() {
                  unwanted.forEach(attr => {
                    if (document.body.hasAttribute(attr)) {
                      document.body.removeAttribute(attr);
                    }
                  });
                }
                
                // Jalankan segera
                cleanAttributes();
                
                // Pantau kalau ditambah lagi
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach(() => cleanAttributes());
                });
                
                observer.observe(document.body, { attributes: true });
              })();
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
