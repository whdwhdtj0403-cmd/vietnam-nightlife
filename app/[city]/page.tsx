import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { cities, getCity, getPlaces } from "@/lib/data";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const massage = getPlaces(citySlug, "massage");
  const karaoke = getPlaces(citySlug, "karaoke");

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <img src={city.image} alt={city.name} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container relative py-28">
          <div className="text-xs font-black tracking-[.3em] red">{city.english}</div>
          <h1 className="mt-4 text-6xl font-black">{city.name}</h1>
          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">{city.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${city.slug}/massage`} className="rounded-xl bg-red-600 px-6 py-3 text-sm font-black">마사지</Link>
            <Link href={`/${city.slug}/karaoke`} className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-black">가라오케</Link>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex items-end justify-between">
          <div><div className="text-xs font-black tracking-[.3em] red">MASSAGE</div><h2 className="mt-2 text-3xl font-black">{city.name} 마사지</h2></div>
          <Link href={`/${city.slug}/massage`} className="text-sm text-zinc-500 hover:text-white">전체보기 →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {massage.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="container py-20">
          <div className="flex items-end justify-between">
            <div><div className="text-xs font-black tracking-[.3em] red">KARAOKE</div><h2 className="mt-2 text-3xl font-black">{city.name} 가라오케</h2></div>
            <Link href={`/${city.slug}/karaoke`} className="text-sm text-zinc-500 hover:text-white">전체보기 →</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {karaoke.map((p) => <PlaceCard key={p.slug} place={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}