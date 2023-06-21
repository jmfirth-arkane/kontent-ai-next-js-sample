'use client';
import '../styles/globals.css';
import Layout from '@/Components/Layout';
import React from 'react';
import { useParams } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// }

export interface RootLayoutProps extends React.PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const params = useParams();
  return (
    <html lang={params.lang}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;

// export default function RootLayout({
//   // Layouts must accept a children prop.
//   // This will be populated with nested layouts or pages
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Layout>
//           {children}
//         </Layout>
//       </body>
//     </html>
//   );
// }
