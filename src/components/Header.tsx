import { useState } from "react";
import arjunDp from "../images/arjun.png";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <header className="bg-card shadow-card border-b border-border w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground hidden sm:block">Lumen</h1>
          </div>
          {/* Right: User Info & DP */}
          <div className="flex items-center space-x-3">
            {/* Name and Title: show on desktop */}
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Arjun M.</p>
              <p className="text-xs text-muted-foreground">Performance Marketing Manager</p>
            </div>
            {/* DP: visible only on desktop */}
            <img
              src={arjunDp}
              alt="Arjun M."
              className="w-10 h-10 rounded-full object-cover hidden sm:block"
            />
            {/* Mobile: show only DP, show info when clicked */}
            <div className="relative sm:hidden">
              <button
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                onClick={() => setShowInfo((v) => !v)}
                aria-label="Show user info"
              >
                <img
                  src={arjunDp}
                  alt="Arjun M."
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
              {showInfo && (
                <div className="absolute right-0 mt-2 bg-card border border-border rounded shadow-lg p-2 z-10 min-w-[160px] flex flex-col items-center">
                  <img
                    src={arjunDp}
                    alt="Arjun M."
                    className="w-10 h-10 rounded-full object-cover mb-2"
                  />
                  <p className="text-sm font-semibold text-foreground">Arjun M.</p>
                  <p className="text-xs text-muted-foreground">Performance Marketing Manager</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
