import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rimanrabidas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Riman Rabidas | Full Stack Developer",
  description: "Portfolio of a Full Stack Developer",
  icons: {
    icon: "/mylogo.png",
    shortcut: "/mylogo.png",
    apple: "/mylogo.png",
  },
  openGraph: {
    title: "Riman Rabidas | Full Stack Developer",
    description: "Portfolio of a Full Stack Developer",
    url: siteUrl,
    siteName: "Riman Rabidas",
    images: [
      {
        url: "/mylogo.png",
        width: 1200,
        height: 630,
        alt: "Riman Rabidas Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const savedTheme = localStorage.getItem('portfolio-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.classList.toggle('light', !isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (error) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
