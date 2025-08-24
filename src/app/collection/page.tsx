export default function CollectionPage() {
  const products = [
    {
      href: "/collection/ragidup",
      name: "Ulos Ragidup",
      description: "Kehangatan tradisi dalam setiap helai benang yang ditenun dengan cinta.",
      icon: "🧶",
    },
    {
      href: "/collection/sibolang",
      name: "Ulos Sibolang",
      description: "Keanggunan klasik dengan motif yang menceritakan warisan leluhur.",
      icon: "🌟",
    },
    {
      href: "/collection/runjat",
      name: "Ulos Runjat",
      description: "Kekuatan dan keteguhan dalam setiap corak yang penuh makna.",
      icon: "💫",
    },
    {
      href: "/collection/sadum",
      name: "Ulos Sadum",
      description: "Kesederhanaan yang elegan, melambangkan kebijaksanaan hidup.",
      icon: "✨",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <a key={product.href} href={product.href} className="group border border-yellow-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/5 hover:scale-105">
          <div className="text-center mb-4">
            <span className="text-4xl block mb-2">{product.icon}</span>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-yellow-200 transition-colors">{product.name}</h2>
          </div>
          <p className="text-sm text-gray-200 text-center leading-relaxed">{product.description}</p>

          <div className="mt-4 text-center">
            <span className="text-yellow-200 text-sm font-medium group-hover:underline">Lihat Detail →</span>
          </div>
        </a>
      ))}
    </section>
  );
}
