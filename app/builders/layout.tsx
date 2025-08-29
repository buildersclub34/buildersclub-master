import { ReactNode } from 'react';
import ClientLayout from '../ClientLayout';

export default function BuildersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
