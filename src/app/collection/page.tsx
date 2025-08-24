export default function CollectionPage() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
      <div className="border border-yellow-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Produk 1</h2>
        <p className="text-sm text-gray-200">Deskripsi singkat produk, terinspirasi dari motif ulos Ragidup.</p>
      </div>

      <div className="border border-yellow-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Produk 2</h2>
        <p className="text-sm text-gray-200">Menghadirkan keanggunan dan cerita dalam setiap helai.</p>
      </div>
    </section>
  );
}
