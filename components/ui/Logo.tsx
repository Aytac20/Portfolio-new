import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="center gap-4">
      <Image
        src="/miniLogo.svg"
        width={20}
        height={20}
        alt="Logo"
        className="w-10 h-auto"
      />
      <span className="text-[1.2rem] font-sora-bold">Personal</span>
    </Link>
  );
};

export default Logo;
