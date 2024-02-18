export const metadata = {
  title: "Pinecone - Vercel AI SDK Example",
  description: "Pinecone - Vercel AI SDK Example",
};

import "../global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="luxury">
      <body>{children}</body>
    </html>
  );
}
