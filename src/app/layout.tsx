import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://brianmuigai.vercel.app/"),

	title:'Brian Muigai',

	description:
		"Based in Nairobi, I'm a Fullstack Developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Brian Muigai",
		description:
			"Based in Nairobi, I'm a Fullstack Developer passionate about building a modern web application that users love.",
		url: "https://brianmuigai.vercel.app/",
		siteName: "Brian Muigai",
		images: "/icon.jpg",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon1.png" />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
