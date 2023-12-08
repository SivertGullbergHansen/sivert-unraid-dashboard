"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppCards } from "@/components/AppCards";
import { linksData } from "@/config/apps";
import { ServerIcon } from "@/config/icon";
import { serverList } from "@/config/servers";
import { Servers } from "@/components/Servers";
import { info } from "@/config/info";
import { Settings } from "@/components/Settings";
import { IoSettings } from "react-icons/io5";

export default function Home() {
  const [viewServers, setviewServers] = useState(false);
  const [showSettings, setshowSettings] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {viewServers ? (
        <Servers
          serverList={serverList}
          ServerIcon={ServerIcon}
          setviewServers={setviewServers}
        />
      ) : (
        <AppCards
          ServerName={info.server_name}
          ServerIcon={ServerIcon}
          linksData={linksData}
          setviewServers={setviewServers}
        />
      )}
      <button
        className="p-3 rounded-lg fixed top-4 right-4 bg-base-2 flex items-center gap-2"
        onClick={() => setshowSettings(true)}
      >
        <IoSettings className="w-4 h-4" />
      </button>
      {showSettings && <Settings setShow={setshowSettings} />}
    </AnimatePresence>
  );
}
