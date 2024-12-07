import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-12">
              <div>
                <Link href="/">Milkiyyat</Link>
              </div>
              <nav className="space-x-6">
                <Link href="#">Personal</Link>
                <Link href="#">Marchant</Link>
              </nav>
            </div>
            <nav className="space-x-8">
              <Link href="#">Help</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Login</Link>
              <Link href="#">Resister</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
