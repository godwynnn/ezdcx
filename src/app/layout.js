
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
// import { Provider } from "react-redux";
import { Providers } from "@/components/provider";
import { store, Persistor } from "@/store/store";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
// import { PersistGate } from "redux-persist/integration/react";
import Persist from "./persist";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EZRFX",
  description: "Trading Broker",
};

export default function RootLayout({ children }) {
  return (




    <html lang="en">
      <body className={inter.className}>
        <Providers store={store}>
          <Persist>
            <SkeletonTheme>

            {children}
            </SkeletonTheme>

          
          </Persist>
        </Providers>

      </body>
    </html>






  );
}
