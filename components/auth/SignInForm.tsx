import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function SignInForm({ switchMode }: { switchMode: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setError("");

    if (!email || !password) {
      setError("Enter email and password");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      // 🔥 SUCCESS: user is now authenticated
      // AuthContext will automatically update user state

    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("User not found");
      } else if (err.code === "auth/wrong-password") {
        setError("Wrong password");
      } else {
        setError("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        onClick={handleSignIn}
        disabled={loading}
        className="w-full bg-indigo-600 py-2 rounded-lg text-white font-semibold disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <p className="text-sm text-gray-400">
        Don’t have an account?{" "}
        <span
          onClick={switchMode}
          className="text-indigo-400 cursor-pointer hover:underline"
        >
          Sign up
        </span>
      </p>
    </div>
  );
}
