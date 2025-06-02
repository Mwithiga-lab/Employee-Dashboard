import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE = "http://localhost:4000";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post(`${API_BASE}/signup`, { name, email, password, position });
      setMessage("Signup successful. You can now login.");
    } catch (err) {
      setMessage("Error during signup");
    }
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-2xl">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <Input placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />
          {message && <p className="text-sm text-center text-green-600">{message}</p>}
          <Button onClick={handleSignup} className="w-full">Sign Up</Button>
          <p className="text-center text-sm mt-2">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
        </CardContent>
      </Card>
    </motion.div>
  );
}