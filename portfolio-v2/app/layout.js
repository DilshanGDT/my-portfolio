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

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "T Dilshan - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoFont.className} ${outfitFont.className} ${ovoFont.className} h-full antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
