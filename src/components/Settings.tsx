import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { variants } from "@/config/animations";

function InputSetting({
  label,
  description,
  value,
  setValue,
}: {
  label: string;
  description?: string;
  value: string;
  setValue: (n: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold whitespace-nowrap text-lg">{label}</p>
        <div className="h-[1px] w-full bg-white" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white text-base font-bold w-64"
        />
      </div>
      {description && <p className="text-white text-sm">{description}</p>}
    </div>
  );
}

export function Settings({ setShow }: { setShow: (n: boolean) => void }) {
  return (
    <motion.div
      {...variants}
      className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-base/50 backdrop-blur flex items-center justify-center"
    >
      <div className="p-12 w-[800px] h-2/3 flex flex-col gap-4 bg-base-2 rounded-lg relative">
        <button
          onClick={() => setShow(false)}
          className="p-3 rounded absolute top-2 right-2"
        >
          <IoClose className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-3xl">Settings</h1>
        <InputSetting
          label="Server Name"
          description="The name of the server"
          value="Astro"
          setValue={() => {}}
        />
      </div>
    </motion.div>
  );
}
