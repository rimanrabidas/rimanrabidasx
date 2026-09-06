"use client";

import { useEffect, useState } from "react";
import { Eye} from "lucide-react";

export default function VisitorCount() {
  const [visitors, setVisitors] = useState<number | null>(null);
  const [online, setOnline] = useState<number | null>(null);

  useEffect(() => {
    const saved = Number(localStorage.getItem("portfolio-visits") || "0");
    const next = saved + 1;

    localStorage.setItem("portfolio-visits", String(next));
    setVisitors(next);

   
    setOnline(Math.floor(Math.random() * 4) + 1);
  }, []);

  return (
    <div className="card mx-auto w-fit px-2">
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2">
          <Eye size={17} className="text-zinc-200" />

          <div className="flex justify-center items-center gap-2">
            <p className="text-lg font-bold">
              {visitors ?? "..."}
            </p>
            <p className="text-xs text-zinc-500">
              Visitors
            </p>
          </div>
        </div>

        <div className="h-8 w-px bg-zinc-700" />

        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          <div className="flex justify-center items-center gap-2">
            <p className="text-lg font-bold">
              {online ?? "..."}
            </p>
            <p className="text-xs text-zinc-500">
              Online
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}