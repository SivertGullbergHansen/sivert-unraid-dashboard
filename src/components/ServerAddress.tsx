import React, { useEffect, useState } from "react";
import { server } from "../lib/types";
import { motion } from "framer-motion";
import { variants } from "../config/animations";
import { IoCopyOutline, IoOpenOutline } from "react-icons/io5";

export function ServerAddress({
  label,
  address,
  icon,
  description,
  isUrl,
}: server) {
  const [copied, Setcopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        Setcopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <motion.button
      variants={variants}
      onClick={() => {
        isUrl
          ? (location.href = address)
          : navigator.clipboard.writeText(address);
        Setcopied(true);
      }}
      whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 200 } }}
      className="py-2 px-4 rounded-lg bg-base-2 text-left w-full flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-2">
        {icon}
        <div>
          <p className="font-bold">{label}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      {isUrl ? <IoCopyOutline /> : <IoOpenOutline />}
    </motion.button>
  );
}
