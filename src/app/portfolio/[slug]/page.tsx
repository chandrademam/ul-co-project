import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

const portfolioDetails = {
  "fashion-lookbook": {
    title: "Fashion Lookbook",
    category: "Photography",
    slug: "fashion-lookbook",
    coverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop",
    description:
      "A comprehensive lookbook for a new fashion line, capturing the essence of modern style and elegance. The project involved location scouting, model casting, and a full day of shooting to create a compelling visual narrative.",
    details: [
      { label: "Client", value: "Modern Apparel Co." },
      { label: "Year", value: "2023" },
      { label: "Services", value: "Photography, Art Direction" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516762689617-e1cff2b45937?q=80&w=2574&auto=format&fit=crop",
    ],
  },
  "urban-exploration": {
    title: "Urban Exploration",
    category: "Videography",
    slug: "urban-exploration",
    coverImage: "https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop",
    description: "A short film exploring the hidden corners of the city, blending dynamic shots with a powerful soundtrack to create an immersive urban experience.",
    details: [
      { label: "Client", value: "Self-Initiated" },
      { label: "Year", value: "2023" },
      { label: "Services", value: "Videography, Editing" },
    ],
    gallery: [],
  },
  "street-style": {
    title: "Street Style",
    category: "Photography",
    slug: "street-style",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2574&auto=format&fit=crop",
    description: "Capturing candid moments and unique styles on the streets, this project celebrates individuality and the fashion of everyday life.",
    details: [
      { label: "Client", value: "Style Magazine" },
      { label: "Year", value: "2022" },
      { label: "Services", value: "Photography" },
    ],
    gallery: [],
  },
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(portfolioDetails).map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const project = portfolioDetails[slug as keyof typeof portfolioDetails];

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found.</h1>
      </div>
    );
  }

  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello, I'm interested in your work on the '${project.title}' project.`;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Image */}
      <section className="h-[60vh] relative">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-400 mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">{project.title}</h1>
        </header>

        {/* Project Details & Description */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <ul className="space-y-2">
              {project.details.map((detail) => (
                <li key={detail.label}>
                  <strong>{detail.label}:</strong> <span className="text-gray-400">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center my-16">
          <Link href={whatsappUrl} target="_blank" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition duration-300 inline-flex items-center">
            Contact Us on WhatsApp
          </Link>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image src={image} alt={`${project.title} gallery image ${index + 1}`} width={500} height={500} className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
