import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800">SoloForge</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-600 font-medium">
          <li>
            <Link href="/home" className={isActive("/home") ? "text-blue-800 font-bold underline" : "hover:underline"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about") ? "text-blue-800 font-bold underline" : "hover:underline"}>
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <Link href="/home" className={isActive("/home") ? "block text-blue-800 font-bold underline" : "block hover:underline"}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "block text-blue-800 font-bold underline" : "block hover:underline"}>
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
