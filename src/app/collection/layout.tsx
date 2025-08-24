import { ReactNode } from "react";

export default function CollectionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#800000] min-h-screen text-white p-8">
      <header className="mb-6 border-b-4 border-dashed border-yellow-200 pb-4">
        <h1 className="text-4xl font-bold font-serif tracking-wide">Uli Collection</h1>
        <p className="mt-2 italic text-yellow-100 text-sm">Kekuatan, Kehangatan, Warisan Perempuan Batak</p>
      </header>
      {children}
    </div>
  );
}
