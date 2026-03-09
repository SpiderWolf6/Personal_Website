import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { CursorEffect } from "@/components/CursorEffect";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";

// Load Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO - Update with your information
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website showcasing my projects and experience",
};

/**
 * Root Layout Component
 * 
 * This wraps all pages in the application
 * - Sets up the HTML structure
 * - Provides the ThemeProvider for dark/light mode
 * - Includes global Navbar and Footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider enables dark/light mode throughout the app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global space background - layer 0 */}
          <StarBackground />
          
          {/* Global cursor effect - layer 50 */}
          <CursorEffect />
          
          <div className="flex flex-col min-h-screen relative z-10">
            {/* Navigation bar appears on all pages */}
            <Navbar />

            {/* Main content area with page transitions - grows to fill available space */}
            <main className="flex-1">
              <PageTransitionWrapper>
                {children}
              </PageTransitionWrapper>
            </main>

            {/* Footer appears on all pages */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
