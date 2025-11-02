// src/components/Layout/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* full-width container with horizontal padding — change to w-full px-0 nếu bạn muốn sát mép */}
      <div className="w-full px-4">
        <div className="relative h-16 flex items-center">
          {/* Logo bên trái */}
          <div className="absolute left-0 flex items-center h-full">
            <Link to="/" className="text-2xl font-bold text-blue-600 pl-2">
              TravelTour
            </Link>
          </div>

          {/* Nav chính giữa */}
          <nav className="mx-auto hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600">Trang Chủ</Link>
            <Link to="/tours" className="hover:text-blue-600">Tour</Link>
            <Link to="/destinations" className="hover:text-blue-600">Điểm Đến</Link>
            <Link to="/blog" className="hover:text-blue-600">Thông Tin</Link>
            <Link to="/contact" className="hover:text-blue-600">Liên Hệ</Link>
          </nav>

          {/* Khu vực bên phải: (mobile menu toggle - không làm gì nếu bạn chưa implement) */}
          <div className="absolute right-0 flex items-center h-full">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
              aria-label="Open menu"
              onClick={() => {
                /* tuỳ bạn thêm handler mobile menu ở đây */
              }}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
