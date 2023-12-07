import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { variants } from "../config/animations";
import { linkDataType } from "../lib/types";

export function ItemCard({ href, title, description, icon }: linkDataType) {
  return (
    <motion.div variants={variants}>
      <Link
        href={href}
        className="rounded-lg bg-base-2 p-6 w-full h-full flex items-center justify-start gap-2"
      >
        {icon}
        <div>
          <p className="font-bold text-lg">{title}</p>
          {description && <p>{description}</p>}
        </div>
      </Link>
    </motion.div>
  );
}
