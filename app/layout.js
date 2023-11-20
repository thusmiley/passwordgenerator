import "./globals.css";

export const metadata = {
  title: "Password Generator App",
  description: "Author: Thu Smiley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="../public/preview.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
