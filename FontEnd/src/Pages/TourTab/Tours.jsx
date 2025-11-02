import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* MOCK DATA mở rộng (thêm nhiều item để demo) */
const MOCK_TOURS = [
  { id:1,name:"City Tour Đà Nẵng 1 Ngày", location:"Đà Nẵng", duration:1, rating:5, price:850000, oldPrice:900000, tag:"Nổi bật", img:"https://picsum.photos/id/1015/1200/800" },
  { id:2,name:"Bà Nà Hills - Đêm by night", location:"Đà Nẵng", duration:1, rating:5, price:850000, oldPrice:900000, tag:"Nổi bật", img:"https://picsum.photos/id/1016/1200/800" },
  { id:3,name:"Tour 1 Ngày Sơn Trà – Ngũ Hành Sơn", location:"Đà Nẵng", duration:1, rating:4, price:590000, oldPrice:690000, tag:"Nổi bật", img:"https://picsum.photos/id/1018/1200/800" },
  { id:4,name:"Cù Lao Chàm 1 Ngày", location:"Quảng Nam", duration:1, rating:5, price:750000, oldPrice:900000, tag:"", img:"https://picsum.photos/id/1020/1200/800" },
  { id:5,name:"Huế 1 Ngày", location:"Huế", duration:1, rating:4, price:650000, oldPrice:700000, tag:"", img:"https://picsum.photos/id/1024/1200/800" },
  { id:6,name:"Phú Quốc Resort 3N", location:"Phú Quốc", duration:3, rating:5, price:5200000, oldPrice:6000000, tag:"Nổi bật", img:"https://picsum.photos/id/1027/1200/800" },
  { id:7,name:"Sapa Trekking 3N2Đ", location:"Sapa", duration:3, rating:5, price:2300000, oldPrice:2500000, tag:"", img:"https://picsum.photos/id/1035/1200/800" },
  { id:8,name:"Mekong Delta Experience", location:"Cần Thơ", duration:1, rating:4, price:900000, oldPrice:1000000, tag:"", img:"https://picsum.photos/id/1041/1200/800" },
  { id:9,name:"Đảo Lý Sơn 2N1Đ", location:"Quảng Ngãi", duration:2, rating:4, price:1500000, oldPrice:1700000, tag:"", img:"https://picsum.photos/id/1050/1200/800" },
  { id:10,name:"Ninh Bình Tràng An 1N", location:"Ninh Bình", duration:1, rating:4, price:850000, oldPrice:950000, tag:"", img:"https://picsum.photos/id/1060/1200/800" },
  { id:11,name:"Đà Lạt Couple 3N2Đ", location:"Đà Lạt", duration:3, rating:5, price:1900000, oldPrice:2200000, tag:"", img:"https://picsum.photos/id/1067/1200/800" },
  { id:12,name:"Hạ Long Bay Cruise 2N", location:"Hạ Long", duration:2, rating:5, price:2600000, oldPrice:2900000, tag:"Nổi bật", img:"https://picsum.photos/id/1074/1200/800" },
];

const LOCATIONS = [...new Set(MOCK_TOURS.map(t => t.location))];
const DURATIONS = [...new Set(MOCK_TOURS.map(t => t.duration))].sort((a,b)=>a-b);
const RATINGS = [5,4,3,2,1];

