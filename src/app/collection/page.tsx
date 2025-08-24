import { ReactNode } from "react";

interface CollectionLayoutProps {
  children: ReactNode;
}

export default function CollectionLayout({ children }: CollectionLayoutProps) {
  return <>{children}</>;
}
