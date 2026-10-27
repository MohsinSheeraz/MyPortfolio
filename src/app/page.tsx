import Link from "next/link";
import Name from "@/components/Name";
import Work from "@/components/Work";
import ContactForm from "@/components/ContactForm";
import { jobs, links, projects } from "@/data/content";

export default function Home() {
  return (
    <main className="wrap">
      <nav className="top" aria-label="Primary">
        <a className="btn" href={links.resume} download>Resume</a>
      </nav>

      <header className="hero">
        <Name lines={["Mohsin", "Sheeraz"]} />
        <p className="lede">
          Front-end developer in Karachi, building interfaces with React,
          Next.js and TypeScript.
        </p>
      </header>

      <section id="work" className="sec">
        <h2>Selected work</h2>
       <div>
          <Work projects={projects.slice(0, 3)} />
          <Link className="btn more" href="/work">See more work</Link>
        </div>
      </section>

      <section id="experience" className="sec">
        <h2>Experience</h2>
        <div className="rows">
          {jobs.map((j) => (
            <article key={j.company} className="row static">
              <div className="row-head">
                <h3 className="row-title">
                  {j.role}, {j.company}
                </h3>
                <span className="row-meta">{j.period}</span>
              </div>
              <p className="row-text">{j.text}</p>
              <p className="row-stack">{j.stack.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="sec">
        <h2>Say hello</h2>
        <div>
          <ContactForm />
          <p className="elsewhere">
            <a href={`mailto:${links.email}`}>{links.email}</a>
            <a href={`tel:${links.phone}`}>{links.phone}</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
