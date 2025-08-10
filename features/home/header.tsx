import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "../auth/components/user-button";

export function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-blue-900/40 bg-[#0B1220] backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="DevBox" width={36} height={36} />
              <span className="font-semibold text-blue-400 tracking-wide">
                DevBox
              </span>
            </Link>

            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link
                href="/docs"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                Docs
              </Link>
              <Link
                href="https://codesnippetui.pro/templates"
                target="_blank"
                className="text-zinc-400 hover:text-blue-400 transition flex items-center gap-2"
              >
                API
                <span className="rounded bg-blue-600/20 text-blue-400 px-1.5 py-0.5 text-xs border border-blue-500/30">
                  New
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
}
