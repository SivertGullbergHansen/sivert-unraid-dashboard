import React, { useState } from "react";
import { linksData } from "../../config/apps";
import { categories } from "../../lib/types";
import { motion } from "framer-motion";
import { transition, variants } from "../../config/animations";
import Image from "next/image";
import astronaut from "fluentui-emoji/icons/modern/man-astronaut-light.svg";
import { ItemCard } from "./ItemCard";

export function AppCards({
  setviewServers,
}: {
  setviewServers: (newValue: boolean) => void;
}) {
  const [selectedFilter, setselectedFilter] = useState<string>("all");
  const [filters, setfilters] = useState<string[]>(["all"]);

  React.useEffect(() => {
    const f: string[] = ["all"];

    linksData.forEach((link) => {
      if (!f.includes(categories[link.category]))
        f.push(categories[link.category]);
    });

    setfilters(f);
  }, [selectedFilter]);

  function NavButton({ label }: { label: string }) {
    return (
      <button
        onClick={() => setselectedFilter(label)}
        className={`w-full px-4 h-11 rounded-lg font-bold ${
          selectedFilter === label
            ? "bg-primary text-base"
            : "bg-base-2 text-primary"
        }`}
      >
        <p className="capitalize">{label}</p>
      </button>
    );
  }

  return (
    <motion.div
      key="links"
      initial={{ opacity: 0.0001, y: -33 }}
      animate={{
        opacity: 1,
        y: 0,
        transition,
      }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          duration: 0.1,
          ease: "linear",
        },
      }}
      className="p-24 pt-96 flex flex-col gap-6 items-center justify-start"
    >
      <h1 className="font-bold text-5xl flex items-center justify-center gap-2">
        Astro{" "}
        <Image
          src={astronaut}
          width={48}
          height={48}
          alt=""
          className="w-12 h-12"
        />
      </h1>
      <div className="flex flex-col gap-6 w-[700px] text-white">
        <nav className="flex gap-6 w-full justify-center rounded h-full">
          {Object.values(filters).map((filter) => (
            <NavButton key={filter} label={filter} />
          ))}
        </nav>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          className="grid gap-6 grid-cols-2"
        >
          {linksData.map(
            (link, index) =>
              (selectedFilter === "all" ||
                categories[link.category] === selectedFilter) && (
                <ItemCard {...link} key={index + selectedFilter} />
              )
          )}
        </motion.div>
      </div>
      <button
        onClick={() => setviewServers(true)}
        className="text-primary underline underline-offset-4 decoration-2 px-4 py-2"
      >
        Server List
      </button>
    </motion.div>
  );
}
