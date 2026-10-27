import Link from "next/link"
import Work from "@/components/Work"
import { projects } from "@/data/content"

export const metadata = { title: "All work, Mohsin Sheeraz" }

export default function AllWork() {
  return (
    <main className="wrap">
      <nav className="top" aria-label="Primary">
        <Link className="btn" href="/">Back home</Link>
      </nav>
      <h1 className="page-head">All work</h1>
      <section className="sec">
        <h2>Projects</h2>
        <Work projects={projects} />
      </section>
    </main>
  )
}