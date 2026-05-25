import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailTest – A/B Test YouTube Thumbnails",
  description: "Automatically rotate thumbnail variants, track CTR, views, and engagement. Statistical analysis dashboard for YouTube creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32185979-907f-48e0-a413-9253f740307e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
