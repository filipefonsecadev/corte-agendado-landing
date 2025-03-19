
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 bg-[#1A1F2C]/90 backdrop-blur-md shadow-sm border-b border-[#2A3042]/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center space-x-2 text-xl font-bold text-white"
        >
          <span className="text-[#4D9EEB]">Corte</span>
          <span>Agendado</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="nav-link">
            Funcionalidades
          </a>
          <a href="#plans" className="nav-link">
            Planos
          </a>
          <a href="#benefits" className="nav-link">
            Benefícios
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="#plans" className="primary-button">
            Experimente Grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#21273A] absolute top-full left-0 right-0 shadow-lg border-b border-[#2A3042]/50">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#features"
              className="nav-link p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#plans"
              className="nav-link p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#benefits"
              className="nav-link p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#contact"
              className="nav-link p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
            <a
              href="#plans"
              className="primary-button inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experimente Grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
