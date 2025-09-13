import Image from "next/image";
import Link from "next/link";
import React, from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const layout = ({children}:AuthLayoutProps) => {
  return (
    <div>
        <Link className="flex items-center justify-center" href="/">
      <Image
        src={"/logo.png"}
        alt="travel"
        width={210}
        height={50}
        className="w-36 lg:w-52 h-auto"
      />
      </Link>
      <div>
        {children}
      </div>
    </div>
  );
};

export default layout;
