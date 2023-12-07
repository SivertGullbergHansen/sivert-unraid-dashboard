import { server } from "../lib/types";

export const serverList: server[] = [
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
