import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Agentic AI Assistants | Intelligent Automation for Business | Sahil Siddiqui",
  description: "Transform your business with autonomous AI agents. We build custom-trained, agentic solutions for salons, clinics, and startups that automate lead qualification, customer inquiries, and 24/7 appointment booking. Deploy your digital concierge today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "LumistAI",
    "url": "https://sahilsiddiqui.site/ai-agents",
    "telephone": "",
    "priceRange": "$$",
    "image": "https://sahilsiddiqui.site/logo.png",
    "description": "Transform your business with autonomous AI agents. We build custom-trained, agentic solutions for salons, clinics, and startups that automate lead qualification, customer inquiries, and 24/7 appointment booking.",
    "provider": {
      "@type": "Person",
      "name": "Sahil Siddiqui",
      "url": "https://sahilsiddiqui.site"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions & Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Autonomous AI Agents",
            "description": "Custom-trained autonomous AI agents for salons, clinics, and startups."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automations",
            "description": "Robotic process automation, database syncing, and custom notification systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLM Fine-Tuning & RAG",
            "description": "Domain-specific model training and secure vector search integrations."
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-[#FAF9F6] text-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
