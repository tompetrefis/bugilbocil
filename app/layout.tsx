import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
    metadataBase: new URL("https://bugilbocil.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'Tb7NeRjFu6wTWt8vYXeHfMDgkJgB518qjSqeN7Ce4-k',
        yandex: 'd62c4467ab0cd0de',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "logo": "https://bugilbocil.pages.dev/favicon.ico",
        "url": "https://bugilbocil.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bugilbocil.pages.dev"
            },
            "foundingDate":"2024-09-26"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "url": "https://bugilbocil.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "image": "https://bugilbocil.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bugilbocil.pages.dev"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bugilbocil.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bugilbocil.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
