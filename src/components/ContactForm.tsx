"use client"
import { useState } from "react"

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>
    setState("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, subject: `Message from ${d.name}` }),
      })
      if (!res.ok) throw new Error()
      form.reset()
      setState("sent")
    } catch {
      setState("error")
    }
  }

  return (
    <form onSubmit={submit} className="form">
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label className="wide">Message<textarea name="message" rows={4} required /></label>
      <div className="wide send">
        <button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending" : "Send message"}</button>
        <p role="status" aria-live="polite">
          {state === "sent" && "Thanks, I'll reply soon."}
          {state === "error" && "That didn't go through. Email me directly instead."}
        </p>
      </div>
    </form>
  )
}
