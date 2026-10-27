"use client"
import { useEffect, useRef } from "react"

// Letters thicken as the pointer comes near. Skipped for touch and reduced motion.
export default function Name({ lines }: { lines: string[] }) {
  const root = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(pointer: fine)").matches) return
    const letters = Array.from(el.querySelectorAll<HTMLElement>("[data-l]"))
    let x = -1e4, y = -1e4, raf = 0
    const paint = () => {
      raf = 0
      for (const l of letters) {
        const r = l.getBoundingClientRect()
        const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2))
        const t = Math.max(0, 1 - d / 280)
        l.style.fontVariationSettings = `"wght" ${Math.round(300 + 500 * t * t)}`
      }
    }
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; if (!raf) raf = requestAnimationFrame(paint) }
    const leave = () => { x = y = -1e4; if (!raf) raf = requestAnimationFrame(paint) }
    window.addEventListener("pointermove", move)
    document.documentElement.addEventListener("pointerleave", leave)
    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <h1 ref={root} className="name" aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span key={line} className="name-line" aria-hidden="true">
          {[...line].map((c, i) => (
            <span key={i} data-l>{c}</span>
          ))}
        </span>
      ))}
    </h1>
  )
}
