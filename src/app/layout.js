import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Complete CS Degree",
  description:
    "Free resources, articles, roadmap, tutorials and many more to learn computer science. A community driven opensource project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="gBPl8PRPQlE7TZUTQTRJ8O1nLvNc1lso7IqyNYWzrTY"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
