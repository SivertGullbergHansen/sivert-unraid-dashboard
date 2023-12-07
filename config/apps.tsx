import Image from "next/image";
import { categories, linkDataType } from "../lib/types";
import minecraft from "../src/components/Chest.gif";
import plex from "../src/components/plex.png";
import sd from "../src/components/sd.svg";
import Overseerr from "../src/components/Overseerr.png";

export const linksData: linkDataType[] = [
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
