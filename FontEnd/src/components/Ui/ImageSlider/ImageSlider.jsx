// src/components/Layout/ImageSlider.jsx
// Component slider ảnh ở trang chủ
// - Có nút "Bắt đầu hành trình ngay" ở giữa, Link đến /tours
// - Comment, text và class bằng tiếng Việt để bạn dễ hiểu

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // dùng Link để chuyển route trong SPA

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80",
];

export default function ImageSlider() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setCur((p) => (p === images.length - 1 ? 0 : p + 1)), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {/* Ảnh slider */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === cur ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Lớp che mờ nhẹ để chữ & nút nổi bật */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Overlay chính: tiêu đề + mô tả + nút CTA */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="text-center space-y-4 pointer-events-auto">
          {/* Tiêu đề (bạn có thể chỉnh hoặc ẩn) */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow">
            Khám phá hành trình cùng <span className="text-blue-400">TravelTour</span>
          </h2>

          {/* Mô tả nhỏ */}
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Lựa chọn tour phù hợp hoặc thuê hướng dẫn viên địa phương cho chuyến đi của bạn.
          </p>

          {/* Nút CTA: Bắt đầu hành trình ngay -> dẫn tới /tours */}
          <div className="mt-3">
            <Link
              to="/tours"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              aria-label="Bắt đầu hành trình - chuyển tới trang Tour"
            >
              Bắt đầu hành trình ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Dots (chấm chuyển slide) */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            aria-label={`go-to-${i}`}
            className={`w-3 h-3 rounded-full ${i === cur ? "bg-blue-600" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}
