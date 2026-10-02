const yourPart = [
  { icon: '/assets/your-part-playground.png', label: '프로젝트 진행' },
  { icon: '/assets/your-part-park.png', label: '프로젝트 공유' },
  { icon: '/assets/your-part-shopping.png', label: '중간 산출물 매일 10분 사용' },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-blok-paper px-4 py-4 text-blok-blue sm:px-7 sm:py-7 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[800px]">
        <section className="w-full">
          <img className="block h-auto w-full" src="/assets/blok-map.png" alt="네 개의 파란 blok과 원본 마커가 배치된 공간 도형" />
        </section>

        <section className="title-wrap lg:w-3/4">
          <h1 className="pilot-title flex items-start gap-2 whitespace-nowrap">
            blok37
            <span className="pt-[.1em] text-[.35em]">Pilot</span>
          </h1>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-12 sm:mt-20 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-14 sm:gap-20">
            
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="part-heading">Our part</h2>
                <ol className="flex flex-col gap-2 break-keep text-base font-semibold leading-snug sm:text-lg">
                  {['웹사이트 기획', '디자인', '구축', '운영 도움'].map((item, index) => <li key={item}><b>{index + 1}</b><span>{item}</span></li>)}
                </ol>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="part-heading">Your part</h2>
                <ul className="flex flex-col gap-2 break-keep text-base font-semibold leading-snug sm:text-lg">
                  {yourPart.map(({ icon, label }) => <li key={label}>{icon ? <img className="part-icon" src={icon} alt="" /> : <span className="part-icon-spacer" />}<span>{label}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12 break-keep text-lg font-semibold leading-[1.45]">
            <p>웹사이트가 필요한<br />브랜드/프로젝트라면?</p>
            <p className="text-lg leading-[1.55] sm:text-xl">0W<br />10.10까지</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
