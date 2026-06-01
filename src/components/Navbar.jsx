import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

function Navbar() {
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) < 10) {
        return;
      }

      setShowBottomNav(delta > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bottomNavClass = showBottomNav ? "mobile-bottom-visible" : "mobile-bottom-hidden";

  return (
    <>
      <nav className="navbar-desktop">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="rounded-full w-12 h-12 object-cover" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Re-Mind</span>
        </Link>

        <div className="flex items-center gap-8 text-slate-200">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <a href="#about" className="transition-colors hover:text-white">About Us</a>
          <Link to="/generate" className="transition-colors hover:text-white">Generate Question</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/register" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">Register</Link>
          <Link to="/login" className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800">Login</Link>
        </div>
      </nav>

      <div className="navbar-mobile">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="rounded-full w-10 h-10 object-cover" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Re-Mind</span>
        </Link>
        <Link to="/login" className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">Login</Link>

        <div className={`mobile-bottom ${bottomNavClass}`}>
          <a href="#" className="nav-item">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.18em]">Home</span>
          </a>

          <a href="#about" className="nav-item">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.18em]">About</span>
          </a>

          <Link to="/generate" className="nav-item">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 6h8" />
              <path d="M8 12h8" />
              <path d="M8 18h5" />
              <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.18em]">Generate</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
