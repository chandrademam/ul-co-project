"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Collection data
const collections = {
  "ethereal-spring": {
    title: "Ethereal Spring",
    subtitle: "Spring Collection 2024",
    description: "Delicate fabrics meet bold silhouettes in this collection inspired by nature's awakening. Each piece captures the essence of spring's renewal through flowing lines and organic textures.",
    longDescription:
      "This collection draws inspiration from the delicate beauty of spring's first bloom. Soft pastels merge with bold architectural cuts, creating pieces that are both feminine and strong. The use of sustainable fabrics and eco-friendly dyes reflects our commitment to environmental consciousness while maintaining the highest standards of luxury fashion.",
    heroImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2574&auto=format&fit=crop",
    ],
    color: "rose",
    price: "Starting from $450",
    materials: ["Organic Cotton", "Silk Blend", "Recycled Polyester"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: ["Hand-finished seams for durability", "Sustainable materials sourced ethically", "Limited edition - only 50 pieces", "Available for custom sizing"],
  },
  "urban-minimalist": {
    title: "Urban Minimalist",
    subtitle: "Summer Collection 2024",
    description: "Clean lines and sustainable materials define this modern city-inspired collection.",
    longDescription: "Born from the rhythm of city life, this collection embodies the essence of modern minimalism. Every piece is designed for the contemporary woman who values both style and functionality.",
    heroImage: "https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581044777550-4cfa6ce6708f?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492707892479-7486c25655d4?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop",
    ],
    color: "blue",
    price: "Starting from $380",
    materials: ["Linen", "Organic Cotton", "Tencel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: ["Wrinkle-resistant fabric technology", "Machine washable", "Versatile day-to-night styling", "Ethically manufactured"],
  },
  "avant-garde-evening": {
    title: "Avant-Garde Evening",
    subtitle: "Fall Collection 2024",
    description: "Dramatic statements and luxurious textures for the contemporary evening wardrobe.",
    longDescription: "This collection pushes the boundaries of evening wear with bold silhouettes and unexpected details. Each piece is a work of art, designed to make a statement.",
    heroImage: "https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551803091-e2ab682b5185?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2574&auto=format&fit=crop",
    ],
    color: "purple",
    price: "Starting from $850",
    materials: ["Silk", "Satin", "Velvet", "Sequins"],
    sizes: ["XS", "S", "M", "L", "XL"],
    details: ["Hand-beaded embellishments", "Custom fitting available", "Luxury fabric selection", "Limited availability"],
  },
};

const getColorClasses = (color: string) => {
  const colorMap = {
    rose: "from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700",
    blue: "from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
    purple: "from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700",
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.rose;
};

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const collection = collections[params.slug as keyof typeof collections];

  if (!collection) {
    notFound();
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+6281234567890"; // Ganti dengan nomor WhatsApp kamu
    const message = `Hi! I'm interested in the ${collection.title} collection. I'd like to know more about:
- ${collection.title} ${selectedSize ? `(Size: ${selectedSize})` : ""}
- Pricing and availability
- Custom sizing options
- Delivery information

Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppConsultation = () => {
    const phoneNumber = "+6281234567890"; // Ganti dengan nomor WhatsApp kamu
    const message = `Hi! I'd like to schedule a design consultation for the ${collection.title} collection. I'm interested in:
- Personal styling session
- Custom design options
- Fabric and color selections
- Fitting appointment

Please let me know your available times. Thank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-white/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-rose-600 transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-gray-800">{collection.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Gallery */}
            <div className="animate-fade-in">
              <div className="relative mb-6">
                <Image src={collection.gallery[selectedImage]} alt={collection.title} width={600} height={700} className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-4">
                {collection.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 ${selectedImage === index ? "ring-4 ring-rose-500 scale-105" : "opacity-70 hover:opacity-100 hover:scale-105"}`}>
                    <Image src={image} alt={`${collection.title} ${index + 1}`} width={80} height={80} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in-scroll">
              <div className="space-y-6">
                <div>
                  <p className="text-rose-600 font-medium mb-2">{collection.subtitle}</p>
                  <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">{collection.title}</h1>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">{collection.description}</p>
                  <p className="text-gray-500 leading-relaxed">{collection.longDescription}</p>
                </div>

                {/* Price */}
                <div className="py-4 border-y border-gray-200">
                  <p className="text-2xl font-light text-gray-800">{collection.price}</p>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">Select Size</label>
                  <div className="flex flex-wrap gap-3">
                    {collection.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 border-2 rounded-2xl font-medium transition-all duration-300 ${
                          selectedSize === size ? "border-rose-500 bg-rose-500 text-white" : "border-gray-200 text-gray-700 hover:border-rose-300 hover:text-rose-600"
                        }`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppOrder}
                    className={`w-full bg-gradient-to-r ${getColorClasses(
                      collection.color
                    )} text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group`}>
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Order via WhatsApp
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <button
                    onClick={handleWhatsAppConsultation}
                    className="w-full border-2 border-gray-800 text-gray-800 font-medium py-4 px-8 rounded-2xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Schedule Consultation
                  </button>
                </div>

                {/* Product Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Collection Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Materials</p>
                      <p className="text-sm text-gray-600">{collection.materials.join(", ")}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Features</p>
                      <ul className="space-y-1">
                        {collection.details.map((detail, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-800">Explore More Collections</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium py-4 px-12 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="mr-2">View All Collections</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
