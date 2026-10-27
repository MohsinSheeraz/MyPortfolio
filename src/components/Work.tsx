"use client"
import Image, { type StaticImageData } from "next/image"
import { useRef, useState } from "react"

type Project = {
  title: string; year: string; blurb: string; stack: string[]
  status: string; url?: string; image: StaticImageData
}

export default function Work({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null)
  const preview = useRef<HTMLDivElement>(null)

  const follow = (e: React.PointerEvent) => {
    if (preview.current) preview.current.style.transform = `translate3d(${e.clientX + 28}px, ${e.clientY - 110}px, 0)`
  }

  return (
    <>
      <ul className="rows" onPointerMove={follow} onPointerLeave={() => setActive(null)}>
        {projects.map((p, i) => {
          const body = (
            <>
              <span className="row-head">
                <span className="row-title">{p.title}</span>
                <span className="row-meta">{p.status} · {p.year}</span>
              </span>
              <span className="row-text">{p.blurb}</span>
              <span className="row-stack">{p.stack.join(", ")}</span>
            </>
          )
          return (
            <li key={p.title} onPointerEnter={() => setActive(i)}>
              {p.url ? (
                <a className="row" href={p.url} target="_blank" rel="noopener noreferrer">{body}</a>
              ) : (
                <div className="row">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
      <div ref={preview} className="preview" aria-hidden="true">
        {projects.map((p, i) => (
          <Image key={p.title} src={p.image} alt="" fill sizes="320px" className={i === active ? "on" : ""} />
        ))}
      </div>
    </>
  )
}
