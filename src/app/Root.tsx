import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import svgPaths from "../imports/svg-1wi5zx56yz";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const navItems = [
  { to: "/button", label: "Button" },
  { to: "/input", label: "Input" },
  { to: "/textarea", label: "Text Area" },
  { to: "/dropdown", label: "Dropdown" },
  { to: "/dropdown-multiple", label: "Dropdown Multiple" },
  { to: "/date-input", label: "Date Input" },
  { to: "/time-input", label: "Time Input" },
  { to: "/search-input", label: "Search Input" },
  { to: "/option-list", label: "Option List" },
  // { to: "/tab", label: "Tab" },
  // { to: "/card", label: "Card" },
];

function Logo() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[153px]">
      {/* Symbol icon */}
      <div
        className="absolute overflow-clip"
        style={{ inset: "0 76.47% 0 0" }}
      >
        <div
          className="absolute"
          style={{ inset: "5.56% 5.55% 5.56% 5%" }}
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32.2021 32"
          >
            <path
              d={svgPaths.p97b7900}
              fill="url(#logo_gradient)"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="logo_gradient"
                x1="16.2"
                x2="16.2"
                y1="0"
                y2="32"
              >
                <stop stopColor="#004EBA" />
                <stop offset="1" stopColor="#00A1E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Wordmark */}
      <div
        className="absolute overflow-clip"
        style={{ inset: "18.06% 0.47% 18.06% 31.37%" }}
      >
        <div className="absolute inset-[0_-0.03%_-0.24%_-0.03%]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 104.334 23.0547"
          >
            <path d={svgPaths.p23145f00} fill="#005BAC" />
            <path d={svgPaths.pc718680} fill="#005BAC" />
            <path d={svgPaths.p89c9300} fill="#005BAC" />
            <path d={svgPaths.pc7d3d80} fill="#005BAC" />
            <path d={svgPaths.p1a085700} fill="#005BAC" />
            <path d={svgPaths.p279f2580} fill="#005BAC" />
            <path d={svgPaths.p3903c530} fill="#005BAC" />
            <path d={svgPaths.p2c464200} fill="#005BAC" />
            <path d={svgPaths.p21761980} fill="#005BAC" />
            <path d={svgPaths.p16eca00} fill="#005BAC" />
            <path d={svgPaths.pe0ea500} fill="#005BAC" />
            <path d={svgPaths.p177ec500} fill="#005BAC" />
            <path d={svgPaths.p3446b600} fill="#005BAC" />
            <path d={svgPaths.p31903300} fill="#005BAC" />
            <path d={svgPaths.p382fe200} fill="#005BAC" />
            <path d={svgPaths.p131b5400} fill="#005BAC" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavMenu({ onNavClick }: { onNavClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-[2px] p-[12px]">
      <div className="text-[12px] opacity-60 pt-4 pb-2 px-3">Components</div>
      {navItems.map(({ to, label }) => (
        <NavLink key={to} to={to} style={FONT} onClick={onNavClick}>
          {({ isActive }) => (
            <div
              className={`h-[36px] flex items-center px-[12px] rounded-[6px] transition-colors duration-150 ${
                isActive
                  ? "bg-[rgba(10,110,231,0.08)]"
                  : "hover:bg-[rgba(10,110,231,0.04)]"
              }`}
            >
              <span
                className={`text-[14px] leading-[1.5] whitespace-nowrap ${
                  isActive ? "text-[#0a6ee7]" : "text-[#374151]"
                }`}
              >
                {label}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-5 h-5 text-[#374151]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

export function Root() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top nav — 56px */}
      <header className="sticky top-0 z-20 bg-white h-[56px] px-[24px] flex items-center gap-3">
        {/* bottom border overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 border-b border-[rgba(0,0,0,0.1)] pointer-events-none"
        />
        {/* Hamburger — mobile only */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden relative z-10 -ml-1 p-2 rounded-md hover:bg-[rgba(10,110,231,0.06)] transition-colors"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          <HamburgerIcon open={sidebarOpen} />
        </button>
        <Logo />
      </header>

      <div className="flex flex-1 min-h-0 relative">
        {/* Mobile overlay backdrop */}
        {sidebarOpen && (
          <div
            aria-hidden="true"
            className="fixed inset-0 top-[56px] z-10 bg-black/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Side menu */}
        <aside
          className={`
            fixed top-[56px] left-0 z-10 h-[calc(100vh-56px)] w-[256px] shrink-0
            bg-white overflow-y-auto border-r border-[rgba(0,0,0,0.1)]
            transform transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"}
            lg:sticky lg:translate-x-0 lg:shadow-none
          `}
        >
          <NavMenu onNavClick={() => setSidebarOpen(false)} />
        </aside>

        {/* Body — 24px padding */}
        <main className="flex-1 min-w-0 p-[24px] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}