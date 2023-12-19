import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={""} alt="logo" width={120} height={90} />
        </Link>
        <div>

            {/* SelectMenu */}
            {/* Search */}
            {/* ThemeToggler */}
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
