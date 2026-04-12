import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { DM_Sans } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://66training.com"),
  title: {
    default:
      "66 Training Services | Higher Education Services & Workforce Development",
    template: "%s | 66 Training Services",
  },
  description:
    "California's leading higher education services organization delivering comprehensive workforce development, curriculum design, and project management solutions for community colleges, state agencies, and federal clients nationwide.",
  keywords: [
    "higher education services",
    "workforce development",
    "curriculum design",
    "curriculum designer",
    "workforce training programs",
    "job readiness",
    "project management higher education",
    "California professional services",
    "DVBE certified",
    "8a certified",
  ],
  authors: [{ name: "66 Training Services" }],
  creator: "66 Training Services",
  publisher: "66 Training Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://66training.com",
    siteName: "66 Training Services",
    title:
      "66 Training Services | Higher Education Services & Workforce Development",
    description:
      "California's leading higher education services organization delivering comprehensive workforce development, curriculum design, and project management solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "66 Training Services - Higher Education & Workforce Development",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://66training.com",
  name: "66 Training Services",
  url: "https://66training.com",
  foundingDate: "2016",
  email: "info@66training.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8690 Sierra College Blvd. Ste 160-366",
    addressLocality: "Roseville",
    addressRegion: "CA",
    postalCode: "95661",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "38.7521",
    longitude: "-121.2880",
  },
  areaServed: [
    {
      "@type": "State",
      name: "California",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],

  priceRange: "$$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workforce Development",
          description:
            "Comprehensive workforce training programs and development services for higher education and government agencies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Curriculum Design",
          description:
            "Professional curriculum development and instructional design services for community colleges and training programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Project Management",
          description:
            "Higher education project management and program management services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training Delivery",
          description:
            "Workforce training program implementation and delivery services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Employer Engagement",
          description:
            "Strategic employer partnerships and workforce engagement services",
        },
      },
    ],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Higher Education Services",
      description:
        "Comprehensive higher education consulting and workforce development services",
    },
  ],
  knowsAbout: [
    "Higher Education Services",
    "Workforce Development",
    "Curriculum Design",
    "Project Management",
    "Training Programs",
    "Job Readiness",
    "DVBE Services",
    "8A Certification",
  ],
  awards: ["DVBE Certified - Disabled Veteran Business Enterprise"],
  slogan: "California's Leading Higher Education Services Partner",

  // sameAs: [
  //   // Add social media profiles when available
  //   // 'https://www.linkedin.com/company/66-professional-services',
  //   // 'https://twitter.com/66proservices',
  // ],
};

// Organization Schema for brand recognition
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "66 Training Services",
  url: "https://66training.com",
  logo: {
    "@type": "ImageObject",
    url: "https://66training.com/logo.png",
    width: 250,
    height: 60,
  },
  email: "info@66training.com",
  description:
    "California-based higher education services firm delivering workforce development, curriculum design, and project management solutions for community colleges, state agencies, and federal clients.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${libreBaskerville.variable}`}
    >
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
