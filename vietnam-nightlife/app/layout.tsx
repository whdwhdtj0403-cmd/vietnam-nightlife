import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vietnam Night Life | 하노이 다낭 나트랑 마사지 & 가라오케",
  description: "하노이, 다낭, 나트랑의 마사지와 가라오케 정보를 지역별로 확인하세요."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}