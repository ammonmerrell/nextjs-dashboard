import '@/app/ui/global.css';
import  { inter } from 'app/ui/fonts';
import { MetaData } from 'next';

export const metaData: MetaData = {
  title: {
    template: '%s | Acme create',
    default: 'Acme create',
  },
  description: 'The ofiicial Next.js Course invoice creator, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= { '${inter.className} antialiased'}>{children}</body>
    </html>
  );
}