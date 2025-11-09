import React from "react";
import logo from "../../assets/images/logoTourVN.jpg"; // ✅ đường dẫn ảnh logo của bạn
import SearchBar from "../common/Searchbar";

export default function Header() {
  return (
    <div className="max-w-[1512px] h-[60px] mx-auto flex items-center justify-between px-6">
      <div className="flex gap-[6px]">
        <img src={logo} alt="" />
        <SearchBar />
      </div>
      {/* Ul li list */}
      <div className="flex items-center gap-8">
        <ul className="flex gap-6">
          <li className="hover:text-blue-500 cursor-pointer transition">
            Trang chủ
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Khám phá
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Ưu đãi
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Liên hệ
          </li>
        </ul>
        {/* Button */}
        <button className="bg-black-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Đăng nhập
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
          Đăng ký
        </button>
      </div>
    </div>
  );
}
