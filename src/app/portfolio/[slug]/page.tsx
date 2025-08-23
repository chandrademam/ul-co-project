import portfolioDetails from "@/lib/portfolioData";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(portfolioDetails).map((slug) => ({ slug }));
}

export default function PortfolioDetail({ params }: Props) {
  const detail = portfolioDetails[params.slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
      <p className="text-gray-700">{detail.description}</p>
    </div>
  );
}