function StarRow({n}) {
  return (
    <div className="flex items-center text-yellow-400">
      {Array.from({length:5}).map((_,i)=>(
        <svg key={i} className={`w-4 h-4 ${i < n ? "" : "opacity-30"}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L23.5 9.75l-5.5 5.362L19.335 24 12 19.897 4.665 24 6 15.112 0.5 9.75l7.832-1.732z"/></svg>
      ))}
    </div>
  );
}

function TourCard({tour, onExplore}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      <div className="relative h-44 md:h-48 overflow-hidden">
        <img src={tour.img} alt={tour.name} className="w-full h-full object-cover transition-transform transform hover:scale-105" />
        {tour.tag && <div className="absolute left-3 top-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">{tour.tag}</div>}
        <button className="absolute right-3 top-3 bg-white/80 rounded-full p-1 hover:scale-105">
          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" strokeWidth="1.2" /></svg>
        </button>
        <div className="absolute left-3 bottom-3 bg-white/90 text-sm px-2 py-1 rounded-md border">⏱ {tour.duration} ngày</div>
      </div>

      <div className="p-4">
        <h3 className="text-md md:text-lg font-semibold text-black">{tour.name}</h3>
        <div className="text-sm text-gray-700 mt-1 flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" /></svg>
          <span className="text-black">{tour.location}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div><StarRow n={tour.rating} /></div>
          <div className="text-right">
            <div className="text-lg font-bold text-red-600">{Number(tour.price).toLocaleString('vi-VN')}₫</div>
            {tour.oldPrice && <div className="text-sm text-gray-400 line-through">{Number(tour.oldPrice).toLocaleString('vi-VN')}₫</div>}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button onClick={() => onExplore(tour)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Khám phá</button>
          <button className="text-sm text-gray-600 underline">Xem chi tiết</button>
        </div>
      </div>
    </div>
  );
}

export default function Tours() {
  const navigate = useNavigate();

  // filters / UI state
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25000000);
  const [rating, setRating] = useState(null);
  const [layoutGrid, setLayoutGrid] = useState(true);
  const [sortBy, setSortBy] = useState("popular");

  // filtered results
  const filtered = useMemo(() => {
    let arr = MOCK_TOURS.slice();
    if (q.trim()) {
      const t = q.trim().toLowerCase();
      arr = arr.filter(x => (x.name + " " + x.location).toLowerCase().includes(t));
    }
    if (location) arr = arr.filter(x => x.location === location);
    if (rating) arr = arr.filter(x => x.rating >= rating);
    arr = arr.filter(x => x.price >= minPrice && x.price <= maxPrice);

    if (sortBy === "price-asc") arr.sort((a,b)=>a.price-b.price);
    else if (sortBy === "price-desc") arr.sort((a,b)=>b.price-a.price);
    else if (sortBy === "popular") arr.sort((a,b)=> (b.tag?1:0) - (a.tag?1:0));

    return arr;
  }, [q, location, minPrice, maxPrice, rating, sortBy]);

  function handleExplore(tour) {
    navigate("/booking", { state: { tour } });
  }

  return (
    /* FULL-WIDTH layout: the outer wrapper is w-full so content uses whole viewport width */
    <div className="min-h-screen bg-gray-50 w-full">
      {/* full-bleed horizontal padding (px-4) but no max width limiter */}
      <div className="w-full px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar fixed width */}
          <aside className="w-80 bg-white rounded-lg p-4 shadow-sm sticky top-20 self-start">
            <h4 className="font-semibold text-lg mb-3 text-black">Tìm kiếm tour</h4>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Từ khóa</label>
              <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Nhập tên tour, địa điểm..." className="w-full border px-3 py-2 rounded text-black" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black">Theo địa điểm</label>
              <select value={location} onChange={(e)=>setLocation(e.target.value)} className="w-full border px-3 py-2 rounded text-black">
                <option value="">Tất cả</option>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black">Theo giá (₫)</label>
              <div className="flex gap-2 items-center">
                <input type="number" value={minPrice} onChange={e=>setMinPrice(Number(e.target.value||0))} className="w-1/2 border px-2 py-1 rounded text-black" />
                <input type="number" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value||0))} className="w-1/2 border px-2 py-1 rounded text-black" />
              </div>
              <div className="text-xs text-gray-600 mt-1">Nhập khoảng giá tối thiểu & tối đa</div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black">Theo đánh giá</label>
              {RATINGS.map(r => (
                <label key={r} className="flex items-center gap-2 text-sm mb-1 text-black">
                  <input type="radio" name="rating" onChange={()=>setRating(r)} checked={rating===r} />
                  <div className="flex items-center">
                    <StarRow n={r} />
                    <span className="ml-2 text-gray-700">trở lên</span>
                  </div>
                </label>
              ))}
              <button onClick={()=>setRating(null)} className="text-xs text-blue-600 underline mt-1">Xóa</button>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-black">Loại hình</h5>
              <label className="flex items-center gap-2 text-sm text-black"><input type="checkbox" /> tour trong nước</label>
              <label className="flex items-center gap-2 text-sm text-black"><input type="checkbox" /> tour nước ngoài</label>
              <label className="flex items-center gap-2 text-sm text-black"><input type="checkbox" /> tour theo ngày</label>
            </div>
          </aside>

          {/* Main content (fluid) */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-black">{filtered.length} tour được tìm thấy</h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700">Sắp xếp theo</div>
                <select value={sortBy} onChange={e=>setSortBy(e.target.value)} className="border px-2 py-1 rounded text-black">
                  <option value="popular">nổi bật</option>
                  <option value="price-asc">giá: thấp → cao</option>
                  <option value="price-desc">giá: cao → thấp</option>
                </select>

                <div className="flex items-center border rounded">
                  <button onClick={()=>setLayoutGrid(true)} className={`p-2 ${layoutGrid ? "bg-gray-100" : ""}`} title="Grid">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>
                  </button>
                  <button onClick={()=>setLayoutGrid(false)} className={`p-2 ${!layoutGrid ? "bg-gray-100" : ""}`} title="List">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5" width="18" height="3"/><rect x="3" y="11" width="18" height="3"/><rect x="3" y="17" width="18" height="3"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {layoutGrid ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(t => <TourCard key={t.id} tour={t} onExplore={handleExplore} />)}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map(t => (
                  <div key={t.id} className="bg-white rounded-lg shadow-sm flex overflow-hidden">
                    <div className="w-1/3 h-40 overflow-hidden"><img src={t.img} alt={t.name} className="w-full h-full object-cover" /></div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-lg text-black">{t.name}</h3>
                      <div className="text-sm text-gray-700 mt-1">{t.location} • {t.duration} ngày</div>
                      <div className="mt-3 flex items-center justify-between">
                        <div><StarRow n={t.rating} /></div>
                        <div className="text-right"><div className="text-lg font-bold text-red-600">{Number(t.price).toLocaleString('vi-VN')}₫</div></div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button onClick={()=>handleExplore(t)} className="bg-blue-500 text-white px-4 py-2 rounded">Khám phá</button>
                        <button className="text-sm text-gray-600 underline">Xem chi tiết</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <nav className="inline-flex items-center gap-2">
                <button className="px-3 py-1 border rounded">«</button>
                <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-3 py-1 border rounded">3</button>
                <button className="px-3 py-1 border rounded">»</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
