import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import React from "react";
import Navbar from './components/navbar/Navbar'
import ClientOnly from "./components/ClientOnly";
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import RentModal from "@/app/components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
            <ToasterProvider />
            <SearchModal />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
            {children}
            <SpeedInsights/>
        </div>
      </body>
    </html>
  )
}
