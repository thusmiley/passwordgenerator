import "./globals.css";

export const metadata = {
  title: "Password Generator App",
  description: "Author: Thu Smiley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/images/favicon.svg" />
        <meta property="og:image" content="/images/preview.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
