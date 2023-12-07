"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppCards } from "@/components/AppCards";
import { Servers } from "@/components/Servers";

export default function Home() {
  const [viewServers, setviewServers] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {viewServers ? (
        <Servers setviewServers={setviewServers} />
      ) : (
        <AppCards setviewServers={setviewServers} />
      )}
    </AnimatePresence>
  );
}
