import React from "react";
import { LogOut } from "lucide-react"; // using lucide-react icons

const Header = ({ title, onLogout }) => {
  return (
    <header className="w-full bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* App Title */}
      <h1 className="text-xl font-semibold">{title || "Club Recruitment"}</h1>

      {/* Logout Button */}
      {onLogout && (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
