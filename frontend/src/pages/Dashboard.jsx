import React from "react";
import { Navigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function Dashboard({ user }) {
  if (!user) return <Navigate to="/login" />;

  return (
    <motion.div className="min-h-screen p-10 bg-white">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Your Details</h3>
            <p>Email: {user.email}</p>
            <p>Position: {user.position}</p>
          </CardContent>
        </Card>
        {/* Additional widgets or components can go here */}
      </div>
    </motion.div>
  );
}