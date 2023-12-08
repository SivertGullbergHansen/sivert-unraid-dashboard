import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { transition, variants } from "../config/animations";
import { ServerAddress } from "./ServerAddress";
import { server } from "@/lib/types";

export function Servers({
  setviewServers,
  ServerIcon,
  serverList,
}: {
  setviewServers: (newValue: boolean) => void;
  ServerIcon: any;
  serverList: server[];
}) {
  return (
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
      className="p-24 flex flex-col gap-6 items-center justify-start"
    >
      <h1 className="font-bold text-5xl flex items-center justify-center gap-2">
        Servers{" "}
        <Image
          src={ServerIcon}
          width={48}
          height={48}
          alt=""
          className="w-12 h-12"
        />
      </h1>
      <motion.div
        variants={variants}
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
  );
}
