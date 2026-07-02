import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-amber-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate("home")}
          >
            <div className="text-3xl font-bold text-amber-400 transform transition-transform group-hover:scale-110">
              Swaadsetu
            </div>
            <div className="ml-2 text-white text-sm hidden sm:block">
              Authentic Indian Flavours
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-lg font-medium transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform origin-left transition-transform duration-300 ${
                    currentPage === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-400 hover:text-amber-300 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-amber-400/20 animate-slideDown">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-amber-400 text-black"
                    : "text-white hover:bg-amber-400/10 hover:text-amber-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
