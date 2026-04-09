import { Outfit, Ovo, Roboto } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "T Dilshan - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoFont.className} ${outfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
