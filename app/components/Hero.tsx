import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData()
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3  lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Salud y Bienestar al alcance de un <span className="text-primary underline italic">click!</span>
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Tu farmacia en linea de confianza.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.hero1).url()}
              alt="Hero image"
              className="h-full w-full object-cover object-center"
              priority
              width={512}
              height={512}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.hero2).url()}
              alt="Hero image 2"
              className="h-full w-full object-cover object-center"
              priority
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          <Link href="/Medicamentos" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Medicamentos
          </Link>
          <Link href="/Conveniencia" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Conveniencia
          </Link>
          <Link href="Ofertas" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}
