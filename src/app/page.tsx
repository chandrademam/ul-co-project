import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-rose-50 via-white to-amber-50 min-h-screen">
      {/* Hero Section - Modern Fashion Design */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-gray-900 relative overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-70 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-60 animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full opacity-50 animate-float delay-2000"></div>

        <div className="relative z-10 animate-fade-in max-w-4xl px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-extralight leading-tight mb-6 tracking-wide">
              <span className="bg-gradient-to-r from-gray-800 via-rose-600 to-amber-600 bg-clip-text text-transparent">FASHION</span>
              <br />
              <span className="text-4xl md:text-5xl font-light text-gray-700">PORTFOLIO</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>

          <p className="text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">Where creativity meets elegance. A curated collection of fashion designs that push boundaries and define trends.</p>

          <div className="animate-slide-up delay-500 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium py-4 px-8 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-rose-300/50">
              <span className="mr-2">View Collection</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-gray-800 text-gray-800 font-medium py-4 px-8 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105">
              About Designer
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full opacity-25 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <div className="animate-fade-in-scroll">
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-gray-800 tracking-wide">Design Philosophy</h2>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 mb-8">Fashion is more than clothing&mdash;it&apos;s a language of self-expression, a bridge between art and life.</p>

            <p className="text-lg leading-relaxed text-gray-500 max-w-3xl mx-auto">Every piece tells a story, crafted with meticulous attention to detail, sustainable practices, and timeless elegance that transcends seasons.</p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-scroll">
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-gray-800 tracking-wide">Featured Collections</h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the latest collections that blend contemporary aesthetics with timeless craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <Link href="/collection/ethereal-spring" className="group animate-fade-in-scroll delay-100">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop"
                    alt="Ethereal Spring Collection"
                    width={500}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full font-medium">Spring 2024</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-gray-800">Ethereal Spring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Delicate fabrics meet bold silhouettes in this collection inspired by nature&apos;s awakening.</p>
                  <div className="flex items-center text-rose-600 group-hover:text-rose-700 transition-colors">
                    <span className="text-sm font-medium mr-2">View Collection</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection 2 */}
            <Link href="/collection/urban-minimalist" className="group animate-fade-in-scroll delay-200">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop"
                    alt="Urban Minimalist Collection"
                    width={500}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full font-medium">Summer 2024</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-gray-800">Urban Minimalist</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Clean lines and sustainable materials define this modern city-inspired collection.</p>
                  <div className="flex items-center text-rose-600 group-hover:text-rose-700 transition-colors">
                    <span className="text-sm font-medium mr-2">View Collection</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection 3 */}
            <Link href="/collection/avant-garde-evening" className="group animate-fade-in-scroll delay-300">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop"
                    alt="Avant-Garde Evening Collection"
                    width={500}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full font-medium">Fall 2024</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3 text-gray-800">Avant-Garde Evening</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Dramatic statements and luxurious textures for the contemporary evening wardrobe.</p>
                  <div className="flex items-center text-rose-600 group-hover:text-rose-700 transition-colors">
                    <span className="text-sm font-medium mr-2">View Collection</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Button */}
          <div className="text-center mt-16 animate-fade-in-scroll delay-400">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium py-4 px-12 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="mr-2">Explore All Collections</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-100 via-white to-amber-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-200/20 to-amber-200/20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-rose-300/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-300/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-scroll">
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-gray-800 tracking-wide">Let&apos;s Create Together</h2>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 mb-12 max-w-3xl mx-auto">Ready to bring your fashion vision to life? Let&apos;s collaborate on your next project.</p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium py-4 px-8 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-rose-300/50">
                <span className="mr-2">Start a Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
