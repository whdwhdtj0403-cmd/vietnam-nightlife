export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12">
        <div className="text-lg font-black">VIETNAM <span className="red">NIGHT LIFE</span></div>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
          하노이, 다낭, 나트랑의 마사지와 가라오케 등 베트남 여행 정보를
          지역별로 확인할 수 있는 정보 플랫폼입니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-xs text-zinc-600">
          <span>하노이</span><span>다낭</span><span>나트랑</span>
          <span>마사지</span><span>가라오케</span>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-zinc-700">
          © 2026 Vietnam Night Life. All rights reserved.
        </div>
      </div>
    </footer>
  );
}