import Link from "next/link";
import { Github as LucideGithub } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-[#0B1220]">
      <div className="mx-auto max-w-[1400px] px-4 py-4 flex items-center justify-between text-sm text-zinc-500">
        
        {/* Left */}
        <span className="text-zinc-500">
          © {new Date().getFullYear()} DevBox
        </span>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/coder-tejas/DevBox"
            target="_blank"
            className="text-zinc-400 hover:text-blue-400 transition"
          >
            <LucideGithub className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </footer>
  );
}
