import "./globals.css";
import { Montserrat} from 'next/font/google';

export const metadata = {
  title: "VEENA AGENCIES",
  description: "Wholesale distributor in DELHI-NCR",
};

const Mont = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: 'swap'  
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Mont.className}>{children}</body>
    </html>
  );
}
