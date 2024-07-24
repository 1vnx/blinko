import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <div className="relative flex justify-between items-center p-4 px-6 border-b z-50">
      <div>
        <Link href="/">
          <Image src="/blinko.svg" alt="Blibko" width="90" height="50" />
        </Link>
      </div>
      <div>
        <Button variant="outline">
          Create Profile <Sparkles className="h-4 w-4 ml-2 text-purple-300" />
        </Button>
      </div>
    </div>
  );
}
