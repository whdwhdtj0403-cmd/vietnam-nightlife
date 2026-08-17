import Link from "next/link";
import type { City } from "@/lib/data";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/${city.slug}`} className="group">
      <article className="card-hover relative h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">
        <img src={city.image} alt={city.name} className="img-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute bottom-0 p-7">
          <div className="text-xs font-black tracking-[.3em] red">{city.english}</div>
          <h3 className="mt-2 text-3xl font-black">{city.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">{city.description}</p>
          <div className="mt-5 text-sm font-black">도시 정보 보기 →</div>
        </div>
      </article>
    </Link>
  );
}