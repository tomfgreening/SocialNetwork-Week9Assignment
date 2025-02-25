import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignUpButton,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import RadixSocialsIcons from "../components/RadixSocialsIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pingr - Your new favourite social media network.",
  description: "Meta description",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <RadixSocialsIcons />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
