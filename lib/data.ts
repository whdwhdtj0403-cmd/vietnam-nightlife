export type CitySlug = "hanoi" | "danang" | "nhatrang";
export type CategorySlug = "massage" | "karaoke";

export type City = {
  slug: CitySlug;
  name: string;
  english: string;
  description: string;
  image: string;
};

export type Place = {
  slug: string;
  name: string;
  city: CitySlug;
  category: CategorySlug;
  district: string;
  rating: number;
  reviews: number;
  description: string;
  address: string;
  hours: string;
  image: string;
  featured?: boolean;
};

export const cities: City[] = [
  {
    slug: "hanoi",
    name: "하노이",
    english: "HANOI",
    description: "베트남 수도 하노이의 마사지와 가라오케 정보를 지역별로 확인하세요.",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=1800&auto=format&fit=crop"
  },
  {
    slug: "danang",
    name: "다낭",
    english: "DANANG",
    description: "다낭 여행 중 이용하기 좋은 마사지와 가라오케 정보를 확인하세요.",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1800&auto=format&fit=crop"
  },
  {
    slug: "nhatrang",
    name: "나트랑",
    english: "NHA TRANG",
    description: "나트랑 여행에 필요한 마사지와 가라오케 정보를 한곳에서 확인하세요.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1800&auto=format&fit=crop"
  }
];

export const places: Place[] = [
  {
    slug: "hanoi-massage-01",
    name: "하노이 프리미엄 마사지",
    city: "hanoi",
    category: "massage",
    district: "미딩",
    rating: 4.9,
    reviews: 128,
    description: "하노이 미딩 지역에서 편안하게 이용할 수 있는 마사지샵입니다. 실제 운영 정보와 메뉴는 등록 후 수정하세요.",
    address: "하노이 미딩",
    hours: "10:00 - 02:00",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "hanoi-karaoke-01",
    name: "하노이 프리미엄 가라오케",
    city: "hanoi",
    category: "karaoke",
    district: "미딩",
    rating: 4.8,
    reviews: 96,
    description: "하노이 미딩 지역의 가라오케 정보를 확인할 수 있습니다. 실제 업소 정보로 교체하세요.",
    address: "하노이 미딩",
    hours: "19:00 - 05:00",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "danang-massage-01",
    name: "다낭 힐링 마사지",
    city: "danang",
    category: "massage",
    district: "미케비치",
    rating: 4.8,
    reviews: 84,
    description: "다낭 미케비치 인근에서 이용하기 좋은 마사지샵입니다. 실제 운영 정보로 교체하세요.",
    address: "다낭 미케비치",
    hours: "10:00 - 01:00",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "danang-karaoke-01",
    name: "다낭 스타 가라오케",
    city: "danang",
    category: "karaoke",
    district: "한시장",
    rating: 4.7,
    reviews: 61,
    description: "다낭 시내에서 접근하기 좋은 가라오케 정보입니다. 실제 업소 정보로 교체하세요.",
    address: "다낭 시내",
    hours: "19:00 - 04:00",
    image: "https://images.unsplash.com/photo-1571266028243-d220c9c3b1d2?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "nhatrang-massage-01",
    name: "나트랑 오션 마사지",
    city: "nhatrang",
    category: "massage",
    district: "시내",
    rating: 4.9,
    reviews: 113,
    description: "나트랑 시내에서 편하게 방문할 수 있는 마사지샵입니다. 실제 운영 정보로 교체하세요.",
    address: "나트랑 시내",
    hours: "10:00 - 02:00",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop",
    featured: true
  },
  {
    slug: "nhatrang-karaoke-01",
    name: "나트랑 프리미엄 가라오케",
    city: "nhatrang",
    category: "karaoke",
    district: "시내",
    rating: 4.8,
    reviews: 72,
    description: "나트랑 여행객들이 찾기 좋은 가라오케 정보입니다. 실제 업소 정보로 교체하세요.",
    address: "나트랑 시내",
    hours: "19:00 - 05:00",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
    featured: true
  }
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getPlaces(city: string, category?: string) {
  return places.filter((p) => p.city === city && (!category || p.category === category));
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}