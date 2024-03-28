
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
// import { Provider } from "react-redux";
import { Providers } from "@/components/provider";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EZDCX",
  description: "Trading Broker",
};

export default function RootLayout({ children }) {
  return (


    <Providers store={store}>
      <html lang="en">
        <body className={inter.className}>
        
          <Navbar />
          {children}
         
        </body>
      </html>
       </Providers>


   

  );
}
