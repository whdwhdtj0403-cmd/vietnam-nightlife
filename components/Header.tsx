import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-black tracking-tight sm:text-xl">
            VIETNAM <span className="red">NIGHT LIFE</span>
          </div>
          <div className="mt-0.5 text-[9px] tracking-[.28em] text-zinc-600">
            TRAVEL & NIGHTLIFE GUIDE
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <Link href="/hanoi" className="hover:text-white">하노이</Link>
          <Link href="/danang" className="hover:text-white">다낭</Link>
          <Link href="/nhatrang" className="hover:text-white">나트랑</Link>
        </nav>

        <Link href="/#contact" className="rounded-full bg-red-600 px-4 py-2.5 text-xs font-black hover:bg-red-500 sm:px-5">
          문의하기
        </Link>
      </div>
    </header>
  );
}