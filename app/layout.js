import "./globals.css";

export const metadata = {
  title: "Password Generator App",
  description: "Author: Thu Smiley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
