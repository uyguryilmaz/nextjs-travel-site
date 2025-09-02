import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const MainSearch = () => {
  return (
    <div className="absolute z-50 left-1/2 transform -translate-x-1/2 top-[670px] md:top-[850px] lg:top-[450px] xl-top-[470px] 2xl:top-[570px container px-8]">
      <div className="bg-white shadow-lg py-10 px-2 lg:px-24 rounded-md lg:rounded-full flex flex-col mt-12 lg:mt-24 lg:flex-row items-center justify-between p-4 gap-3">
        <Select>
          <SelectTrigger className="w-full py-6">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paris">Paris</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="tokyo">Tokyo</SelectItem>
          </SelectContent>
        </Select>

        <Select>
        <SelectTrigger className="w-full py-6">
          <SelectValue placeholder="Activity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hiking">Hiking</SelectItem>
          <SelectItem value="swimming">Swimming</SelectItem>
          <SelectItem value="sightseeing">Sightseeing</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full py-6">
          <SelectValue placeholder="0 Days - 8 Days" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-8 ">0 Days - 8 Days</SelectItem>
          <SelectItem value="swimming">8 Days - 15 Days </SelectItem>
          <SelectItem value="sightseeing">15+ Days </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full py-6">
          <SelectValue placeholder="250$  - 800$" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-8 ">250$  - 800$ </SelectItem>
          <SelectItem value="swimming"> 800 $  - 1500$</SelectItem>
          <SelectItem value="sightseeing">1500$  - 3000$ </SelectItem>
        </SelectContent>
      </Select>

      <Button className="bg-orange-500 text-white hover:bg-orange-600 py-6 w-full lg:w-40">
        Find Now
      </Button>
      </div>
    </div>
  );
};

export default MainSearch;
