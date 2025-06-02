import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE = "http://localhost:4000";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_BASE}/login`, { email, password });
      setUser(res.data.user);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-2xl">
        <CardContent className="space-y-4 p-6">
  <h2 className="text-2xl font-bold text-center">Login</h2>

  <form
    onSubmit={(e) => {
      e.preventDefault(); // prevent page reload
      handleLogin();      // your existing login function
    }}
    className="space-y-4"
  >
    <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    {error && <p className="text-red-500 text-sm">{error}</p>}
    <Button type="submit" className="w-full">Login</Button>
  </form>

  <p className="text-center text-sm mt-2">
    Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
  </p>
</CardContent>

      </Card>
    </motion.div>
  );
}