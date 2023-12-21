import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDownMenu from "./GenreDrowDownMenu";

const Navbar = () => {
  return (
    <header className="fixed top-0 lef-0 w-full z-50 py-4 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/20220128173228!Disney+_logo.svg"} alt="logo" width={120} height={90}  className="invert dark:invert-0"/>
        </Link>
        <div className="flex items-center gap-4">
            {/* SelectMenu */}
            <GenreDropDownMenu/>
            {/* Search */}
            <SearchInput/>
            {/* ThemeToggler */}
          {/* <ThemeToggler /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
