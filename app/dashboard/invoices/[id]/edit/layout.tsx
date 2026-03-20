import '@/app/ui/global.css';
import  { inter } from 'app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme edit',
    default: 'Acme edit',
  },
  description: 'The ofiicial Next.js Course edit invoice page, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh/invoices'),
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