
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-96 bg-cover bg-center flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">About Us</h1>
          <p className="text-lg mt-4">Crafting digital experiences with passion and precision.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2020, UL.CO began as a small collective of designers and developers with a shared vision: to create beautiful, functional, and user-centered digital solutions. We believe that great design is not just about aesthetics, but about creating a seamless and intuitive experience for the end-user.
            </p>
            <p className="text-gray-400">
              Over the years, we have had the privilege of working with a diverse range of clients, from startups to established brands, helping them to achieve their goals and make their mark in the digital world.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
              alt="Our Team" 
              width={600} 
              height={400} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
                alt="Team Member 1" 
                width={200} 
                height={200} 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-400">Lead Designer</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop" 
                alt="Team Member 2" 
                width={200} 
                height={200} 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <Image 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop" 
                alt="Team Member 3" 
                width={200} 
                height={200} 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-gray-400">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
