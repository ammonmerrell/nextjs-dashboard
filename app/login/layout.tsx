import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme login',
    default: 'Acme login',
  },
  description: 'The official Next.js Learn loginpage, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh/login'),
};