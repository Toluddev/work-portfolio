import ChatBubble from '@/components/common/ChatBubble';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import Providers from '@/components/common/Providers';
import Script from 'next/script'; // ✅ Import Script
import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          {/* ✅ Umami Analytics Script */}
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="5ebcc0be-e261-4eb2-bc7b-6c2d837e8495"
            strategy="afterInteractive"
          />
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <Providers>
            <ReactLenis root>
              <Navbar />
              {children}
              <OnekoCat />
              <Quote />
              <ChatBubble />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}