import Link from "next/link";
import Image from "next/image";

import { Sparkles } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Header() {
  return (
    <div className="relative flex justify-between items-center p-4 px-6 border-b z-50">
      <div>
        <Link href="/">
          <Image src="/blinko.svg" alt="Blinko" width="90" height="50" />
        </Link>
      </div>
      <div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-accent dark:text-white flex items-center space-x-2"
        >
          <span>Create Profile</span>
          <Sparkles className="h-4 w-4 ml-2" />
        </HoverBorderGradient>
      </div>
    </div>
  );
}
