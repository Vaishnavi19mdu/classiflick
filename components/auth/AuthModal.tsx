import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const { user } = useAuth();

  // 🔥 Auto-close after login
  useEffect(() => {
    if (user) onClose();
  }, [user]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="glass w-full max-w-md p-6 rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {mode === "signin" ? (
          <SignInForm switchMode={() => setMode("signup")} />
        ) : (
          <SignUpForm switchMode={() => setMode("signin")} />
        )}
      </div>
    </div>
  );
}
