import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { cities, getCity, getPlaces } from "@/lib/data";

export function generateStaticParams() {
  return cities.flatMap((city) =>
    ["massage", "karaoke"].map((category) => ({ city: city.slug, category }))
  );
}

export default async function CategoryPage({ params }: { params: Promise<{ city: string; category: string }> }) {
  const { city: citySlug, category } = await params;
  const city = getCity(citySlug);
  if (!city || !["massage", "karaoke"].includes(category)) notFound();

  const items = getPlaces(citySlug, category);
  const title = category === "massage" ? "마사지" : "가라오케";

  return (
    <main>
      <section className="border-b border-white/10">
        <div className="container py-20">
          <Link href={`/${city.slug}`} className="text-sm text-zinc-600 hover:text-white">← {city.name}</Link>
          <div className="mt-8 text-xs font-black tracking-[.3em] red">{city.english} {category.toUpperCase()}</div>
          <h1 className="mt-3 text-5xl font-black">{city.name} {title}</h1>
          <p className="mt-5 max-w-2xl text-zinc-500">{city.name} 지역의 {title} 정보를 확인하세요.</p>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <PlaceCard key={p.slug} place={p} />)}
        </div>
      </section>
    </main>
  );
}