"use client";
import Image from "next/image";

import { Button } from "../ui/button";

function Navbar() {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#f6f6f6] px-32 py-4">
        <div className="flex justify-center items-center gap-1">
          <Image src="./logo.svg" alt="proofly" width={35} height={35} />
          <span className="text-2xl font-semibold">Proofly</span>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
