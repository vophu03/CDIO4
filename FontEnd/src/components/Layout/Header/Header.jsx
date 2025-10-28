// src/components/Layout/Header/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center">
          {/* Logo bên trái */}
          <div className="absolute left-0 flex items-center h-full">
            <Link to="/" className="text-2xl font-bold text-blue-600 pl-2">
              TravelTour
            </Link>
          </div>

          {/* Nav chính giữa (center) */}
          <nav className="mx-auto hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600">Trang Chủ</Link>
            <Link to="/tours" className="hover:text-blue-600">Tour</Link>
            <Link to="/destinations" className="hover:text-blue-600">Điểm Đến</Link>
            <Link to="/blog" className="hover:text-blue-600">Thông Tin</Link>
            <Link to="/contact" className="hover:text-blue-600">Liên Hệ</Link>
          </nav>

          {/* Khu vực bên phải (để nút hoặc để trống) */}
          <div className="absolute right-0 flex items-center h-full">
            {/* Nếu muốn hiện nút, bỏ comment và sửa đường dẫn:
            <Link to="/booking" className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">Đặt Tour</Link>
            <Link to="/TourBookingFlow" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Thuê</Link>
            */}
            {/* Mobile menu icon (nếu muốn) */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
              aria-label="Open menu"
            >
              {/* simple hamburger */}
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
