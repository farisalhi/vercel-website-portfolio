import Link from 'next/link'

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        about me
      </h1>
      <p className="mb-4">
        {`I’m a 4th-year Computer Science student at the University of Calgary, with a strong foundation in Java and C. My academic journey has been shaped by tackling complex problems, from designing algorithms to optimizing system performance. With a passion for software development and a keen interest in efficient computing, I aim to bridge theory and real-world application. While I enjoy creative pursuits like writing in my spare time, my primary focus is on honing my technical skills and contributing to innovative projects. Let’s collaborate to bring ideas to life through technology!`}
      </p>
    </section>
  )
}
