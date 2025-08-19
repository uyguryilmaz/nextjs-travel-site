import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationLinks } from "@/constans";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 lg:hidden bg-orange-500 cursor-pointer text-white rounded-full ">
          <Menu />
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetTitle className="px-4 mt-4 text-3xl text-orange-500">Travel</SheetTitle>

        <div className="mt-4 flex flex-col px-5 gap-2">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
