import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./auth/AuthModal";

interface NavbarProps {
  scrolled: boolean;
  onGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onGetStarted }) => {
  const { user, userData, logout } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <span className="font-bold text-white">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Classiflick
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </div>

          {/* Auth section */}
          <div className="flex items-center gap-4">
            {!user ? (
              <button
                onClick={() => setShowAuth(true)}
                className="hidden sm:block text-sm font-medium text-white hover:text-indigo-400 transition-colors"
              >
                Sign In
              </button>
            ) : (
              <>
                {/* Show welcome only when userData is loaded */}
                {userData ? (
                  <span className="hidden sm:block text-sm text-gray-300">
                    Welcome {userData.name || "User"} 👋
                  </span>
                ) : (
                  <span className="hidden sm:block text-sm text-gray-300">
                    Loading...
                  </span>
                )}

                <button
                  onClick={logout}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Logout
                </button>
              </>
            )}

            <button
              onClick={onGetStarted}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};
