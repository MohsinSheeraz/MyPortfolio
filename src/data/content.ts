import fitness from "@/Icons/FitnessMain.png"
import feedback from "@/Icons/feedback.png"
import csgo from "@/Icons/CSGO.png"
import auction from "@/Icons/Auction.jpg"

export const links = {
  github: "https://github.com/MohsinSheeraz/",
  linkedin: "https://www.linkedin.com/in/mohsin-sheeraz-aa4a7a23a",
  email: "mohsinuddin729@gmail.com",
  phone: "+923269392506",
  resume: "/MohsinResume.pdf",
}

export const projects = [
  {
    title: "FitnessTracker",
    year: "2025",
    blurb: "Tracks weight and energy use in one place, with live analytics, goal tracking and automated progress reports.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "D3.js", "Docker", "Redis"],
    status: "Live",
    url: "https://eproject-fitness.vercel.app/",
    image: fitness,
  },
  {
    title: "Feedback Translator",
    year: "2025",
    blurb: "An AI helper for decoding what a client actually means, then replying in the tone you pick: soft, firm or professional.",
    stack: ["Next.js", "Node", "Express", "Tailwind"],
    status: "Live",
    url: "https://feedback-translator.vercel.app/",
    image: feedback,
  },
  {
    title: "CSGO Skins",
    year: "2025",
    blurb: "A CS-themed storefront with a sharp, fully responsive interface.",
    stack: ["React", "Next.js", "Tailwind", "ShadCN", "RadixUI"],
    status: "Live",
    url: "https://csgo-ivory.vercel.app/",
    image: csgo,
  },
  {
    title: "PakAuction",
    year: "2025",
    blurb: "An auction marketplace where users list, browse and bid, with sign-up perks. Front end done; backend in progress.",
    stack: ["HTML/CSS", "JavaScript", "Node", "Tailwind"],
    status: "Not deployed yet",
    url: undefined,
    image: auction,
  },
]

export const jobs = [
  {
    period: "Mar 2024 – Feb 2025",
    role: "Associate Front End Developer",
    company: "FissionFox",
    place: "Karachi",
    text: "One of eight developers on a cross-functional team building a real client product, then shipped post-launch revisions as scalable microservices. Worked in an Agile rhythm tied to client and sales needs, and picked up urgent client calls and chats.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Mongo", "Tailwind", "RadixUI"],
  },
  {
    period: "Aug 2022 – Jul 2024",
    role: "PHP WordPress Developer",
    company: "DigitEMB",
    place: "Austin, TX",
    text: "Started as a data entry associate and moved into technical work. Helped rebuild the company's main WordPress site, then modernised the legacy core-PHP client dashboard with new features and a cleaner, responsive interface. Got SMTP working in the deprecated project.",
    stack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "UI/UX"],
  },
]
