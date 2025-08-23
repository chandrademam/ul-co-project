import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Fashion Lookbook',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Urban Exploration',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Studio Portraits',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Autumn Collection',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1492707892479-7486c25655d4?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Monochrome Mood',
    category: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2574&auto=format&fit=crop'
  },
  {
    title: 'Street Style',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2574&auto=format&fit=crop'
  },
];

const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Explore a curated selection of our finest work, showcasing our passion for creativity and excellence across various domains.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link href="#" key={item.title} className="block bg-gray-900 rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={500} 
                  height={500} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-1">{item.category}</p>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;