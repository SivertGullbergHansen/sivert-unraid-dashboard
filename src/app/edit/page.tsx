"use client";
import { ServerIcon } from "@/config/icon";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [serverName, setserverName] = useState("Astro");
  return (
    <>
      <div className="bg-base-2 p-8 w-[400px] fixed left-0 top-0 bottom-0 flex flex-col gap-8">
        <h1 className="font-bold text-5xl">Edit</h1>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Information</h2>
          <label className="flex flex-col gap-1">
            <p className="font-medium">Icon</p>
            <button className="px-3 text-base rounded-lg font-bold w-12 h-12 bg-white flex items-center justify-center">
              <Image
                src={ServerIcon}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </label>
          <label className="flex flex-col gap-1">
            <p className="font-medium">Server Name</p>
            <input
              type="text"
              value={serverName}
              onChange={(e) => setserverName(e.target.value)}
              className="px-3 h-12 text-base rounded-lg font-bold"
            />
          </label>
          <label className="flex flex-col gap-1">
            <p className="font-medium">Description</p>
            <input
              type="text"
              value="Welcome to my NAS!"
              className="px-3 h-12 text-base rounded-lg font-bold"
            />
          </label>
        </div>
      </div>
    </>
  );
}
