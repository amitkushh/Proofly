"use client";

import { Button } from "../ui/button";

function Navbar() {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#f6f6f6] px-32 py-4">
        <div>
          <span className="text-xl font-semibold">Proofly</span>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
