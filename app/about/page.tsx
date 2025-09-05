import Link from 'next/link'

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-normal">
        about me
      </h1>
      <p className="mb-4">
        {`5th-year Computer Science student at the University of Calgary with experience in software engineering, full‑stack web development, and object oriented design. Skilled in writing secure, tested, and continuously integrated code within agile teams. Experienced in developing scalable applications, interactive systems, and networked software.`}
      </p>
    </section>
  )
}
