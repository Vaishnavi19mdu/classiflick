import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

export default function SignUpForm({ switchMode }: { switchMode: () => void }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = async () => {
    setError("");

    if (!form.email || !form.password) {
      setError("Missing fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create Auth user
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const uid = res.user.uid;

      // 2️⃣ Create Firestore doc in `dusers`
      await setDoc(doc(db, "dusers", uid), {
        name: form.name,
        age: Number(form.age),
        gender: form.gender,
        email: form.email,
        createdAt: new Date(),
      });

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Create Account</h2>

      <input name="name" placeholder="Name" onChange={handleChange} className="auth-input" />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} className="auth-input" />

      {/* Gender dropdown */}
      <select
        name="gender"
        onChange={handleChange}
        className="auth-input bg-[#0b0f14] text-white"
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input name="email" placeholder="Email" onChange={handleChange} className="auth-input" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="auth-input" />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} className="auth-input" />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        onClick={handleSignUp}
        disabled={loading}
        className="w-full bg-indigo-600 py-2 rounded-lg text-white font-semibold"
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>

      <p className="text-sm text-gray-400">
        Already have an account?{" "}
        <span onClick={switchMode} className="text-indigo-400 cursor-pointer">
          Sign In
        </span>
      </p>
    </div>
  );
}
