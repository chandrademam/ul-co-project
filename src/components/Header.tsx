
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-10 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          UL.CO
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
