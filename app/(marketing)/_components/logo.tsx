"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo: React.FC = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/vercel.svg"}
        height={40}
        width={40}
        alt=""
        className="dark:invert"
      />
      <p className={cn("font-semibold", font.className)}>Docubr</p>
    </div>
  );
};

export default Logo;
