import { Projects } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-4xl tracking-wider font-stretch-expanded font-bold">
        FARIS SALHI
      </h1>
      <h2 className="mb-2 text-xl font-normal tracking-normal">
        4th-year Computer Science Student at the University of Calgary
      </h2>
      <p className="mb-4 italic">
        {"Computer science enthusiast with a passion for networking, security, and innovative solutions. Leader, problem solver, and creative mind behind real-world projects."}
      </p>
      <div className="w-72 h-80 rounded-lg overflow-hidden mt-4 shadow-lg">
        <img
          src='\faris.jpeg'
          alt='Faris Salhi'
          className='object-cover w-full h-full'
        >
        </img>
      </div>
    </section>
  )
}
