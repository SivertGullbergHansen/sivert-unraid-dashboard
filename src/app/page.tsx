"use client";
import { ItemCard } from "@/components/ItemCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import astronaut from "fluentui-emoji/icons/modern/man-astronaut-light.svg";
import minecraft from "../components/Chest.gif";
import plex from "../components/plex.png";
import sd from "../components/sd.svg";
import Overseerr from "../components/Overseerr.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoCopyOutline,
  IoOpenOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

export type linkDataType = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  category: categories;
};

enum categories {
  Games,
  AI,
  Entertainment,
}

const linksData: linkDataType[] = [
  {
    title: "MineOS",
    category: categories.Games,
    href: "https://astro:8443/",
    description: "Create minecraft servers with ease!",
    icon: (
      <Image
        className="w-12 h-12"
        alt=""
        src={minecraft}
        width={48}
        height={48}
      />
    ),
  },
  {
    title: "Plex",
    category: categories.Entertainment,
    href: "http://astro:32400/",
    description: "Stream movies, TV-shows, and anime",
    icon: (
      <Image
        className="w-12 h-12 object-contain p-1"
        alt=""
        src={plex}
        width={48}
        height={48}
      />
    ),
  },
  {
    title: "Overseerr",
    category: categories.Entertainment,
    href: "http://astro:5055",
    description: "Browse and request movies, TV-shows, and anime",
    icon: (
      <Image
        className="w-12 h-12 object-contain p-1"
        alt=""
        src={Overseerr}
        width={48}
        height={48}
      />
    ),
  },
  {
    title: "Stable Diffusion",
    category: categories.AI,
    href: "http://astro:9000",
    description: "AI image generation using stable diffusion",
    icon: (
      <Image
        className="w-12 h-12 object-contain p-1"
        alt=""
        src={sd}
        width={48}
        height={48}
      />
    ),
  },
];

type server = {
  label: string;
  description?: string;
  address: string;
  icon?: React.ReactNode;
  isUrl?: boolean;
};

const serverList: server[] = [
  {
    label: "Minecraft",
    description: "Vanilla (latest)",
    address: "astro:25565",
  },
  {
    label: "Minecraft",
    description: "Better Than Adventure",
    address: "astro:25566",
  },
  {
    label: "Project Zomboid",
    description: "Norwegian Winter",
    address: "astro:66666",
  },
  {
    label: "Valheim",
    description: "Vanilla",
    address: "astro:78354",
  },
  {
    label: "CS2",
    description: "Practice",
    address: "steam://connect/astro:27015",
    isUrl: true,
  },
];

export const transition = { type: "spring", stiffness: 200 };

export const demoVariants = {
  initial: { opacity: 0.0001, y: -33 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

function ServerAddress({ label, address, icon, description, isUrl }: server) {
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
      variants={demoVariants}
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

function Test({
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
          variants={demoVariants}
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

export default function Home() {
  const [viewServers, setviewServers] = useState(false);

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!viewServers && <Test setviewServers={setviewServers} />}
      {viewServers && (
        <motion.div
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
            Servers{" "}
            <Image
              src={astronaut}
              width={48}
              height={48}
              alt=""
              className="w-12 h-12"
            />
          </h1>
          <motion.div
            variants={demoVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="flex flex-col gap-4"
          >
            {serverList.map((server, index) => (
              <ServerAddress {...server} key={server.label + index} />
            ))}
          </motion.div>
          <button
            onClick={() => setviewServers(false)}
            className="text-primary underline underline-offset-4 decoration-2 px-4 py-2"
          >
            Back
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
