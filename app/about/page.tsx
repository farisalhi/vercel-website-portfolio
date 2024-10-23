import Link from 'next/link'

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-normal">
        about me
      </h1>
      <p className="mb-4">
        {`I’m a 4th-year Computer Science student at the University of Calgary, with a strong foundation in Java and C and a passion for computer networking, cybersecurity, and software development.`}
      </p>
    </section>
  )
}
