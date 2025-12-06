"use client";

import Hero from "@/components/sections/home/Hero";
import Domains from "@/components/sections/home/Domains";


import Newsletter from "@/components/sections/home/Newsletter";
import UpcomingEvent from "@/components/sections/home/UpcomingEvent";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <UpcomingEvent />
      <Domains />
      <Newsletter />
    </div>
  );
}
