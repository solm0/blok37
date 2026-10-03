import { useState } from 'react'

type MarkerKind = 'park' | 'playground' | 'shopping'
type Marker = { key: string; type: MarkerKind | 'number'; label: string; left: string; top: string }

// Coordinates are preserved as percentages of the original 2380 × 1750 map image.
const markers: Marker[] = [
  { key: 'park', type: 'park', label: '프로젝트 공유', left: '12.69%', top: '11.1%' },
  { key: 'our-1', type: 'number', label: '웹사이트 기획', left: '37.02%', top: '23.22%' },
  { key: 'our-2', type: 'number', label: '디자인', left: '69.37%', top: '32.88%' },
  { key: 'playground', type: 'playground', label: '프로젝트 진행', left: '50%', top: '33.84%' },
  { key: 'playground', type: 'playground', label: '프로젝트 진행', left: '54.03%', top: '41.04%' },
  { key: 'our-4', type: 'number', label: '운영 도움', left: '21.13%', top: '55.86%' },
  { key: 'our-3', type: 'number', label: '구축', left: '62.18%', top: '67.68%' },
  { key: 'shopping', type: 'shopping', label: '중간 산출물 매일 10분 사용', left: '84.96%', top: '75.96%' },
  { key: 'park', type: 'park', label: '프로젝트 공유', left: '4.16%', top: '81.66%' },
  { key: 'playground', type: 'playground', label: '프로젝트 진행', left: '8.95%', top: '87.6%' },
]
const ourPart = ['웹사이트 기획', '디자인', '구축', '운영 도움']
const yourPart: { type: MarkerKind; label: string }[] = [
  { type: 'playground', label: '프로젝트 진행' },
  { type: 'park', label: '프로젝트 공유' },
  { type: 'shopping', label: '중간 산출물 매일 10분 사용' },
]

function MarkerIcon({ type, className = 'size-5 shrink-0 object-contain' }: { type: MarkerKind; className?: string }) {
  return <img className={className} src={`/assets/marker-${type}.svg`} alt="" />
}

function App() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null)

  return (
    <main
      className="min-h-screen overflow-hidden bg-blok-paper text-blok-blue lg:p-10"
    >
      <div
        className="mx-auto max-w-[1280px] lg:relative lg:min-h-[calc(100vh-5rem)]"
      >
        <section
          className="relative left-1/2 w-screen -translate-x-1/2 [aspect-ratio:595.28/416.68] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-full lg:-translate-x-1/2 lg:-translate-y-1/2"
          aria-label="blok 지도"
        >
          <img
            className="pointer-events-none block h-auto w-full"
            src="/assets/blok.svg"
            alt="네 개의 파란 blok이 배치된 공간 도형"
          />

          {markers.map((marker, index) => 
            <button
              className={`
                absolute z-1 grid w-[4.87%] cursor-pointer place-items-center border-0 p-0 font-inherit [aspect-ratio:1] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blok-blue 
                ${marker.type === 'number' ? 'rounded-[.8rem] bg-blok-orange text-[clamp(.9rem,2.25vw,2.8rem)] leading-none font-[750] text-blok-paper' : 'bg-transparent'}
              `}
              key={`${marker.key}-${index}`}
              style={{ left: marker.left, top: marker.top }}
              aria-label={marker.label}
              onMouseEnter={() => setActiveMarker(marker.key)}
              onMouseLeave={() => setActiveMarker(null)}
              onFocus={() => setActiveMarker(marker.key)}
              onBlur={() => setActiveMarker(null)}
            >
              {marker.type === 'number' 
                ? <span>{marker.key.at(-1)}</span> 
                : <MarkerIcon type={marker.type} className="size-full object-contain" />
              }
            </button>
          )}
        </section>

        <section className="px-4 pt-5 sm:px-7 lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:px-0 lg:pt-0">
          <div className="[container-type:inline-size]">
            <h1 className="m-0 flex items-start gap-2 whitespace-nowrap font-[autarchist-vf,sans-serif] text-[clamp(4.5rem,29cqw,11rem)] leading-[.78] font-normal text-blok-blue [font-variation-settings:'SRIF'_0,_'wght'_400] transition-[font-variation-settings,letter-spacing] duration-[360ms] hover:[font-variation-settings:'SRIF'_500,_'wght'_500]">
              blok37
              <span className="pt-[.1em] text-[.35em]">
                Pilot
              </span>
            </h1>
          </div>
        </section>

        <section className="px-4 pt-14 sm:px-7 sm:pt-20 lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:px-0 lg:pt-0">
          <div className="flex flex-col justify-between gap-12 break-keep text-lg font-semibold leading-[1.45] text-blok-blue lg:text-right">
            <p>의뢰자는 프로젝트만,<br />작업자는 웹사이트만.<br /><br />~10.15</p>
          </div>
        </section>

        <section className="px-4 pb-4 pt-14 sm:px-7 sm:pb-7 sm:pt-20 lg:absolute lg:bottom-0 lg:left-0 lg:z-10 lg:px-0 lg:pb-0 lg:pt-0">
          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="m-0 font-[autarchist-vf,sans-serif] text-[clamp(1.7rem,3vw,3rem)] leading-[.9] text-blok-orange [font-variation-settings:'SRIF'_100,_'wght'_400]">
                Our part
              </h2>
              <ol className="m-0 flex list-none flex-col gap-2 break-keep p-0 text-base font-semibold leading-snug text-blok-orange sm:text-lg">
                {ourPart.map((item, index) => { 
                  const key = `our-${index + 1}`; 
                  return (
                    <li
                      className={`
                        flex min-h-5 w-fit items-center gap-[.65rem] rounded-[.25rem] py-[.1rem] pr-[.25rem] pl-[.25rem] -ml-[.25rem] transition-colors 
                        ${activeMarker === key ? 'bg-[color-mix(in_srgb,var(--color-blok-blue)_16%,transparent)]' : ''}
                      `}
                      key={item}
                      onMouseEnter={() => setActiveMarker(key)}
                      onMouseLeave={() => setActiveMarker(null)}
                    >
                      <b className="grid size-5 place-items-center rounded-[.25rem] bg-blok-orange text-[.72em] font-bold text-blok-paper">
                        {index + 1}
                      </b>
                      <span className="min-w-0">{item}</span>
                    </li> 
                  )
                })}
              </ol>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="m-0 font-[autarchist-vf,sans-serif] text-[clamp(1.7rem,3vw,3rem)] leading-[.9] text-blok-orange [font-variation-settings:'SRIF'_100,_'wght'_400]">
                Your part
              </h2>
              <ul className="m-0 flex list-none flex-col gap-2 break-keep p-0 text-base font-semibold leading-snug text-blok-orange sm:text-lg">
                {yourPart.map(({ type, label }) => (
                  <li
                    className={`
                      flex min-h-5 w-fit items-center gap-[.65rem] rounded-[.25rem] py-[.1rem] pr-[.25rem] pl-[.25rem] -ml-[.25rem] transition-colors 
                      ${activeMarker === type ? 'bg-[color-mix(in_srgb,var(--color-blok-blue)_16%,transparent)]' : ''}
                    `}
                    key={label}
                    onMouseEnter={() => setActiveMarker(type)}
                    onMouseLeave={() => setActiveMarker(null)}
                  >
                    <MarkerIcon type={type} />
                    <span className="min-w-0">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
