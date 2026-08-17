import { notFound } from "next/navigation";
import Link from "next/link";
import { places, getPlace } from "@/lib/data";

export function generateStaticParams() {
  return places.map((p) => ({ city: p.city, category: p.category, slug: p.slug }));
}

export default async function PlaceDetail({ params }: { params: Promise<{ city: string; category: string; slug: string }> }) {
  const { city, category, slug } = await params;
  const place = getPlace(slug);
  if (!place || place.city !== city || place.category !== category) notFound();

  const cityName = city === "hanoi" ? "하노이" : city === "danang" ? "다낭" : "나트랑";
  const categoryName = category === "massage" ? "마사지" : "가라오케";

  return (
    <main>
      <section className="relative h-[520px] overflow-hidden">
        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-12">
            <div className="text-xs font-black tracking-[.3em] red">{categoryName.toUpperCase()}</div>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">{place.name}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-300">
              <span>★ {place.rating}</span><span>후기 {place.reviews}</span><span>{place.district}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
          <article>
            <h2 className="text-2xl font-black">업소 소개</h2>
            <p className="mt-6 whitespace-pre-line text-sm leading-8 text-zinc-500">{place.description}</p>

            <div className="mt-12 border-t border-white/10 pt-10">
              <h2 className="text-2xl font-black">이용 정보</h2>
              <div className="mt-6 space-y-4">
                {[
                  ["위치", place.address],
                  ["영업시간", place.hours],
                  ["평점", `★ ${place.rating}`]
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-white/5 pb-4 text-sm">
                    <span className="text-zinc-600">{k}</span><span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside>
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-sm text-zinc-600">VISIT / CONTACT</div>
              <h3 className="mt-2 text-xl font-black">예약 및 문의</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500">방문 전 영업시간과 이용 가능 여부를 확인해 주세요.</p>
              <button className="mt-7 w-full rounded-xl bg-red-600 py-4 text-sm font-black hover:bg-red-500">문의하기</button>
              <Link href={`/${city}/${category}`} className="mt-4 block text-center text-sm text-zinc-600 hover:text-white">{cityName} {categoryName} 전체보기</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}