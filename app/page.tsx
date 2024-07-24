"use client";

import Header from "./_components/header";

import Particles from "@/components/magicui/particles";

export default function Landing() {
  return (
    <div className="p-6 bg-background">
      <div className="relative overflow-hidden h-[90vh] border rounded-xl">
        <Header />
        <Particles
          className="absolute z-10 inset-0"
          quantity={200}
          ease={20}
          color="#ffffff"
          refresh
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6e6e6e2e_1px,transparent_1px),linear-gradient(to_top,#6e6e6e2e_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
}
