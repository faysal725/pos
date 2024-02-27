"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          
        <PersistGate persistor={persistor}>
          {children}
          </PersistGate>
          </Provider>
      </body>
    </html>
  );
}
