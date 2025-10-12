import { services } from "@/data/servicesData.js";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params; 

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="p-8 ">
      <h1 className="title text-center text-3xl text-[#120e49] sm:text-4xl font-bold relative inline-block">
          {service.title}
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h1>
        <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-700">{service.heading}</h3>
      <div className="flex flex-col gap-3 sm:flex-row-reverse sm:gap-0 sm:items-center">
      <Image
        src={service.image}
        alt={service.title}
        width={350}
        height={350}
        priority
        className="rounded-xl mt-11"
      />
      <p className="text-lg leading-relaxed text-gray-700">{service.paragraphs[0]}</p>
    </div>
      <p className="text-lg leading-relaxed text-gray-700 mt-4">{service.paragraphs[1]}</p>
      <p className="text-lg leading-relaxed text-gray-700 mt-3">{service.paragraphs[2]}</p>
    </div>
  );
}
