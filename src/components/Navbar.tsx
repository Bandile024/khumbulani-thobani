import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PLANNER_PROFILE } from '../data/planningData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Our Services' },
    { to: '/about', label: 'About the Planner' },
    { to: '/areas', label: 'Areas We Serve' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E7E3] header-settle">
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#111613] whitespace-nowrap shrink-0"
        >
          Khumbulani Thobani
        </Link>

        {/* Zone 2: 5 clean multi-page navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2F3A33]"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `py-2 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isActive
                    ? 'border-[#14532D] text-[#14532D] font-semibold'
                    : 'border-transparent hover:text-[#14532D] hover:border-[#14532D]/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PLANNER_PROFILE.phoneHref}
            className="text-sm font-semibold text-[#111613] hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#14532D]" />
            {PLANNER_PROFILE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0E3B20] rounded transition-colors whitespace-nowrap shrink-0 pressable"
          >
            Request Assistance
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 text-[#111613] hover:bg-[#F3F6F4] rounded transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E7E3] px-6 py-5 space-y-4 animate-fade-in-down">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-[#F2F6F3] text-[#14532D] font-semibold'
                      : 'text-[#2F3A33] hover:bg-[#F5F7F5]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E2E7E3] flex flex-col sm:flex-row gap-3">
            <a
              href={PLANNER_PROFILE.phoneHref}
              className="px-4 py-2.5 text-sm font-semibold text-center text-[#111613] border border-[#D5DDD7] rounded"
            >
              Call {PLANNER_PROFILE.phoneDisplay}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-center text-white bg-[#14532D] rounded pressable"
            >
              Request Assistance
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
