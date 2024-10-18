import { Projects } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-4xl tracking-wider font-stretch-expanded font-bold">
        FARIS SALHI
      </h1>
      <h2 className="mb-2 text-xl font-normal tracking-tighter">
        4th-year Computer Science Student at the University of Calgary
      </h2>
      <p className="mb-4 italic">
        {"In pursuit of perfection, wherever the journey leads."}
      </p>
      <div className="transition-transform duration-300 w-96 h-96 overflow-hidden rounded-md mt-4 shadow-lg hover:scale-105">
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
