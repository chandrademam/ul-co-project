import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509395078627-62f95b3bee09?q=80&w=2574&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">Creative Portfolio</h1>
          <p className="text-lg md:text-xl font-light mb-8">A showcase of design, art, and modern aesthetics.</p>
          <Link href="/portfolio" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            View My Work
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Design That Speaks</h2>
          <p className="text-gray-400">
            I am a digital artist and designer with a passion for creating meaningful and beautiful experiences. My work is a blend of minimalism and functionality, aiming to solve problems and delight users. This portfolio represents a selection of my favorite projects.
          </p>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Portfolio Item 1 */}
            <div className="bg-black rounded-lg overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop" alt="Portfolio Item 1" width={500} height={500} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project Title 1</h3>
                <p className="text-gray-400 mt-2">Short description of the project.</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-black rounded-lg overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop" alt="Portfolio Item 2" width={500} height={500} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project Title 2</h3>
                <p className="text-gray-400 mt-2">Short description of the project.</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-black rounded-lg overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop" alt="Portfolio Item 3" width={500} height={500} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project Title 3</h3>
                <p className="text-gray-400 mt-2">Short description of the project.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8">Have a project in mind? I&apos;d love to hear about it.</p>
          <Link href="/contact" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
